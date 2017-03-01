
$(function(){
    // 懒加载
    $("img.lazy").lazyload({
     });
    

    // 轮播开始
    (function(){
        $(".banner .tu li").eq(0).fadeIn(200,function(){
            $(".banner .btn li").eq(0).addClass("btnB").siblings().removeClass("btnB");
        }).siblings().fadeOut();
        var size = $(".banner .tu li").size();
        var i=0; //索引值
        var t; 
        function move(){
            if(i<0){
                i=size-1;
            }
            if(i>=size){
                i=0;
            }
            $(".banner .tu li").eq(i).fadeIn(200,function(){
                $(".banner .btn li").eq(i).addClass("btnB").siblings().removeClass("btnB");
            }).siblings().fadeOut();
        }

        t=setInterval(function(){
            i++;
            move();
        },4000);

        $(".banner").hover(function(){
            clearInterval(t);
            $(".banner .lr").fadeIn("fast");
        },function(){
            $(".banner .lr").fadeOut();
            t = setInterval(function(){
                i++;
                move();
            },4000);
        });

        // 按钮
        $(".banner .prev").click(function(){
            i --;
            move();
        });
        $(".banner .next").click(function(){
            i ++;
            move();
        });

        $(".banner .btn li").click(function(){
            i = $(this).index();
            move();
        });
    })();

    // tabCont 开始
    tab(".content>ul",".title li","red","mouseenter");

    $(".ul1>li").children("ul").eq(0).clone().appendTo($(".ul1>li"));

    $(".title li").mouseenter(function(){
        if($(".ul1").css("display")=="block"){
            $(".ul1 .left,.ul1 .right").off();
            $(".ul1>li").css({left:0});
            leftRight(".ul1>li",".ul1 .left",".ul1 .right");
        }
    });

    border(".ul0 li",".bk1,.bk2");

    border(".specialRight .cont .intro li",".bk1,.bk2");

    /**
     * 闪光
     */
    $(".specialLeft img").mouseenter(function(){
        $(".light").css({left:-190});
        $(".light").animate({left:470},"slow");
    });

    tab(".specialRight .cont>li",".specialRight .tit li","red","mouseenter");

    /**
     * shop
     */
    $("li>ul>li").hover(function(){
        $(this).find(".price").parents("li").children("a").addClass("por").append("<div class=\"shopping\"><i class=\"icon-shopping-cart\"></i></div>");
        $(".shopping").animate({
            bottom:0
        },"fast");
        $(".shopping").click(function(event){
            event.preventDefault();
        });
    },function(){
        $(this).find(".price").parents("li").children("a").children().remove(".shopping");
    });


    //时尚名品

    // 品牌切换封装 //只实现前后切换功能。无按钮，无分页，无自动切换
    function smallTab(imgul,prev,next){
        // 克隆第一幅图片
          $(imgul).children().eq(0).clone().appendTo($(imgul));
        var W = $(imgul).children().eq(0).width();
        var len = $(imgul).children().size(); 
            $(imgul).width(len*W);

        //封闭轮播动画
        var i=0,t;
        function move(){
            if (i == len){
                $(imgul).css({left:0});
                i = 1;
            }
            if (i<=0) {
                $(imgul).css({left:-(len-1)*W});
                i=len-2;
            };
            $(imgul).stop().animate({left:-i*W},600);
        }
               
           //前进后退按钮
        $(prev).click(function(){
            i--;
            move();
        })
        $(next).click(function(){
            i++;
            move();
        })
    }       
            
    smallTab(".show0 ul",".menBrand .prev0",".menBrand .next0");
    smallTab(".show1 ul",".menBrand .prev1",".menBrand .next1");
    smallTab(".show2 ul",".menBrand .prev2",".menBrand .next2");
    smallTab(".show3 ul",".menBrand .prev3",".menBrand .next3");
    smallTab(".show4 ul",".menBrand .prev4",".menBrand .next4");
    smallTab(".show5 ul",".menBrand .prev5",".menBrand .next5");
    smallTab(".show6 ul",".menBrand .prev6",".menBrand .next6");
    smallTab(".show7 ul",".menBrand .prev7",".menBrand .next7");
    smallTab(".show8 ul",".menBrand .prev8",".menBrand .next8");



    // 首页  小轮播封装// 实现分页按钮，前进后退，按钮点击，自动轮播功能！
    function Carousel (banner,allpic,btn,style,hid,prev,next){
        // 克隆第一幅图片
        $(allpic).children().eq(0).clone().appendTo($(allpic));
        var W = $(allpic).children().eq(0).width();
        var len = $(allpic).children().size();
        // console.log(len);
        $(allpic).width(len*W);
        $(btn).eq(0).addClass(style).siblings().removeClass(style);
         
        //封闭轮播动画
        var i=0,t;
        function move(){
            if (i == len){
                $(allpic).css({left:0});
                i = 1;
            }
           if (i<0){
                $(allpic).css({left:-(len-1)*W});
                i=len-2;
            }
            setTimeout(function(){
                if (i == len-1){
                    $(btn).eq(0).addClass(style).siblings().removeClass(style);
                }else{
                    $(btn).eq(i).addClass(style).siblings().removeClass(style);
                }
            },300);
            
            $(allpic).stop().animate({left:-i*W},400);
        }
        t=setInterval(function(){ 
          i++; 
          move();
        },3000);

        // 鼠标经过时定时停止//隐藏翻页按钮
        $(hid).hide();
        $(banner).mouseenter(function(){
            clearInterval(t);
            $(hid).fadeIn();
        }).mouseleave(function(){
            t=setInterval(function(){
                i++; 
                move(); 
            },3000);
            $(hid).fadeOut();
        });

        //前进后退按钮
        $(prev).click(function(){
            i--;
            move();
        })
        $(next).click(function(){
            i++;
            move();
        })

        // 点击分页按钮
        $(btn).click(function(){
            i = $(this).index();
            move();
        });
    }
    Carousel(".mid0",".mid-img0",".mid0>.btn>li","current",".mid0 div",".left0",".right0");
    Carousel(".mid3",".mid-img3",".mid3>.btn>li","current",".mid3 div",".left3",".right3");
    Carousel(".mid4",".mid-img4",".mid4>.btn>li","current",".mid4 div",".left4",".right4");
    Carousel(".mid6",".mid-img6",".mid6>.btn>li","current",".mid6 div",".left6",".right6");
    Carousel(".mid7",".mid-img7",".mid7>.btn>li","current",".mid7 div",".left7",".right7");
    border(".border",".bk1,.bk2");

    //替换webp
    function webp(){
            function checkWebp(callback) { 
                var img = new Image(); 
                img.onload = function () { 
                    var result = (img.width > 0) && (img.height > 0); 
                    callback(result); 
                }; 
                img.onerror = function () {
                 callback(false); 
             }; 
            
         }
        // 然后用下面的代码来根据是否支持WebP替换相应的SRC。
        function showImage(useWebp){ 
            var imgs = Array.from(document.querySelectorAll('img'));
            imgs.forEach(function(i){ 
                var src = i.attributes['data-src'].value; 
                if (useWebp){ src = src.replace(/.jpg$/, '.webp'); 
                }
                i.src = src; 
            }); 
        }
        checkWebp(showImage);
    }
    webp();
   
    //直播
    (function(){
        //初始化
        $('.live .liveLeft .liveB a').eq(0).css({display:'block'}).siblings('a').css({display:'none'});
        $('.live .liveLeft .liveS .liveSCont ul').children().eq(0).css({marginLeft:'0'});
        $('.live .liveLeft .liveS .liveSCont ul').find('span').eq(0).css({display:'block'});

        //鼠标经过那张图，大图显示那张图
        $('.live .liveLeft .liveS .liveSCont ul').on('mouseenter','li',function(){
            var cur = $(this).index();
            $('.live .liveLeft .liveB a').eq(cur).css({display:'block'}).siblings('a').css({display:'none'});
            $(this).find('span').css({display:'block'}).parent().parent().siblings().find('span').css({display:'none'});
        });

        //点击轮播
        $('.live .liveS .next').click(function(){
            $(this).siblings('.liveSCont').animate({ left:-492});
            $(this).css({display:'none'}).siblings('.pre').css({display:'block'});
        });

        $('.live .liveS .pre').click(function(){
            $(this).css({display:'none'}).siblings('.next').css({display:'block'});
            $(this).siblings('.liveSCont').animate({ left:-0});
        });
        
        //小广告上下轮播
        setInterval(function(){
            $(".right ul").animate({top:-36},500,function(){
                $(this).find("li").first().appendTo(this);
                $(this).css({top:-4});
            });
        },2000);

        //ajax请求数据
        function tAjax(){
            var page = 1;
            function change(page){
                console.log(page);
                $.ajax({
                    type:"post",
                    url:"t.php",
                    data:"page="+page,
                    dataType:"json",
                    success:function(data){
                        $.each(data,function(index,value){
                            console.log(index);
                            switch  (index) {
                                case 0:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate .4s',
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },200);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                };break;
                                case 1:
                                case 6:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate .6s'
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },300);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                };break;
                                case 2:
                                case 7:
                                case 12:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate .8s'
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },400);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                };break;
                                case 3:
                                case 8:
                                case 13:
                                case 18:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate 1s'
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },500);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                };break;
                                case 4:
                                case 9:
                                case 14:
                                case 19:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate 1.2s'
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },600);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                };break;
                                case 5:
                                case 10:
                                case 15:
                                case 20:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate 1.4s'
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },700);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                };break;
                                case 11:
                                case 16:
                                case 21:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate 1.6s'
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },800);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                };break;
                                case 17:
                                case 22:{
                                    $('.live .liveBrands ul li').eq(index).css({
                                        animation: 'rotate 1.8s'
                                    })
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).children('.image').children('img').attr('src','uploads/'+value.pic);
                                        $('.live .liveBrands ul li').eq(index).children('.brandMask').children('.coupon').children('span').html(value.coupon);
                                    },900);
                                    setTimeout(function(){
                                        $('.live .liveBrands ul li').eq(index).css({
                                            animation: '',
                                        })   
                                    },1800);
                                }

                            }
                        });
                    }
                });
            }
            var angle = 0;
            $('.live .liveBrands .change').mouseenter(function(){
                angle += 180;
                $(this).find('i').css({ transform:'rotate('+angle+'deg)'});
            }) 
            $('.live .liveBrands .change').mouseleave(function(){
                angle -= 180;
                $(this).find('i').css({ transform:'rotate('+angle+'deg)'});
            }) 

            $('.live .liveBrands .change').click(function(){
                angle += 180;
                $(this).find('i').css({ transform:'rotate('+angle+'deg)'})
                if(page < 3){
                    page++;
                }else{
                    page=1;
                }
                change(page);
            });
        }
        tAjax();
    })();
});


lift(".floor",".elevator .f","display",{opacity:'1', transform:'translateX(0)'},{opacity:'0', transform:'translateX(-100px)'});