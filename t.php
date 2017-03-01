<?php
    header("Content-type: text/html; charset=utf-8");  
    require_once 'inc/dbConn1.php';
    date_default_timezone_set("PRC");

    $page = $_REQUEST["page"]-1;
    $page = $page * 23;
    $sql = "select * from info  order by id desc limit " . $page . ",23";
    // $sql = "select * from book order by id desc limit " . $page . ",6";
    $result = mysql_query($sql,$con);
    $info="";
    // echo $page;
    while($rs = mysql_fetch_assoc($result)){
        $info[] = $rs;
    }
    echo json_encode($info);  //转为json字符串
?>