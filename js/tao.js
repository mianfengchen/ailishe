
$(function(){
    // banner 部分
    
    (function(){
        function init(){
            $('.banner .slider .pageBtn li').eq(0).addClass('cur');
            $('.banner .slider .pageBtn li').eq(0).parents('.banner').addClass('focus0');
            // $('.banner .slider .images li').eq(1).css({opacity:0})
        }
        init();
        var cur = 0;
        function bannerSlider(){
            if(cur == 2){
                cur = 0;
            }
            $('.banner .slider .images li').eq(cur).animate({opacity:1}).siblings().animate({opacity:0})
            $('.banner .slider .pageBtn li').eq(cur).parents('.banner').addClass('focus'+cur).removeClass('focus'+(cur+1));
            $('.banner .slider .pageBtn li').eq(cur).addClass('cur').siblings().removeClass('cur');
        }

        var t = setInterval(function(){
            cur ++;
            bannerSlider();
        },2000)
        // 分页按钮控制
        $('.banner .slider .pageBtn li').on('mouseenter',function(){
            cur = $(this).index();
            bannerSlider();
        });
        // 鼠标放上去动画停止
        $('.banner .slider').mouseenter(function(){
            clearInterval(t);
        })
        $('.banner .slider').mouseleave(function(){
             t = setInterval(function(){
                cur ++;
                bannerSlider();
            },2000)
        })
    })();
    // 判断方向进入
    (function(){
        $(".help").on("mouseenter mouseleave",'a',function(e){
            var w=$(this).outerWidth(true);
            var h=$(this).outerHeight(true);
            // console.log(w)
            // console.log(h)
            var i = $(this).index();
            var x=(e.pageX-$(this).offset().left-(w/2))*(w>h?(h/w):1);
            var y=(e.pageY-$(this).offset().top-(h/2))*(h>w?(w/h):1);

            // var x=(e.pageX-$(this).offset().left-(w/2));
            // var y=(e.pageY-$(this).offset().top-(h/2));


            var direction=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
            // console.log(Math.atan2(y,x));
            // console.log(Math.atan2(y,x)*(180/Math.PI));
            // console.log(Math.atan2(y,x)*(180/Math.PI)+180);
            // console.log((Math.atan2(y,x)*(180/Math.PI)+180)/90+3);
            // console.log(Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3));
            // console.log(Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4);
            if(e.type=="mouseenter"){
                // console.log(direction)
                if(direction==0){
                    $(".help a p").eq(i).css({top:-112,left:0}).stop(true,true).animate({top:0});
                }else if(direction==1){
                    $(".help a p").eq(i).css({top:0,left:296}).stop(true,true).animate({left:0});
                }else if(direction==2){
                    $(".help a p").eq(i).css({top:112,left:0}).stop(true,true).animate({top:0});
                }else{
                    $(".help a p").eq(i).stop(true,true).animate({left:0});
                }
            }
            if(e.type=="mouseleave"){
                // console.log(direction)
                if(direction==0){
                    $(".help a p").eq(i).stop(true,true).animate({top:-112})
                }else if(direction==1){
                    $(".help a p").eq(i).stop(true,true).animate({left:296})
                }else if(direction==2){
                    $(".help a p").eq(i).stop(true,true).animate({top:112})
                }else{
                    $(".help a p").eq(i).stop(true,true).animate({left:-296})
                }
            }
        })
    })();

    // //推荐品牌部分点击收起
    
    (function slideUp(){
        var i = 1;
        $('.commended .slideUp').children().first().click(function(){
            i++;
            $(this).next().slideToggle();
            if(i%2==0){
                $(this).css({backgroundPosition:'88px -23px'});
            }else{
                $(this).css({backgroundPosition:'88px 7px'});
            }
        })
        $('.commended .slideUp .hide').find('span').click(function(){
            $(this).parent().slideUp();
        })
    })();

    //推荐品牌 热销单品 倒计时
    
    (function timer(){
        setInterval(function(){
            var now = new Date();
            // console.log(now);
            var time1 = now.getTime();//返回当前时间与1970年1月1日之间间隔的毫秒数
            var time2 = Date.parse("2017/01/01 12:00:00");//返回指定时间与1970年1月1日之间间隔的毫秒数
            var interval = parseInt((time2-time1)/1000);
            var s = interval%60;
            var totalM = (interval-s)/60;
            var m = totalM%60;   //    395   360 35
            var totalH = (totalM-m)/60;    //58   2 10
            var h = totalH%24;
            var d = (totalH-h)/24;   // 天
            $('.commended .hot .time').html(d+"天"+h+"时"+m+"分"+s+"秒");
        },1000)
    })();

    // //时尚搭配轮播
    (function(){
        $('.match .slider .images').children('li').eq(0).clone().appendTo($('.match .slider .images'));
        $('.match .slider .btn li').eq(0).addClass('cur').siblings().removeClass('cur');
        var len = $('.match .slider .images').find('li').size();
        var i = 0;
        var W = $('.match .slider .images').find('li').eq(0).width();
        //前一张的封装函数
        function forward(){
           if(i <= -1){
                $('.match .slider .images').css({left:-(len-1)*W});
                $('.match .slider .btn li').eq(len-1).addClass('cur').siblings().removeClass('cur');
                i = len-2;
            }
            $('.match .slider .images').stop().animate({left:-i*W},500);
            $('.match .slider .btn li').eq(i).addClass('cur').siblings().removeClass('cur'); 
        }
        //下一张的封装函数
        function next(){
            if(i == len-1){
                $('.match .slider .btn li').eq(0).addClass('cur').siblings().removeClass('cur');
            }
            if(i >= len){
                $('.match .slider .images').css({left:0});
                i = 1;
            }
            $('.match .slider .images').animate({left:-i*W},500);
            $('.match .slider .btn li').eq(i).addClass('cur').siblings().removeClass('cur');
        }
        //自动轮播
        var t = setInterval(function(){
            i ++;
            next();
        },2000);
        //鼠标进入轮播停止
        $('.match .slider').mouseenter(function(){
            clearInterval(t);
        })
        //鼠标离开轮播继续
        $('.match .slider').mouseleave(function(){
            t = setInterval(function(){
                i ++;
                next();
            },2000);
        });
        //点击上一张
        $('.match .slider .forward').click(function(){
            i--;
            forward();
        });
        //点击下一张
        $('.match .slider .next').click(function(){
            i++;
            next();
        });
        //鼠标经过分页按钮去到相应的页面
        $('.match .slider .btn').on('mouseenter','li',function(){
            i = $(this).index();
            $('.match .slider .images').stop().animate({left:-i*W},500);
            $('.match .slider .btn li').eq(i).addClass('cur').siblings().removeClass('cur'); 
        });
    })();

    // //新品区轮播
    function leftRight(display,left,right){
        $(display).children("ul").eq(0).clone().appendTo($(display));
        var W = $(display).parent().width();
        var H = $(display).parent().height();
        var len = $(display).children("ul").size();
        var i = 0;
        $(display).width(len*W);
        $(display).height(H);
        $(left).siblings('.pageBtn').children().eq(0).addClass('cur').siblings().removeClass('cur');
        //按钮高亮函数
        function light(){
            $(left).siblings('.pageBtn').children().eq(i).addClass('cur').siblings().removeClass('cur');
        }
        //点击前一张
        $(left).click(function(){
            i--;
            if(i <= -1){
                $(display).css({left:-(len-1)*W});
                i = len-2;
            }
            $(display).stop().animate({left:-i*W},500);
            light();
        });
        //点击下一张
        $(right).click(function(){
            i++;
            if(i == len-1){
               $(left).siblings('.pageBtn').children().eq(0).addClass('cur').siblings().removeClass('cur'); 
            }
            if(i >= len){
                $(display).css({left:0});
                i = 1;
            }
            $(display).stop().animate({left:-i*W},500);
            light();
        });
        //鼠标放在按钮上出资按多赢的页面
        $(left).siblings('.pageBtn').on('mouseenter','a',function(index){
            i = $(this).index();
            $(display).stop().animate({left:-i*W},500);
            light();
        })
    }
    leftRight($('.proList .newCont'),$('.proList .forward'),$('.proList .next'));

    show(".nav .all>a",".nav .all .sort","");

});