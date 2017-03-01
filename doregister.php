<?php
session_start();
$code=$_POST['code']?$_POST['code']:NULL;
echo 'session'.$_SESSION['mycode'].'<br/>';
echo 'post'.$code;
if($code!=NULL&&$_SESSION['mycode']==$code)
{
    $username=isset($_POST["username"])?$_POST["username"]:NULL;//isset()在php中用来检测变量是否设置，该函数返回的是布尔类型的值，即true/false。
    $password=isset($_POST["password"])?$_POST["password"]:NULL;
    if($username!=NULL&&$password!=NULL){
        // 第一步：连接数据库
        $link=mysql_connect("localhost","root","root");
        // 第二步：判断是否连接成功
        if(!$link){
            echo '数据库连接失败';
            exit;
        }
        // 第三步：选择数据库
        mysql_select_db("php") or die("数据库连接失败，错误号:".mysql_errno().",错误信息:".mysql_error());
        // 第四步：设置字符编码
        mysql_set_charset("utf8");
        // 第五步：设置sql语句并执行
        $sql="insert into user(username,password)value('".$username."','".md5($password)."')";
        $res=mysql_query($sql);//执行SQL查询(只判断sql语句是否正确)

        if($res){
            setcookie('username',$username);
            setcookie('isregister',1);
            header('Location:index.html');
        }else{
            header("Location:register.html");
        }

        mysql_close();
    }
}else{
    // header("Location:register.html");
}
