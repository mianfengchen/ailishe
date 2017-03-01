
<?php
session_start();
$code=$_POST['code']?$_POST['code']:NULL;
echo 'session'.$_SESSION['mycode'].'<br/>';
echo 'post'.$code;
if($code!=NULL&&$_SESSION['mycode']==$code)
{
    $username=isset($_POST['username'])?$_POST['username']:NULL;
    $password=isset($_POST['password'])?$_POST['password']:NULL;
    if($username!=NULL&&$password!=NULL)
    {
        //第一步：连接数据库
        $link=@mysql_connect('127.0.0.1:3306','root','root');
        //第二步：判断是否连接成功
        if(!$link)
        {
            echo '数据库连接失败';
            exit;
        }
        //第三步：选择数据库
        mysql_select_db('php') or die("数据库连接失败，错误号:".mysql_errno().",错误信息:".mysql_error());
        //第四步：设置字符编码
        mysql_set_charset('utf8');
        //第五步：设置sql语句并执行
        $sql="select * from user where username='".$username."' and password='".md5($password)."'";
        $res=mysql_query($sql);
        if($res&&mysql_affected_rows()>0)
        {
           echo "登录成功";
           setcookie('username',$username);
           setcookie('islogin',1);
           header('Location:index.html');
        }
        else
        {
            echo '登录失败';
        }
        mysql_close();
    }
}
else{
    header("Location:login.html");
}