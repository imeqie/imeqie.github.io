<?php
ini_set("error_reporting","E_ALL & ~E_NOTICE");
//header("Content-type: text/html; charset=utf-8");
include_once "curlPost.php"; //请求类
include_once "sendmes.php"; //发送类
//数据库联接
function getpos(){

	$servername="DRIVER={SQL Server};SERVER=10.1.254.12;DATABASE=master";
	$username = "sa";
	$password = "Flyon@2015";
	return $conn = odbc_connect($servername,$username,$password);
}
// //获取人员
function getuser($conn){
	$sql="select  distinct [StaffCode],[StaffName] FROM [MRMARKET].[dbo].[orgrsm] 
	UNION Select distinct  [StaffCodes],[StaffNames] FROM [MRMARKET].[dbo].[orgrsm]
	UNION Select distinct  [admincode],[adminname] FROM [MRMARKET].[dbo].[orgrsm]";
	$sql="Select distinct  [admincode],[adminname] FROM [MRMARKET].[dbo].[orgrsm]" ;
	
	$sql=mb_convert_encoding($sql,'gb2312','UTF-8');
	$result =  odbc_exec( $conn, $sql );
	$rescout=odbc_num_rows($result); ///记录数据行数
	$rescols=odbc_num_fields($result); //记录数据的列数
	while(odbc_fetch_row($result)){
		// for ($ri=1;$ri<=$rescols;$ri++)
		// {
			// $resname=iconv('gbk','utf-8',odbc_field_name($result,$ri));
			// $resl=iconv('gbk','utf-8',odbc_result($result,$ri));
			// $rus[$resname]=$resl;
			
		// }	
		$key =iconv('gbk','utf-8',odbc_result($result,1));
		$value=iconv('gbk','utf-8',odbc_result($result,2));
		$rus[$key]=$value;
		发送内容
		$cons= get_tsp($conn,$key,$value);
		//发送给谁
		//echo strlen($cons);
		// if (strlen($cons)>1900)
		// {
			 // $ctlen =round(strlen($cons)/1900,0);
			
			// for ($ls=1;$ls<=$ctlen;$ls++)
			// {
				 // $newcons=substr($cons,($ls-1)*1900,1900);
				// echo sendtsp($newcons,$key);
			// }
		// }else{
			// echo sendtsp($cons,$key);
		// }
			
		
		$cons1= get_tspex($conn,$key,$value);
		// if (strlen($cons1)>1900)
		// {
			 // $ctlen1 =round(strlen($cons1)/1900,0);
			
			// for ($ls1=1;$ls1<=$ctlen1;$ls1++)
			// {
				 // $newcons1=substr($cons1,($ls1-1)*1900,1900);
				// echo sendtsp($newcons1,$key);
			// }
		// }else{
			// echo sendtsp($cons1,$key);
		// }
		echo sendtsp($cons1,$key);
	}
	return $rus;
	
}


function get_tsp($conn,$user,$userinfo){
	//参数：数据库联接，用户id ，用户名称/正常情况
	$sql="select '['+rtrim(OrgCode)+']'+OrgName+'：' 门店信息
,'零售:'+convert(varchar(10),total)+';实收：'+convert(varchar(10),pay)+';'  销售金额
,'笔数:'+convert(varchar(10),ct)+';' 笔数
 from (  
select tv.OrgCode ,ss.OrgName 
,sum(case when SDate =convert(varchar(10),GETDATE()-1,121) then total else 0 end ) total
,sum(case when SDate =convert(varchar(10),GETDATE()-1,121) then TotalPay else 0 end ) pay 
,sum(case when SDate =convert(varchar(10),GETDATE()-1,121) then 1 else 0 end )  ct
from sysdb.dbo.TotalView tv left join [MRMARKET].[dbo].[orgrsm] ss on tv.OrgCode =ss.OrgCode 
where  CONVERT(varchar(10),tv.uptdate,121) =convert(varchar(10),GETDATE()-1,121)
and (ss.[StaffCode] = '".$user."' or ss.[StaffCodes]='".$user."' or ss.[admincode]='".$user."')
group by  tv.OrgCode,ss.OrgName) a
order by OrgCode";
	$sql=mb_convert_encoding($sql,'gb2312','UTF-8');

	$result =  odbc_exec( $conn, $sql );
	$context="你好！".$userinfo."：\n昨日及时录入销售提醒\n";

	$ss=odbc_num_fields($result);
	while(odbc_fetch_row($result))
	{  

	   for ($i=1;$i<=$ss;$i++)
		{  
			$context =$context.iconv("gb2312","UTF-8//IGNORE",odbc_result($result, $i))."\n";
		  //$context =$context.iconv("gb2312","UTF-8//IGNORE",odbc_field_name($result,$i)).":".iconv("gb2312","UTF-8//IGNORE",odbc_result($result, $i))."\n";   
		}
		//$context=$context."\n";

	}
	return $context;
}

function get_tspex($conn,$user,$userinfo){
	//参数：数据库联接，用户id ，用户名称/异常情况
	$sql="select '['+rtrim(OrgCode)+']'+OrgName 门店信息
,'异常日期:'+SDate+';笔数:'+convert(varchar(10),bfct)+';'  延迟概况
,'零售:'+convert(varchar(10),bftotal)+';实收:'+convert(varchar(10),bfpay) 金额
 from (  
select tv.OrgCode ,ss.OrgName,tv.SDate,sum(Total) bftotal,sum(TotalPay) bfpay,COUNT(1) bfct
from sysdb.dbo.TotalView tv left join [MRMARKET].[dbo].[orgrsm] ss on tv.OrgCode =ss.OrgCode 
where  CONVERT(varchar(10),tv.uptdate,121) =convert(varchar(10),GETDATE()-1,121)
and (ss.[StaffCode] = '".$user."' or ss.[StaffCodes]='".$user."' or ss.[admincode]='".$user."')
and SDate <> convert(varchar(10),GETDATE()-1,121) 
group by  tv.OrgCode,ss.OrgName,tv.SDate) a
order by OrgCode";
	$sql=mb_convert_encoding($sql,'gb2312','UTF-8');

	$result =  odbc_exec( $conn, $sql );
	$context="你好！".$userinfo."：\n昨日未及时录入销售提醒\n";

	$ss=odbc_num_fields($result);
	while(odbc_fetch_row($result))
	{  
	   for ($i=1;$i<=$ss;$i++)
		{  
		  $context =$context.iconv("gb2312","UTF-8//IGNORE",odbc_result($result, $i))."\n";   
		}
		$context=$context."\n";

	}
	return $context;
}

//发送模板
function sendtsp($context,$Touser){
	if (strlen($context)>36) {
		$corpid="wwd8d912e52676cd83";
		$corpsecret="PlNPiAe2LFOq2ohCK2DzFRH7OnwKfG6NCGvpR5PHaJ8";
		$Agentid="1000022";
		$msg=$context;
		if (!empty($Touser))
		{
			$que=sendmes($corpid,$corpsecret,$Agentid,$msg,$Touser);
			return $context."totalcts:".strlen($context) ;
		}
		
	}
}


$user =getuser(getpos());
//var_dump($user);
//获取发送数据
odbc_close($conn);

//先获取数据
//$context=get_tsp(getpos());

//发送数据
//echo sendtsp($context,$Touser);
//odbc_close($conn);
?>