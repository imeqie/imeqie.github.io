<?php
ini_set("error_reporting","E_ALL & ~E_NOTICE");
header("Access-Control-Allow-Origin:*"); //*号表示所有域名都可以访问
header("Access-Control-Allow-Method:POST,GET");

class mymain{
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
    function mssqlcon(){
        $servername="DRIVER={SQL Server};SERVER=rm-uf67423s1k6d7c7a0.sqlserver.rds.aliyuncs.com,3433;DATABASE=MRMARKET";
        $username = "*********";
        $password = "*********";
        $conn = odbc_connect($servername,$username,$password); 
        return $conn;
    }
    function mysqlcon(){
        $serverurl="localhost";
        $username="root";
        $password="123456";
        $dbname="RUNOOB";
        $conn =mysqli_connect($serverurl,$username,$password,$dbname); 
        return $conn;
    }
    function selectsql($conn,$sqlselect,$fromsql){
        if ($fromsql=="mssql"){
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
        else if ($fromsql=="mysql")
        {
            if (mysqli_connect_errno($conn)) 
            { 
                echo "连接 MySQL 失败: " . mysqli_connect_error(); 
            }else{
                $res =mysqli_query($conn,$sqlselect);
            } 
            
        }
        mysqli_close($conn);
    }	
}

if (isset($_POST['code']))
{
    $code=$_POST['code'];
    $content==$_POST['content'];
    switch()
}
?>