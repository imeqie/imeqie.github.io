var baseapp={
    	arraytojson:function(form){
		let sa = $(form).serializeArray();
		var obj=new Object(); 
		$(sa).each(function(index,e){
			obj[this.name]=this.value;
		});
		return obj;
    },
    printf:function(putfilename,getsheetName,getsheetHeader,getsheetData){
		var option={};
		option.fileName =putfilename; //文件名
		option.datas=[
		  {
			 sheetName:getsheetName,	//sheet名字
		  // sheetFilter:['two','one'], //列过滤 sheetFilter 列过滤(只有在data为object下起作用)(可有可无)
			sheetHeader:getsheetHeader, // 第一行
			sheetData:getsheetData // 数据
		  }
		];
		var toExcel=new ExportJsonExcel(option);
		return toExcel;
	},
	getdate:function(num){ 
	//关于日期
		var myDate = new Date();
		var yyyy=myDate.getFullYear();
		var mm=myDate.getMonth()+1;
		var dd=myDate.getDate();    	
		switch(num){
			case 0:
			//当天 2019-02-18
				mm=mm<10?'0'+mm:mm;
				dd=dd<10?'0'+dd:dd; 
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
			break;
			case 1:
			//此刻 14:11:15
				return myDate.toLocaleTimeString();  
			break;
			case 2:
			//当月有几天 
				 var fristDay= new Date(yyyy,mm,0);
				dd =fristDay.getDate()<10?'0'+fristDay.getDate():fristDay.getDate();
				return dd;
			break;
			case 3:
			//当月第一天
				mm=mm<10?'0'+mm:mm;
				var lastDay= new Date(yyyy,mm,1);
				dd =lastDay.getDate()<10?'0'+lastDay.getDate():lastDay.getDate();
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
			break;
			case 4:
			//当月最后一天
				mm=mm<10?'0'+mm:mm;
				var fristDay= new Date(yyyy,mm,0);
				dd =fristDay.getDate()<10?'0'+fristDay.getDate():fristDay.getDate();
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
			break;
			case 5:
			//上月第一天
				mm=mm-1;
				yyyy=(mm==0)?(yyyy-1):yyyy;
				mm=(mm==0)?'12':((mm<10)?'0'+mm:mm);
				var lastDay= new Date(yyyy,mm,1);
				dd ='0'+lastDay.getDate(); //获取第一天，所以不需要判断，直接0+1
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
			break;
			case 6:
			//上月最后一天
				mm=mm-1;
				yyyy=(mm==0)?(yyyy-1):yyyy;
				mm=(mm==0)?'12':((mm<10)?'0'+mm:mm);
				var fristDay= new Date(yyyy,mm,0);
				dd =fristDay.getDate(); //获取最后一天，所以不需要加0前缀
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
			break;
			case 7:
			//最近七天
				
				console.log('最近七天');
				dd=dd-7;
				//console.log(dd);
				mm=(dd<1?mm=mm-1:mm); //当日期-7 产生负数，月份自动减1.
				yyyy=(mm==0)?(yyyy-1):yyyy; //如果月份减1等于0，年份减1.
				mm=(mm==0)?'12':((mm<10)?'0'+mm:mm);//月份等于0，自动变成12月份.
				console.log(mm);
				nday=this.getdate(8)+dd; //获取上月的天数+最近七天的差额
				console.log(nday);
				dd=(dd<1?nday:((dd<10)?'0'+dd:dd));
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
				break;
			case 8:
			//上月有几天
				mm=mm-1;
				yyyy=(mm==0)?(yyyy-1):yyyy;
				mm=(mm==0)?'12':((mm<10)?'0'+mm:mm);
				var fristDay= new Date(yyyy,mm,0);
				dd =fristDay.getDate(); //获取最后一天，所以不需要加0前缀
				return dd;
				break;
			case 11:
				//昨天
				
				console.log('昨天');
				dd=dd-1;
				//console.log(dd);
				mm=(dd<1?mm=mm-1:mm); //当日期-7 产生负数，月份自动减1.
				yyyy=(mm==0)?(yyyy-1):yyyy; //如果月份减1等于0，年份减1.
				mm=(mm==0)?'12':((mm<10)?'0'+mm:mm);//月份等于0，自动变成12月份.
				console.log(mm);
				nday=this.getdate(8)+dd; //获取上月的天数+最近七天的差额
				console.log(nday);
				dd=(dd<1?nday:((dd<10)?'0'+dd:dd));
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
				break;
			case 12:
				//前天
				
				console.log('前天');
				dd=dd-2;
				//console.log(dd);
				mm=(dd<1?mm=mm-1:mm); //当日期-7 产生负数，月份自动减1.
				yyyy=(mm==0)?(yyyy-1):yyyy; //如果月份减1等于0，年份减1.
				mm=(mm==0)?'12':((mm<10)?'0'+mm:mm);//月份等于0，自动变成12月份.
				console.log(mm);
				nday=this.getdate(8)+dd; //获取上月的天数+最近七天的差额
				console.log(nday);
				dd=(dd<1?nday:((dd<10)?'0'+dd:dd));
				ymd= yyyy+'-'+mm+'-'+dd;
				return ymd;
				break;	
			default:
				// 年月日时分秒2019-2-18 14:13:10 缺点 月份和日期不补零
				return myDate.toLocaleString();
			break;
			};
			
	},
	toajax:function(urls,codes,contents){
		//关于 ajax
		let res="";
		$.ajax({
			type: "POST",  
			url: urls,
			data:{"code": codes,"content":contents},
			async:false,
			//dataType: "json",
			success: function (message,status) 
			{	
				res	=message;
			},
			error: function (message,status,errorThrown) {res=({"returnCode":404,"returnMsg":"链接失败！"})},   
			compile: function (message){res	=message}				
		});
		return res;
	},
	getUrlParam:function (name){
		//关于获取 get的kv
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if ( r != null ){
		   return decodeURI(r[2]);
		}else{
		   return null;
		} 
		
    },
    Storage:{
			get:function (name) {
        //获取key的值
        return JSON.parse(localStorage.getItem(name))
			},
			set:function (name, val) {
					//设置KEY value
					localStorage.setItem(name, JSON.stringify(val))
			},
			add:function (name, addVal) {
					//添加KEY的 value 的内容
					var oldVal = this.get(name)
					var newVal = oldVal.concat(addVal)
					this.set(name, newVal)
			},
			rem:function(name){
					//删除指定的key
					localStorage.removeItem(name);
			},
			cls:function(){
					//删除所有的
					localStorage.clear();
			}
		}
}
