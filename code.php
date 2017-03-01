<?php
session_start(); //开启session会话
//验证码的绘制

//1. 定义各种变量信息，获取验证码的值
$leng =4; //验证码的长度
$code = getCode($leng,1);
//将获取的随机验证码放到session中
$_SESSION['mycode']=$code;



 $width=$leng*20; //定义验证码图片的宽度
$height=30; //定义验证码图片的高度


//2.创建画布，准备画笔（颜色）
$im = imagecreatetruecolor($width,$height); //创建一个画布
$bg = imagecolorallocate($im,200,200,200);//准备颜色
$c[0] = imagecolorallocate($im,255,0,0);
$c[1] = imagecolorallocate($im,0,0,255);
$c[2] = imagecolorallocate($im,38,149,57);
$c[3] = imagecolorallocate($im,10,210,47);
$c[4] = imagecolorallocate($im,187,70,170);
 
//3.开始绘画
imagefill($im,0,0,$bg);

//绘制验证码
for($i=0;$i<$leng;$i++){
	$color = $c[rand(0,4)];//随机取一个颜色
	imagettftext($im,18,rand(-30,30),0+($i*20),25,$color,"./MSYH.TTF",$code[$i]);
}
//随机绘制干扰点
for($i=0;$i<200;$i++){
	$cc = imagecolorallocate($im,rand(0,255),rand(0,255),rand(0,255));
	imagesetpixel($im,rand(0,$width),rand(0,$height),$cc);
}
//随机绘制干扰线
for($i=0;$i<5;$i++){
	$cc = imagecolorallocate($im,rand(0,255),rand(0,255),rand(0,255));
	imageline($im,rand(0,$width),rand(0,$height),rand(0,$width),rand(0,$height),$cc);
}

//4.输出图像
header("Content-type:image/png");//通过响应头定义内容类型
imagepng($im);

//5.释放资源
imagedestroy($im);





/**
  *随机一个验证码值
  *@param int $length 随机验证码值的长度，默认为4位。
  *@param int $type 随机验证码值得内容：1:纯数字；2:数字和小写字母 3:数字和大小写字母
  *@return string 返回需要的验证码值。
  */
function getCode($length=4,$type=1){
	$str="0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//根据类型获取验证码的随机长度
	switch($type){
		case 1: $h=9; break;	//纯数字
		case 2: $h=33; break;   //数字加小写字母
		default: $h=strlen($str)-1; //全部的
	}
	$code="";
	//随机验证码
	for($i=0;$i<$length;$i++){
		$code.=$str[rand(0,$h)]; //随机
	}
	return $code;
}

