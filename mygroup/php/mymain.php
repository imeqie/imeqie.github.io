<?php
ini_set("display_errors", "on"); //开提示
ini_set("error_reporting","E_ALL & ~E_NOTICE");
header("Access-Control-Allow-Origin:*"); //*号表示所有域名都可以访问
header("Access-Control-Allow-Method:POST,GET");
header("Content-type: text/html; charset=utf-8");

class mymain{
	//关于企业微信的众多接口
	//以下接口基本为标准接口,提供JS调用，本身不做判定
	function curlPost($url,$data=""){   
	//请求
		$ch = curl_init();
		$opt = array(
				CURLOPT_URL     => $url,            
				CURLOPT_HEADER  => 0,
				CURLOPT_POST    => 1,
				CURLOPT_POSTFIELDS      => $data,
				CURLOPT_RETURNTRANSFER  => 1,
				CURLOPT_TIMEOUT         => 20
		);
		$ssl = substr($url,0,8) == "https://" ? TRUE : FALSE;
		if ($ssl){
			$opt[CURLOPT_SSL_VERIFYHOST] = 1;
			$opt[CURLOPT_SSL_VERIFYPEER] = FALSE;
			   }
		curl_setopt_array($ch,$opt);
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}
	function http_post($url ='' , $fileurl ){
		//文件请求传输专用
		$curl = curl_init();
		if(class_exists('\CURLFile')){
			curl_setopt ( $curl, CURLOPT_SAFE_UPLOAD, true); 
			$data = array('media' => new \CURLFile($fileurl));
		}else{
			if (defined ( 'CURLOPT_SAFE_UPLOAD' )) {  
				curl_setopt ( $curl, CURLOPT_SAFE_UPLOAD, false );  
			}  
			$data = array('media' => '@' . realpath($fileurl));
		}
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); 
		$output = curl_exec($curl);
		curl_close($curl);
		return $output;
	}
	function get_corpid_secret($getser){
		//获取企业微信的
		if ($getser=="main")
		{
			$corpid="111";
			$corpsecret="111";
			$AGENTID="111";
			$res =array("corpid"=>$corpid,"corpsecret"=>$corpsecret,"AGENTID"=>$AGENTID);
		}
		return $res;
	}
	function uploadfile($ACCESS_TOKEN,$TYPE,$real_path){
		//上传素材 
		$urls="https://qyapi.weixin.qq.com/cgi-bin/media/upload?access_token=$ACCESS_TOKEN&type=$TYPE";
		$res = $this-> http_post($urls,$real_path);
		// if (json_decode($res)->errcode==0)
			// {
				// return json_decode($res)->media_id;
			// }	
		return $res;	
	}	
	function get_access_token($corpid,$corpsecret){
		//获取access_token
		$Url="https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$corpid&corpsecret=$corpsecret";
		$res = $this->curlPost($Url);
		return $res;
	}
	function get_userid($ACCESS_TOKEN,$userid){
		//获取用户
		$Url="https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=$ACCESS_TOKEN&userid=$userid";
		$res =  $this->curlPost($Url);
		return $res;
	}
	function get_dep($ACCESS_TOKEN,$depid){
		//获取部门
		$Url="https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=$ACCESS_TOKEN&id=$depid";
		$res =  $this->curlPost($Url);
		return $res;
	}
	function get_code($url,$corpid,$AGENTID){
		$tourl="https://open.weixin.qq.com/connect/oauth2/authorize?appid=$corpid";
		$tourl=$tourl."&redirect_uri=";
		
		$tourl=$tourl.urlencode($url);
		$tourl=$tourl."&response_type=code&scope=snsapi_base&agentid=$AGENTID&state=123#wechat_redirect";
		Header("Location: $tourl ");
	}
	function getpos(){
		$servername="DRIVER={SQL Server};SERVER=127.0.0.1;DATABASE=master";
		$username = "sa";
		$password = "password";
		$conn = odbc_connect($servername,$username,$password); 
		return $conn;
	}
	function sqlselect($conn,$sqlselect){
		$sqlselect1=mb_convert_encoding($sqlselect,'gb2312','UTF-8');
		$res =  odbc_exec( $conn, $sqlselect1 );
		$rescout=odbc_num_rows($res); ///记录数据行数
		$rescols=odbc_num_fields($res); //记录数据的列数
		if ($rescout>0)
		{	
			while(odbc_fetch_row($res))
			{
				for ($ri=1;$ri<=$rescols;$ri++)
				{
					$resname=iconv('gbk','utf-8',odbc_field_name($res,$ri));
					$resl=iconv('gbk','utf-8',odbc_result($res,$ri));
					$rus[$resname]=$resl;
				}	

				$ru[]=$rus;
				
			}
			//$ru=gb23122utf8($ru);
			$returnCode=0;
			$returnMsg="成功！";
			$returns=array('returnCode'=>$returnCode,'returnMsg'=>$returnMsg,'returnContent'=>$ru,'rows'=>$rescout);
			return $returns;
	 
		}else if ($rescout==0)
		{
			$returnCode=1;
			$returnMsg="没有记录！";
			$returns=array('returnCode'=>$returnCode,'returnMsg'=>$returnMsg,'returnContent'=>'');
			return $returns;
	 
		}else
		{
			$returnCode=1001;
			$returnMsg="网络异常！";
			$returns=array('returnCode'=>$returnCode,'returnMsg'=>$returnMsg,'returnContent'=>'');
			return $returns;
	 
		}
	}
	function get_foradmin($form_name,$form_pass){
		//提供http://pos1.mariedalgar.com/poswarning/workwx/YESIC/adminlogin.html 登陆用密码表简化版本
		$passwordforadmin['admin']="123456789";
		$passwordforadmin['wangyq']="121700";
		$passwordforadmin['guest']="123321";
		$passwordforadmin['yesic']="isees";
		if ($passwordforadmin[$form_name]==$form_pass)
		{
			$returnCode=0;
			$returnMsg="成功！";
			$returns=array('returnCode'=>$returnCode,'returnMsg'=>$returnMsg,'returnContent'=>'正在登陆……');
			return $returns;
		}else
		{
			$returnCode=1;
			$returnMsg="失败！";
			$returns=array('returnCode'=>$returnCode,'returnMsg'=>$passwordforadmin,'returnContent'=>'用户名或者密码不对！请确认后输入。');
			return $returns;
		}
		

	}

}
$workwx=new mymain;
if($_POST['code']=='token'){
	$gets=$workwx->get_corpid_secret('yesic');
	$corpid=$gets['corpid'];
	$corpsecret=$gets['corpsecret'];
	echo $res=$workwx->get_access_token($corpid,$corpsecret);
}else if ($_POST['code']=="userid")
{	 
	echo $res=$workwx->get_userid($_POST['ac'],$_POST['content']);
}else if ($_POST['code']=="dep")
{
	echo $res=$workwx->get_dep($_POST['ac'],$_POST['content']); 
}else if ($_POST['code']=="select")
{
	//$conn=$workwx->getpos();
	// if ($_POST['content']=='0')
	//  {
	//     $sqlselect="select * from xxxx";
	// }
	// $res=$workwx->sqlselect($conn,$sqlselect);
	if ($_POST['content']==0)
	{
		$res=array("returnCode"=>0,"returnMsg"=>"成功!",
			"returnContent"=>array("sdate"=>"2019-02-26",
			"putct"=>"44",
			"zsale"=>"21301.00",
			"salenum"=>"418",
			"cossalenum"=>"16",
			"bigsale"=>"12",
			"orgname"=>"hdfas",
			"yesicsale"=>"2005.00"
		),"rows"=>1);
	}else if ($_POST['content']==10){
		$res=array("returnCode"=>0,"returnMsg"=>"成功!",
			"returnContent"=>array("sdate"=>"2019-02-25",
			"putct"=>"44",
			"zsale"=>"2101.00",
			"salenum"=>"418",
			"cossalenum"=>"16",
			"bigsale"=>"2",
			"orgname"=>"dasd",
			"yesicsale"=>"1005.00"
		),"rows"=>1);
	}else if ($_POST['content']==10){
		$res=array("returnCode"=>0,"returnMsg"=>"成功!",
			"returnContent"=>array("sdate"=>"2019-02-25",
			"putct"=>"44",
			"zsale"=>"2101.00",
			"salenum"=>"418",
			"cossalenum"=>"16",
			"bigsale"=>"2",
			"orgname"=>"dasd",
			"yesicsale"=>"1005.00"
		),"rows"=>1);
	}else if ($_POST['content']==7)
	{
		$res=array("returnCode"=>0,"returnMsg"=>"成功!",
			"returnContent"=>array("0"=>array("sdate"=>"2019-02-20","yesicsale"=>"16809.77"),
			"1"=>array("sdate"=>"2019-02-20","yesicsale"=>"16809.77"),
			"2"=>array("sdate"=>"2019-02-20","yesicsale"=>"16809.77"),
			"3"=>array("sdate"=>"2019-02-20","yesicsale"=>"16809.77"),
			"4"=>array("sdate"=>"2019-02-20","yesicsale"=>"16809.77"),
			"5"=>array("sdate"=>"2019-02-20","yesicsale"=>"16809.77"),
			"6"=>array("sdate"=>"2019-02-20","yesicsale"=>"16809.77")
		),"rows"=>7);
	}
	echo json_encode($res,JSON_UNESCAPED_UNICODE) ;	

		
}
?>