

 $(function(){
        $(".banNav li").mouseenter(function(){
        var i=$(this).index();
            if(i==8){
                $(".banNav i").css("display","block");
                $(".banNav i").stop();
                $(".banNav i").animate({left:i*131},30);
            }else{
                $(".banNav i").css("display","block");
                $(".banNav i").stop(true,true);
                $(".banNav i").animate({left:i*140},40);
                $(".banNav i").animate({left:i*120},40);
                $(".banNav i").animate({left:i*131},40); 
        }
        $(".banNav li").mouseleave(function(){
        $(".banNav i").css("display","none");  
        })
    });


function leftRight(display,left,right){
        $(display).children("ul").eq(0).clone().appendTo($(display));

        var W = $(display).children("ul").eq(0).width();
        $(display).parent().width(W);
        var len = $(display).children("ul").size();
        var i = 0;
        $(display).width(len*W);

        $(left).click(function(){
            i--;
            if(i <= -1){
                $(display).css({left:-(len-1)*W});
                i = len-2;
            }
            $(display).stop().animate({left:-i*W},500);
        });
        $(right).click(function(){
            i++;
            if(i >= len){
                $(display).css({left:0});
                i = 1;
            }
            $(display).stop().animate({left:-i*W},500);
        });
    }


function rollTop(obj){
    var topDistance=$(obj).offset().top;var leftDistance=$(obj).offset().left;
    $(window).scroll(function(){
        if($(this).scrollTop()>=topDistance){
            $(obj).css({
                position:"fixed",
                left:leftDistance,
                top:0
            }).removeClass("por");
        if ($(window).scrollTop()>11228){$(obj).hide()}
            else { 
            $(obj).show();
            $(obj).css({
                position:"fixed",
                left:leftDistance,
                top:0
            }).removeClass("por");}    
        }else{    
            $(obj).css({
                position:"relative",
                left:"auto",
                top:0
            });   
        }
    });
}




var size=$(".lo").size();
    for(var i=0;i<size;i++){
        $(".sideNav li").eq(i).click(function(){
        var index=$(this).index();
        var T=$(".mainBox"+index).offset().top;
        // console.log(T);
              $('html body').animate({scrollTop:T});
              console.log(i)
            });

        }
$(".sideNav li").last().click(function(){
    $('html body').animate({scrollTop:0});
})
leftRight(".play",".toLeft",".toRight");
tab(".servePanels li",".serveTrigger li","","mouseenter");
tab(".fortellContent>li",".foretellSwitch li","bg","mouseenter");
rollTop(".asideBox");
rollTop(".sideNav");


//倒计时

// 倒计时

function time(place){
    // var start = $(place).attr("start");
    var end = $(place).attr("end");
    
    setInterval(function(){
        var now = new Date();
        var time1 = now.getTime();//返回当前时间与1970年1月1日之间间隔的毫秒数
        var time2 = Date.parse(end);//返回指定时间与1970年1月1日之间间隔的毫秒数

        var vs = parseInt((time2 - time1) / 1000);
        var s = vs % 60;

        var vm = (vs - s) / 60;
        var m = vm % 60;

        var vh = (vm - m) / 60;
        var h = vh % 24;

        var d = (vh - h) / 24;

        $(place).children().eq(0).text(d);
        $(place).children().eq(1).text(h);
    },1000);
}

show(".nav .all>a",".nav .all .sort","");

$(".timer,.timerCount").each(function(){
    time(this);})

time(".timerCount");


})
