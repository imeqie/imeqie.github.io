<?php
ini_set("display_errors", "on"); //开提示
ini_set("error_reporting","E_ALL & ~E_NOTICE");
header("Access-Control-Allow-Origin:*"); //*号表示所有域名都可以访问
header("Access-Control-Allow-Method:POST,GET");
header("Content-type: text/html; charset=utf-8");

if($_GET['code']==1)
{
    echo "ssss";
}


?>