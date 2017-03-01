$(document).ready(function(){
/**
 * 轮播图
 * 
 */ 
(function(){
//初始化
    (function(){
        $(".banner .banner-cont>.banner-pic li").eq(0).fadeIn().siblings().fadeOut();
        $(".banner .banner-cont>.banner-tab>span").css({"transform":"translateX(0px)"});
    })();

    //轮播开始
    var i = 0,t ;
    var flag = 1 ;
    function move(){
        if(i >= 3){
            i = 0;
        }
        if(i<0){
            i = 2
        }
        $(".banner .banner-cont>.banner-pic li").eq(i).fadeIn().siblings().fadeOut();
    }

    t = setInterval(function(){
        i ++ ;
        move();
        bannerTab();
    },3000);

    //鼠标放上停止
    $(".banner .banner-cont").hover(function(){
        clearInterval(t);
    },function(){
        t = setInterval(function(){
            i ++ ;
            move();
            bannerTab();
        },3000)
    })

    //前进后退
    $(".banner .banner-cont>.banner-pic>span").eq(0).mousedown(function(e){
        if(flag == 1){
            i -- ;
            move();
            bannerTab();
            flag = 0 ;
            setTimeout(function(){
                flag = 1 ;
            },400)
        }
        stopDefault(e)
    });
    $(".banner .banner-cont>.banner-pic>span").eq(1).mousedown(function(e){
        if(flag == 1){
            i ++ ;
            move();
            bannerTab();
            flag = 0 ;
            setTimeout(function(){
                flag = 1 ;
            },400)
        }
        stopDefault(e)
    });

    // banner 切换
    function bannerTab(){
        $(".banner .banner-cont>.banner-tab>span").css({"transform":"translateX("+i*229+"px)"});
    }
    function tabMove(){
        $(".banner .banner-cont>.banner-tab>ul>li").mouseenter(function(){
            i = $(this).index();
            bannerTab();
            move();
        })
    }
    tabMove();
})();

/**
 * 距离上新时间倒计时
 * 
 */ 
function countDown(){
    var now = new Date();
    var t, tm;
    var day = now.getDate() ;
    var month = now.getMonth() + 1 ;
    var year = now.getFullYear() ;
    var todyDate = year+"-"+month+"-"+day+" 10:00:00";  //倒计时时间
  
    // next
    function next(){
        tm = setInterval(function(){
            var now = new Date();
            var timeH = now.getHours()
            if(timeH == 0){
                $(".space .space-title1").css({"display":"block"});
                $(".space .space-title2").css({"display":"none"});
                clearInterval(tm);
                t = setInterval(function(){
                    timeRemain(todyDate,".space-title1");
                },1000)
            }
        },500000);
    }

// 倒计时
    function timeRemain(limitTime,className){
        var now = new Date();
        if(isNaN(limitTime)){
            limitTime = limitTime.replace(/-/,"/");
        }
        var end = Date.parse(limitTime);
        var interval = parseInt((end - now.getTime())/1000);
        var s=interval%60;
        var totalM=(interval-s)/60;
        var m=totalM%60;
        var totalH=(totalM-m)/60;
        if(s<=0&&m<=0&&totalH<=0){
            next();
            clearInterval(t);
            $(".space .space-title2").css({"display":"block"});
            $(".space .space-title1").css({"display":"none"});
        }
        $(className).find(".time-h").text(totalH);
        $(className).find(".time-m").text(m);
        $(className).find(".time-s").text(s);
    }

    //判断时间
    function nowtime(){
        var now = new Date();
        var timeH = now.getHours();
        // console.log(timeH);
        if(timeH<10){
            $(".space .space-title1").css({"display":"block"});
            t = setInterval(function(){
                timeRemain(todyDate,".space-title1");
            },1000);
        }else{
            $(".space .space-title2").css({"display":"block"})
            next();
        }
    }
    nowtime()
}
countDown();

show(".nav .all>a",".nav .all .sort","");
});