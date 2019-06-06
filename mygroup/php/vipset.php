<?php
//第一个签名
$AppId="mldj_test";
$Token="32492a85b33ef9e0";
$Url="http://test.ezrpro.com:8085";
$Timestamp= date('YmdHis');
$shas="AppId=".$AppId."&Timestamp=".$Timestamp."&Token=".$Token;
$Sign= strtoupper(sha1($shas));

//第二个请求的内容
$ns=array(
    "OldCode"=> '15801898836',
    "Code"=> '15801898836',
    "MobileNo"=>'15801898836',
    "HaveTrans"=>0
);

$ns=json_encode($ns);

//打包进行请求
$Url="http://open.ezrpro.com/api/cvip/vipbonusget";
$data="AppId=$AppId&Timestamp=$Timestamp&Sign=$Sign&Args=$ns&AppSystem=POS";

echo $data;


?>