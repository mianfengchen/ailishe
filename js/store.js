

$(document).ready(function(){
    // store-banner中的菜单栏
    function menu(farther,divObj,liObj){
        $(divObj).eq(0).siblings().hide();
        $(liObj).mouseenter(function(){
            $(divObj).eq($(this).index()).show().siblings().hide();
        });
        $(farther).hover(function(){
            $(divObj).parent().show();
        },function(){
            $(divObj).parent().hide();
        });
    }
    menu(".banner .sort",".list li",".tit li");    

    // 左右切换
    leftRight(".collection .collect .display",".collection .collect .a1",".collection .collect .a2","ul");

    // 倒计时
    function time(x){
        setInterval(function(){
            var now = new Date();
            var time1 = now.getTime();
            var time2 = Date.parse(x);

            var vs = parseInt((time2 - time1) / 1000);
            var s = vs % 60;

            var vm = (vs - s) / 60;
            var m = vm % 60;

            var vh = (vm - m) / 60;
            var h = vh % 24;

            var d = (vh - h) / 24;

            $(".timeLimitted .span04 .day").text(d);
            $(".timeLimitted .span04 .hour").text(h);
            $(".timeLimitted .span04 .minute").text(m);
            $(".timeLimitted .span04 .second").text(s);
        },1000);
    }
    time("2017/01/01 00:00:00");

    show(".nav .all>a",".nav .all .sort","");

    // 电梯
    lift(".floor .lou",".lift .F","display",{display:"block"},{display:"none"});
});