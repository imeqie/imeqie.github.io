$(document).ready(function(){
	//首页轮转
	let i=1;
	var displaytime =setInterval(function(){
		let asnt;
		if (i>0)
		{
			asnt='#anis'+i;
		}else 
		{
			asnt='#anis8';
		}
		app1.classchange(asnt,'remove');
		i=i+1;
		let asn='#anis'+i;
		app1.classchange(asn,'add');
		if (i==8)
		{
			i=0;
		}
	},614)
	

//显示或者隐藏密码
	$('.checkbox').on("click","input[type=checkbox]",function(){
		$('#form_pass').attr('type','password');
	})
	$('.checkbox').on("click","input[type=checkbox]:checked",function(){
		$('#form_pass').attr('type','text');
	})

	//登录信息校验
	$('.subbtn').click(function(){
		var form_name=$("#form_name").val();
		var form_pass=$("#form_pass").val();

		if (form_name==null||form_name==undefined||form_name==""){
		
			
			$('#modalcon').modal('show');
			$('.modal-body').html(app1.showtie('请输入用户名！'));
			$('#modelsubmit').hide();	
			
		}else if (form_pass==null||form_pass==undefined||form_pass==""){
			$('#modalcon').modal('show');
			$('.modal-body').html(app1.showtie('请输入密码！'));
			$('#modelsubmit').hide();
		}else{
		 
			let contents={'form_name':$('#form_name').val(),'form_pass':$('#form_pass').val()};
			let rest=app.toajax('./php/index.php','cookie',contents);
			if (rest.returnCode==0);
			{
				let ur='index.html';
				console.log(encodeURI(ur));
				window.location.href=encodeURI(ur);
				//添加cookie
				$.cookie('form_name', $('#form_name').val(), { expires: 1, path: '/' });
				$.cookie('form_pass', $('#form_pass').val(), { expires: 1, path: '/' });
				//删除cookie
				//$.cookie('form_name', '', { expires: -1, path: '/' });
				//$.cookie('form_pass', '', { expires: -1, path: '/' });
			}
		}
	})	
	
})