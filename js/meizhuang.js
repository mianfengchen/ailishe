

// 轮播动画

function Carousel (banner,allpic,btn,style,hid,prev,next) {
    // 克隆第一幅图片
        $(allpic).children().eq(0).clone().appendTo($(allpic));
        var W = $(allpic).children().eq(0).width();
        var len = $(allpic).children().size();
        $(allpic).width(len*W);
        $(btn).eq(0).addClass(style).siblings().removeClass(style);
     
    //封闭轮播动画
        var i=0,t;
        function move()
        {
            if (i == len)
            {
                $(allpic).css({left:0});
                i = 1;
            }
           if (i<0) 
           {
                $(allpic).css({left:-(len-1)*W});
                i=len-2;
            }
            setTimeout(function(){
                if (i == len-1)
                {
                    $(btn).eq(0).addClass(style).siblings().removeClass(style);
                }else{
                    $(btn).eq(i).addClass(style).siblings().removeClass(style);
                }
            },300);
            
            $(allpic).stop().animate({left:-i*W},300);
        }
        t=setInterval(function(){ 
          i++; 
          move();
          
        },5000);
    // 鼠标经过时定时停止//隐藏翻页按钮
        $(hid).hide();
        $(banner).mouseenter(function(){
            clearInterval(t);
            $(hid).fadeIn();
        }).mouseleave(function(){
            t=setInterval(function(){ 
              i++; 
              move();  
           },5000);
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

Carousel(".bannerBox",".banner_ul",".bannerStage>.bannerBtn>li","current",".bannerStage div",".leftBtn",".rightBtn");

// tab切换
function tab(divObj,liObj,classN,does){
    $(divObj).eq(0).siblings().hide();
    $(liObj).eq(0).addClass(classN).siblings().removeClass(classN);
    $(liObj).on(does,function(){
        $(this).addClass(classN).siblings().removeClass(classN);
        $(divObj).eq($(this).index()).show().siblings().hide();
    });
}
tab(".swit_box>div",".tobe_list_hd li","","click");



// 新品牌开售预告
$.each($(".tobe_list_in .merchBox"),function(){
    var cur = $(this);
    $(this).css({'position' : "absolute",'top':0,'left':0});
    $(this).parent().css({'position' : "relative"});

    var h = cur.parent().height();
    var xflag = 1;
    var sflag = 0;
    var flag = 1;

    $(this).parent().siblings(".tobe_list_ft").find(".J_comingNext_btn").on("click",function(){
        flag && (xflag && (flag = 0, cur.animate({"top" : parseFloat(cur.css("top")) - h +'px'},500,function(){
            flag = 1;
            parseInt(cur.css("top")) <= -cur.height() + h + 10 ? xflag = 0 : sflag = 1;
        })));          
    })

    $(this).parent().siblings(".tobe_list_ft").find(".J_comingPrev_btn").on("click",function(){
        flag && (sflag && (flag = 0, cur.animate({"top" : parseFloat(cur.css("top")) + h +'px'},500,function(){
            flag = 1;
            parseInt(cur.css("top")) >= -10 ? sflag = 0 : xflag = 1;
        })));
    })
})
 

var imgBox = [
    {
        src : "images/1_1.jpg",
        pname : "水星家纺特卖旗舰店"
    },
    {
        src : "images/1_2.jpg",
        pname : "小熊电器厨电专场"
    },
    {
        src : "images/1_3.jpg",
        pname : "混合品牌清仓特卖专场"
    },
    {
        src : "images/1_4.jpg",
        pname : "RACEKISH芮诗凯诗家居专场直发货"
    },
    {
        src : "images/1_5.jpg",
        pname : "美的Midea吸尘器专场"
    },
    {
        src : "images/1_6.jpg",
        pname : "越茂家具专场直发货"
    },
    {
        src : "images/1_7.jpg",
        pname : "新白领时尚厨卫 万月WANYUE家居"
    },
    {
        src : "images/1_8.jpg",
        pname : "日光生活清洁收纳专场"
    },
    {
        src : "images/1_9.jpg",
        pname : "鹰YING卫浴专场直发货"
    },
    {
        src : "images/1_10.jpg",
        pname : "优家尤嘉U+U+家纺专场"
    },


]
// $(".remind").hide();
$.each($(".tobe_list_in .merch"),function(){
    var c = $(".modCn .remind");
    $("li",$(this)).on("mouseenter",function(){
        var f = $(this).index();
        c.show();
        c.find("img").attr({'src':imgBox[f].src});
        $('.modCn .remind span').text(imgBox[f].pname)

        f < 2 ? c.css({'top':'90px'}) : f < 4 ? c.css({'top' : '147px'}) : c.css({'top':'156px'})

    });
    $("li",$(this)).on("mouseleave",function(){
        c.hide();
    })
})

// 图片灰度改变   
 $(".remind_item").hover(function(){
    $(this).find("img").removeClass("gray");
  },function(){
    $(this).find("img").addClass("gray");
  });

 show(".nav .all>a",".nav .all .sort","");