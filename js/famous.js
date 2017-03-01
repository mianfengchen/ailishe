
function banner(){
    var cur = 0;
    var W = $(".bannerCont img").width();
    var t;
    var l = $(".bannerCont .images li").size();
    function init(){
        $(".bannerCont .pageBtn li").eq(0).addClass("cur");
    }
    init();

    function slide(){
        if(cur==l){
            cur = 0;
        }
        $(".bannerCont .images").animate({
            left:-cur * W
        },600);
        page();
    }

    //按钮高亮
    function page(){
        $(".bannerCont .pageBtn li").eq(cur).addClass("cur").siblings().removeClass("cur");
    }

    //自动轮播
    t = setInterval(function(){
        cur++;
        slide();
    },2000);
    //鼠标放上去轮播停止
    
    $(".bannerCont").hover(function(){
        clearInterval(t);
    },function(){
        t = setInterval(function(){
            cur++;
            slide();
        },2000);
    })

    //分页按钮控制页面
    $(".bannerCont .pageBtn").on("mouseenter","li",function(){
        cur = $(this).index();
        slide();
    });
}
banner();

/**
 * 
 * @李红雨
 * @date    2016-11-10 15:58:00
 * small banner轮播
 */
function smallBanner(){
    var cur = 0;
    var H = $(".smallImages img").height();
    var t;
    var l = $(".smallBanner .smallImages li").size();
    function init(){
        $(".smallBanner .smallPageBtn li").eq(0).addClass("cur");
        $(".smallInfo p").eq(0).show().siblings().hide();
    }
    init();
    function slide(){
        if(cur==l){
            cur = 0;
        }
        $(".smallBanner .smallImages").animate({
            top:-cur * H
        },600);
        page();
        $(".smallInfo p").eq(cur).show().siblings().hide();
    }

    //按钮高亮
    function page(){
        $(".smallBanner .smallPageBtn li").eq(cur).addClass("cur").siblings().removeClass("cur");
    }

    //自动轮播
    t = setInterval(function(){
        cur++;
        slide();
    },1500);

    //鼠标放上去轮播停止
    $(".smallBanner").mouseenter(function(){
        clearInterval(t);
    })
    $(".smallBanner").mouseleave(function(){
            t = setInterval(function(){
            cur++;
            slide();
        },1500);
    })
    //分页按钮控制页面
    $(".smallBanner .smallPageBtn").on("mouseenter","li",function(){
        cur = $(this).index();
        slide();
    });
}
smallBanner();


/**
 * 
 * @张龙珍(you@example.org)
 * @date    2016-11-10 15:58:00
 * 品牌展开
 */

/**
 * 展开
 */
function zhankai(){
    var flag=false;
    $(".logos h2 a,.logos .arr").click(function(event){
        if(!flag){
            flag = true;
            $(".logos h2 a").text("收回所有");
            $(".logos .hide").slideDown("slow");
            $(".logos .arr").css({visibility:"hidden"});
            $(".logos>ul").css({borderLeft:"1px solid #ddddda",borderRight:"1px solid #ddddda"});
            $(".logos .hide").css({border:"1px solid #ddddda",borderTop:"none"});
            $(".logos .hide ul").css({borderTop:"1px solid #acabab"});
            event.stopImmediatePropagation();
        }else{
            $(".logos h2 a").text("展开所有");
            $(".logos .hide").slideUp("slow",function(){
                $(".logos .arr").css({visibility:"visible"});
            });
            $(".logos>ul").css({borderLeft:"1px solid transparent",borderRight:"1px solid transparent"});
            flag = false;
        }
    });

    $(".logos .hide,.logos .ul").click(function(){
        flag = false;
        $(".logos h2 a").text("展开所有");
        $(".logos .hide").slideUp("slow",function(){
                $(".logos .arr").css({visibility:"visible"});
            });
        $(".logos>ul").css({borderLeft:"1px solid transparent",borderRight:"1px solid transparent"});
    });
}
zhankai();

show(".nav .all>a",".nav .all .sort","");