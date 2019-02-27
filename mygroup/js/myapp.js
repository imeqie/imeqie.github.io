var app={
	arraytojson:function(form){
		let sa = $(form).serializeArray();
		var obj=new Object(); 
		$(sa).each(function(index,e){
			obj[this.name]=this.value;
		});
		return obj;
	},
	distime:function(){
		$('.mytime').text("现在时间："+app.getdate(0)+' '+app.getdate(1));
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
				// if (typeof(message)=='string')
				// {res=eval('(' + message + ')');}
				// else if (typeof(message)=='object')
				// {res	=message; }
				//else if (typeof(message)=='Array')
				// {res	=message; } 
				res	=message;
			},
			error: function (message,status,errorThrown) {res=({"returnCode":0,"returnMsg":"成功！"})},   
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
	drawpic:function (getid,arrs,typecone,picname,xzhou,yzhou,w,h){
		//typecone:line 折线图, bar 柱状图,pie 饼图
		var myChart = new JSChart(getid, typecone);  
		myChart.setBackgroundColor("#FFFFFD");//背景色
		myChart.setAxisNameX(xzhou);
		myChart.setAxisNameY(yzhou);
		if (w=='' && h=='')
		{
			myChart.setSize(500,300); //注：宽度500,、高度：300
		}else
		{
			myChart.setSize(w,h); //注：宽度500,、高度：300
		}
		
		myChart.setTitle(picname); //自定义标题名称
		myChart.setTitleColor("#FF0000"); //自定义标题样色
		myChart.setTitleFontSize(12); //自定义标题字体大小
		myChart.setDataArray(arrs);
		myChart.draw();  	
	},
	tableinit:function(){
		let html='';
			html+='			<thead>';
			html+='				<tr>';
			html+='					<th>标题1</th><th>标题2</th><th>标题3</th><th>标题4</th><th>标题5</th><th>标题6</th><th>标题7</th>';
			html+='				</tr>';
			html+='			</thead>';
			html+='			<tbody>';
			html+='			</tbody>';
			html+='';
		return 		html;	
	},
};

var app1={
	classchange:function(asn,op){
		//提供滚动的类 
		if (op=='add'){
		$(asn).addClass('bg-primary');
		}else if (op=='remove') {
		$(asn).removeClass('bg-primary');	
		}
	},
	showtie:function(content){
		//标签显示
		let shows='<div class="alert alert-danger" role="alert">'+content+'</div>';
		return shows;
	},
	distime:function(mytime){
		$(mytime).text("现在时间："+app.getdate(0)+' '+app.getdate(1));
	},
	chunk:function(array, size) {
            //获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
			//console.log(array);
            const length = array.length
            //判断不是数组，或者size没有设置，size小于1，就返回空数组
            if (!length || !size || size < 1) {
              return []
            }
            //核心部分
            let index = 0 //用来表示切割元素的范围start
            let resIndex = 0 //用来递增表示输出数组的下标
          
            //根据length和size算出输出数组的长度，并且创建它。
            let result = new Array(Math.ceil(length / size))
            //进行循环
            while (index < length) {
              //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
              result[resIndex++] = array.slice(index, (index += size))
            }
            //输出新数组
            return result;
    },
	pageinit:function(){
		$('#panel-title').text('销售概况');
		$('#panel-homepage').hide();
		$('#panel-condition').hide();
		$('.panel-footer').hide();
		
	},
	choosein:{
		"用户管理":11,
		"角色管理":12,
		"日志查看":13,
		"接口查询":21,
		"定时器":22,
		"关闭定时器":23,
	},
	choose :function (choose_ins){
		return this.choosein[choose_ins];
	},
	showtable:function(s,rt){
		let tabth="<tr>";	
		let xiazaith=new Array();
		for (let p in rt[0])
		{
			tabth+= "<th>"+p+"</th>";
			xiazaith.push(p);
		}
		tabth+="</tr>";
		let tabtds=new Array();
		for (let ss=0;ss<s.length;ss++)
			{
				tabtd="";
				//console.log(s[ss]);
				$(s[ss]).each(function(){
					tabtd +="<tr>";
					for (let p in rt[0])
					{
						//console.log(p);
						//console.log(this[p]);
						if (this[p]==0)
						{
							tabtd +="<td>0</td>";
							
						}else
						{
							tabtd +="<td>"+this[p]+"</td>";
						}
					}
					tabtd+="</tr>";
					//console.log(tabtd);
				})
				tabtds.push(tabtd);
				//console.log(tabtds);
			}
			//return tabtds;
			let obj=new Object();
			obj.tabth=tabth;
			obj.xiazaith=xiazaith;
			obj.tabtds=tabtds;
			return obj;
	},
}