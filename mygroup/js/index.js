$(document).ready(function(){
	let rest;//设定获取数据
	let errors;//弹出层内容
	let pages;//页面总数
	let tableth;//表格数据列名
	let tabletdz=new Array();//表格数据的总行
	let tabletds ;//按照行数拆分表格
	let tabletd; //表格数据的行数据
	let abouttable; //翻页的列
	let rowcount;//总行数
	let rowcol; //每页行数
	let xiazaifilename;
	let xiazaisheetname;
	let xiazaith=new Array();
	let xiazaitd=new Array();	
	//左侧菜单的使用
	$('.leftpage .panel').click(function(){
		//当面板被选中，当前面板的兄弟面板儿子，将会被隐藏，并且儿子的儿子list-group-item会被移除active
		$(this).siblings().children().collapse('hide').children().children().removeClass('active');

	})  
	//左侧菜单的明细的操作
	$('.leftpage .list-group-item').click(function(){
		//当前li被选中后，显示选中色，并且移除其他的选中色。
		$(this).addClass('active').siblings().removeClass('active');
		
		//设定右侧面板的导航标签
		let righttite='首页 /';
		righttite=righttite+$(this).parent().parent().parent().find('.lefttite').text()+' /'+$(this).text();
		$('.rightpage').find('.panel-heading').text(righttite);
		//首页区域撤销内容
		$('#panel-homepage').hide();
		//显示条件区域
		$('.rightpage .panel-body').removeClass('fullheight2');
		$('#panel-condition').show();
		
		//显示数据区域
		$('.panel-footer').show();
		//console.log($(this).children('strong').text());
		let appid=app1.choose($(this).children('strong').text());
		$('form').attr({"adata":appid});//给与form一个参考值；提供查询subbtn的标志
		//初始化条件区域
		
		$('.tablelist').html(app.tableinit());
		$('.xiazai').addClass('disabled');		
		$('input[name="bgsdate"]').val(app.getdate(3));//当月第一天
		$('input[name="ensdate"]').val(app.getdate(0));//今天
		
		if (appid=='11'){}
		else if (appid=='12'){}
		else if (appid=='13'){}
 
		else if (appid=='21'){}
		else if (appid=='22'){}
		else if (appid=='23'){}
		else if (appid=='24'){}
		else if (appid=='25'){}
		else if (appid=='26'){
			$('.conv').addClass('vishid');
		
		}
		else if (appid=='31')
		{
			
			$('.conv').addClass('vishid');
			$('#addon1').removeClass('vishid').text('门店名称');
			$('#addon2').removeClass('vishid').text('');
			$('#addon3').removeClass('vishid').text('');
			$('#addon4').removeClass('vishid').text('');			
			$('input[aria-describedby="addon1"]').removeClass('vishid').attr({"name":"orgname","placeholder":"门店名称"});
			$('input[aria-describedby="addon2"]').removeClass('vishid').attr({"name":"","placeholder":""});
			$('input[aria-describedby="addon3"]').removeClass('vishid').attr({"name":"","placeholder":""});
			$('input[aria-describedby="addon4"]').removeClass('vishid').attr({"name":"","placeholder":""});
		}
		else if (appid=='32')
		{			
			$('#addon1').removeClass('vishid').text('用户信息');
			$('#addon2').removeClass('vishid').text('门店信息');
			$('#addon3').removeClass('vishid').text('用户手机');
			$('#addon4').removeClass('vishid').text('用户职务');
			
			$('input[aria-describedby="addon1"]').removeClass('vishid').attr({"name":"user","placeholder":"用户信息"});
			$('input[aria-describedby="addon2"]').removeClass('vishid').attr({"name":"orgname","placeholder":"门店信息"});
			$('input[aria-describedby="addon3"]').removeClass('vishid').attr({"name":"mobile","placeholder":"用户手机"});
			$('input[aria-describedby="addon4"]').removeClass('vishid').attr({"name":"position","placeholder":"用户职务"});
		}
		else if (appid=='33')
		{
			$('.conv').addClass('vishid');
			$('#addon1').removeClass('vishid').text('代理商：');
			$('#addon2').removeClass('vishid').text('门店信息');
			$('#addon3').removeClass('vishid').text('大区经理');
			$('#addon4').removeClass('vishid').text('');
			$('input[aria-describedby="addon1"]').removeClass('vishid').attr({"name":"agent","placeholder":"代理商："});
			$('input[aria-describedby="addon2"]').removeClass('vishid').attr({"name":"orgname","placeholder":"门店信息"});
			$('input[aria-describedby="addon3"]').removeClass('vishid').attr({"name":"fromwho","placeholder":"大区经理"});
			$('input[aria-describedby="addon4"]').removeClass('vishid').attr({"name":"","placeholder":""});
			

		}
		console.log(appid);
		$('form').attr({"adata":appid});//给与form一个参考值；提供查询subbtn的标志
		$('.subbtn').removeClass('disabled');
	})
	
 
	$('.subbtn').click(function(){
		//搜索按钮控制
		$('.djlie').text(1);
		$('.yeshu').text(1);
		$('.hangshu').text(1);
		if ($('.subbtn').hasClass('disabled'))
		{
			errors=("当前不能查询。请选择菜单项！");
			$('#modalcon').modal('show');
			$('.modal-body').html(app1.showtie(errors));
			$('#modelsubmit').hide();
		}else
		{
			//let contents=$("form").serializeArray();	
			//let contents=$("form").serialize();
			let contents =app.arraytojson("form");
			$('.tablelist').html(app.tableinit());
			
			
			if ($('form').attr("adata")==21)
			{
				
			}else if ($('form').attr("adata")==22)
			{
				
			}else if ($('form').attr("adata")==23)
			{
				
			}else if ($('form').attr("adata")==24)
			{
				message=app.toajax("./php/adminindex.php",'dept','ac');
			
			}else if ($('form').attr("adata")==25)
			{
				message=app.toajax('./php/adminindex.php','userid','admin');
				 
			}else if ($('form').attr("adata")==26)
			{
				message=app.toajax('./php/adminindex.php','get_sale',contents); 
			}
			else if ($('form').attr("adata")==31)
			{
				message=app.toajax('./php/adminindex.php','finddept','admin');
			}else if ($('form').attr("adata")==32)
			{
				message=app.toajax("./php/adminindex.php",'finduserid','ac');
			}
			else if ($('form').attr("adata")==33)
			{
				message=app.toajax('./php/adminindex.php','yesicsale',contents);
				 
			}	
			console.log(message);
			rest=eval('(' + message + ')');
			
			if (rest.returnCode==0)
			{
				let tabth="";
				let tabtd="";
				let tabtds=new Array();
				let rt=rest.returnContent;

				let ct=$(".cowcount").find("option:selected").text();
				
				let s=app1.chunk(rt,parseInt(ct));
				//console.log(s.length);
				
				let obj=new Object();
				if ($('form').attr("adata")==26)
				{
					obj=app1.showtableth(s,rt);
					
				}else
				{
					obj=app1.showtable(s,rt);
					
				}
				
				tabth=obj.tabth;
				xiazaith=obj.xiazaith;
				tabtds=obj.tabtds;
				
				//提交数据给下载按钮	
				xiazaitd=rt;
				//表格头部
				$('.tablelist>thead').html(tabth);
				//表格明细，并且明细是第一页[0]
				$('.tablelist>tbody').html(tabtds[0]);
				//$('.upbtn').click(function(e){console.log($(this).parent().next().text());});
				//移除下载按钮的状态
				$('.xiazai').removeClass('disabled');
				//console.log(tabtds[0]);
				//console.log(rt.length+"行数");
				let arrsys=new Array();
				for (let isss=0;isss<rt.length;isss++)
				{
					arrsys.push(isss);
				}
				let st=app1.chunk(arrsys,parseInt(ct));
				//console.log(st.length);
				$('.hangshu').text(parseInt(rt.length)); //总行数
				$('.yeshu').text(parseInt(st.length)); //总页数
				
				//翻页控件
				 $.jqPaginator('.abouttable', {
					totalPages: parseInt(st.length),//总页数 
					visiblePages: 5,//同时显示li数
					currentPage: 1,//默认显示 第几页 
					prev: '<li class="prev"><a href="javascript:;"><</a></li>',
					next: '<li class="next"><a href="javascript:;">></a></li>',
					page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
					onPageChange: function (num, type) {
						$('.djlie').text(num);
						let tdsnum=num-1;
						$('.tablelist>tbody').html(tabtds[tdsnum]);
					}
				});
				$('td').on('click','.upbtn',function(e){
					let nums=$(this).parent().next().text();
					let numshtml=`<div class="input-group">
					  <input type="text" class="form-control upshi" placeholder="`+nums+`">
					  <span class="input-group-btn">
						<button class="btn btn-danger doupbtn" type="button">删除</button>
					  </span>
					</div>`;
					$('#modalcon').modal('show');
					$('.modal-body').html(numshtml);
					$('#modelsubmit').hide();
					$('.modal-body').on('click','.doupbtn',function(e){
						 console.log(nums);
						 rest=app.toajax('./php/adminindex.php','update_sale',nums);
						 console.log(rest);
						 numshtml=numshtml+'<button type="button" class="btn btn-success">'+rest.returnMsg+'</button>';
						 $('.modal-body').html(numshtml);
					})
					
					});
			
			}else
			{
				errors=("错误代码："+rest.returnCode+",错误信息："+rest.returnMsg);
				$('#modalcon').modal('show');
				$('.modal-body').html(app1.showtie(errors));
				$('#modelsubmit').hide();
			}
		
		}
	})
	

	$('.xiazai').click(function(){
		//下载按钮控制
		if ($(this).hasClass('disabled'))
		{
			errors=("当前不能下载！");
			$('#modalcon').modal('show');
			$('.modal-body').html(app1.showtie(errors));
			$('#modelsubmit').hide();
		}
		else{
			if(xiazaitd){
				console.log(xiazaith);
				console.log(xiazaitd);
				let prints=app.printf('yesicsale'+app.getdate(0),'yesicsale',xiazaith,xiazaitd);
				prints.saveExcel();
			}else
			{
				alert("当前条件没有数据！请重新查询~");
			}
		}
	});		
	
	
	$('#btnchange').click(function(){
		//每页行数控制
		//$(".cowcount").find("option:selected").text();
		$('.subbtn').click();

	})
	if($.cookie('form_name'))
	{
		$('.form_name').text($.cookie('form_name'));
	}else
	{
		$('#modalcon').modal('show');
		$('.modal-body').html(app1.showtie('非法进入！'));
		$('#modelsubmit').hide();
		$('#modelclose').hide();
		$('#xclose').hide();
		let ur='login.html';
		console.log(encodeURI(ur));
		window.location.href=encodeURI(ur);
	}
	
	
});

$(document).ready(function(){
		//右侧主要区域的首页显示
	$('#panel-homepage .list-group-item').click(function(){
		//当前li被选中后，显示选中色，并且移除其他的选中色。
		//$(this).addClass('active').siblings().removeClass('active');
		//let picn=$(this).attr('adata');
		//console.log(picn);
	})
	//1.销售概况
	let dothing=function(picn,putid){
		message=app.toajax('php/mymain.php','select',picn);
		//message=app.toajax('php/adminindex.php','putct','');
		
		if (message!="链接错误"){
			
			let res=eval('(' + message + ')');
		}else
		{
			res={"returnCode":0,"returnMsg":"成功！","returnContent":[{"sdate":"2019-02-27","putct":"1","zsale":"169.00","salenum":"1","cossalenum":"0","bigsale":"0","orgname":"公主岭成成美妆","yesicsale":"169.00"}],"rows":1}
		}
		
		if (res.returnCode==0)
		{
			con=res.returnContent;
			let cons;
			//return con;
			cons=$(putid+' a').eq(0).text();
			$(putid+' a').eq(0).html(cons+'：<b>[日期：'+con[0].sdate+'；销售额：'+con[0].zsale+']</b>');
			cons=$(putid+' a').eq(1).text();
			$(putid+' a').eq(1).html(cons+'：<b>[提交数：'+con[0].putct+']</b>');
			cons=$(putid+' a').eq(2).text();
			$(putid+' a').eq(2).html(cons+'：<b>[总支数：'+con[0].salenum+']</b>');
			cons=$(putid+' a').eq(3).text();
			$(putid+' a').eq(3).html(cons+'：<b>[主推支数：'+con[0].cossalenum+']</b>');
			cons=$(putid+' a').eq(4).text();
			$(putid+' a').eq(4).html(cons+'：<b>[大单数：'+con[0].bigsale+']</b>');
			cons=$(putid+' a').eq(5).text();
			$(putid+' a').eq(5).html(cons+'：<b>[门店：'+con[0].orgname+'；销售额:'+con[0].yesicsale+']</b>');
		}else
		{
			console.log('无法获取数据！');
		}
	}
	//2.销售概况，今天和昨天
	dothing(0,'#todayContents');
	dothing(10,'#yesterdayContents');

	//3.最近七天销售情况
	let dothing1=function(picn,putid,putype){
		message=app.toajax('php/mymain.php','select',picn);
		if (message!="链接错误"){
			
			let res=eval('(' + message + ')');
		}else
		{
			message={"returnCode":0,"returnMsg":"成功！","returnContent":[{"sdate":"2019-02-20","yesicsale":"16809.77"},{"sdate":"2019-02-21","yesicsale":"22267.50"},{"sdate":"2019-02-22","yesicsale":"23909.75"},{"sdate":"2019-02-23","yesicsale":"50660.98"},{"sdate":"2019-02-24","yesicsale":"24518.34"},{"sdate":"2019-02-25","yesicsale":"38815.04"},{"sdate":"2019-02-26","yesicsale":"21986.00"},{"sdate":"2019-02-27","yesicsale":"169.00"}],"rows":8}
		}
		let res=eval('(' + message + ')');
		if (res.returnCode==0)
		{
			//con=res.returnContent;
			//console.log(con);
			let arrs=new Array(['2019-02-18',96893.5],['2019-02-19',48869.4],['2019-02-21',16809.77],['2019-02-22',21572.5],['2019-02-24',21094.75]);
			//let arrs=new Array();
			for (let i=0;i<con.length;i++)
			{
				arrs.push(new Array(con[i].sdate,parseInt(con[i].yesicsale)));
			}
			//console.log(arrs);
			
			app.drawpic(putid,arrs,putype,'最近7天销售','日期','金额',$('#salechart').width()*0.8,300);
		}else
		{
			console.log('无法获取数据！');
		}
	}
	//4.销售情况画图	默认折线图
	dothing1(7,'salechart','line');
	//5.并且销售画图，切分成图三种选择
	$('#salechartbtn a').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		let picn=$(this).attr('adata');
		if (picn==31)
		{	//折线图
			dothing1(7,'salechart','line');
		}else if (picn==32)
		{	//柱状图
			dothing1(7,'salechart','bar');
		}else if (picn==33)
		{	//饼图
			dothing1(7,'salechart','pie');
		}
	})
	
	//主菜单的情况
	$('header .navbar-brand').on('click',function(){
		
		//$("#panel-homepage").load("html/homepage.html");
		if (!$('.rightpage .panel-body').hasClass('fullheight2'))
		{
			$('.rightpage .panel-body').addClass('fullheight2');
		} 
		app1.pageinit();
		$('#panel-homepage').show();
		let righttite='首页';
		
		$('.rightpage').find('.panel-heading').text(righttite);
		//$('header .navbar-brand').click();
	});
	//nav导航条的触发
	$('#navbar li').on('click',function(){
		console.log($(this).children('a').text());
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).children('a').text()=="首页")
		{
			$('header .navbar-brand').click();
			let righttite='首页';
		
			$('.rightpage').find('.panel-heading').text(righttite);
		}else if ($(this).children('a').text()=="关于")
		{
			$('#modalcon').modal('show');
		}else if ($(this).children('a').text()=="设置")
		{
			$('#modalcon').modal('show');
		}
		
	})
	//页面初始化 
	
	$('header .navbar-brand').click();
	
	//针对定时器进行操作
	var displaytime =setInterval(app.distime,1000);//设置时间
	$('#starttime').click(function(){
		displaytime =setInterval(app.distime,1000);
	}); //开始时间
	$('#closetime').click(function(){
		clearInterval(displaytime);		
	}); //结束时间
	
	
})