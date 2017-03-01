<?php
    header("Content-type: text/html; charset=utf-8");  
    require_once 'inc/dbConn2.php';
    date_default_timezone_set("PRC");

    $page = $_REQUEST['page']-1;
    $page = $page * 5;
    $sql = "select * from clothes order by id asc limit " . $page . ",5";
    $result = mysql_query($sql,$con);
    $clothes="";

    while($rs = mysql_fetch_array($result)){
        $clothes[] = $rs;
    }
    echo json_encode($clothes);  //转为json字符串
?>