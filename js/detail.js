/**
 *放大镜
 */
 (function(){
 	$(".goods .content .small").hover(function(){
 		$(this).siblings(".big").fadeIn("fast");
        $(this).children("b").show();
 	},function(){
        $(this).siblings(".big").fadeOut("fast");
 		$(this).children("b").hide();
 	});

 	$(".goods .content .small").mousemove(function(event){
 		var multiple=$(".big img").width()/$(".big").width();
 		var multiple1=$(".big img").height()/$(".big").height();
 		var num=$(this).width()/multiple;
 		var smallLeft=event.pageX-$(this).offset().left-num/2;
 		var smallTop=event.pageY-$(this).offset().top-num/2;

 		smallTop=smallTop>0?smallTop:0;
 		smallLeft=smallLeft>0?smallLeft:0;

 		smallTop=smallTop<$(this).height()-num?smallTop:$(this).height()-num;
 		smallLeft=smallLeft<$(this).width()-num?smallLeft:$(this).width()-num;

 		$(this).children("b").css({
 			width:num,
 			height:num,
 			top:smallTop,
 			left:smallLeft
 		});

 		$(this).siblings(".big").children("img").css({
 			top:-smallTop*multiple1,
 			left:-smallLeft*multiple
 		});
 	});

    $(".goods .content .box li").eq(0).css({borderColor:"#999"})
 	$(".goods .content .box li").mouseenter(function(){
        $(this).parents(".box").prev().children(".big").children("img").attr("src",$(this).children("a").children("img").attr("src"));
 		$(this).parents(".box").prev().children(".small").children("img").attr("src",$(this).children("a").children("img").attr("src"));
        $(this).css({borderColor:"#999"}).siblings().css({borderColor:"#e1e1e1"});
 	});
 })();

/**
 * 左右切换
 */
 (function(){
    var W=$(".goods .content .box li").outerWidth(true);
    var len=$(".goods .content .box li").size();
    $(".goods .content .box ul").width(len*W);
    var cur=0;

    if($(".goods .content .box ul").position().left==0){
        $(".goods .content .prev").css({opacity:0.5,cursor:"default"});
    }

    $(".goods .content .prev,.goods .content .next").hover(function(){
        $(this).css({cursor:"pointer",opacity:1});
    },function(){
        $(this).css({opacity:0.7});
    });

    $(".goods .content .prev").hover(function(){
        if($(".goods .content .box ul").position().left==0){
            $(".goods .content .prev").css({opacity:0.5,cursor:"default"});
        }
    });
    $(".goods .content .next").hover(function(){
        if($(".goods .content .box ul").position().left==-(len-1)*W){
            $(".goods .content .next").css({opacity:0.5,cursor:"default"});
        }
    });

    $(".goods .content .prev").click(function(){
        cur--;
        $(".goods .content .next").css({opacity:0.7});
        if($(".goods .content .box ul").position().left==0){
            $(".goods .content .box ul").css({left:0});
            cur=0;
        }else{
            $(".goods .content .box ul").animate({
                left:-W*cur
            });
            if($(".goods .content .box ul").position().left==-W){
                setTimeout(function(){
                    $(".goods .content .prev").css({opacity:0.5});
                },500);
            }
        }
    });
    $(".goods .content .next").click(function(){
        cur++;
        $(".goods .content .prev").css({opacity:0.7});
        if(cur>len-1){
            $(".goods .content .box ul").css({left:-(len-1)*W});
            cur=len-1;
        }else{
            $(".goods .content .box ul").animate({
                left:-W*cur
            });
            if($(".goods .content .box ul").position().left==-(len-2)*W){
                setTimeout(function(){
                    $(".goods .content .next").css({opacity:0.5});
                },500);
            }
        }
    });
 })();

 /**
  * 显示
  */
show(".goods .pic .number .c1",".goods .pic .number .code","show");
show(".goods .pic .number .c2",".goods .pic .number .share","show");
show(".goodsIntro .goodsDescr .title .phone",".goodsIntro .goodsDescr .title .code","changeColor");
show(".goodsIntro .goodsDescr .title button",".goodsIntro .goodsDescr .title .shopCar","");

/**
 * 计数
 */
((function(){
    $(".goods .content .shop .a1").click(function(){
        var numVal=$(".goods .content .shop .shopNum input").val();
        numVal++;
        $(".goods .content .shop .shopNum input").val(numVal);
    });
    $(".goods .content .shop .a2").click(function(){
        var numVal=$(".goods .content .shop .shopNum input").val();
        numVal--;
        if(numVal<=1){
            numVal=1;
        }
        $(".goods .content .shop .shopNum input").val(numVal);
    });
})());


tab(".goodsIntro .goodsCont>div",".goodsIntro .title ul li","on","click");

rollTop(".goodsIntro .goodsDescr .title");

/**
 *tab切换中的回滚
 */
(function(){
    $(".goodsIntro .title ul li").click(function(){
        $("html,body").animate({
            scrollTop:$(".goodsIntro").offset().top-1
        });
    });
})();

/**
 * 选择
 */
function condition(obj,objChild){
    $(obj).click(function(){
        if($(this).children(objChild).css("cursor")!="not-allowed" ){
            $(this).addClass("redBorder").siblings().removeClass("redBorder");
            $(this).children("b").addClass("poa").parent().siblings().children("b").removeClass("poa");
        }
    });
}
condition(".goods .color .chooseColor div","img");
condition(".goods .size li","a");

function changePic(num,picUrl,cur){
    if($(this).index()==num){
        $(".content .clothesImg .small img").attr("src","images/"+picUrl);
        $(".content .clothesImg .big img").attr("src","images/"+picUrl);
        $(".goods .size li a").css({backgroundColor: "",color:"",cursor: ""});
        if(arguments.length==3){
            $(".goods .size .s"+cur+" a").css({backgroundColor: "#e8e8e8",color:"#bbb",cursor: "not-allowed"});
        }else if(arguments.length>3){
            for(var i=0;i<arguments.length-2;i++){
                $(".goods .size .s"+arguments[i+2]+" a").css({backgroundColor: "#e8e8e8",color:"#bbb",cursor: "not-allowed"});
            }
        }
    }
}

$(".goods .choose .chooseColor div").click(function(){
    $(this).siblings().children("b").removeClass("poa");
    $(".goods .choose .size li").removeClass("redBorder");
    $(".goods .choose .size li").children("b").removeClass("poa");

    changePic.call($(this),0,"white.jpg",4);
    changePic.call($(this),1,"pic0.jpg",0,3,4);
});

$(".shop input,.shop button").click(function(){
    if(!($(".goods .choose .size li").children(".poa").length>0 && $(".goods .choose .color div").children(".poa").length>0)){
        $(".choose .please").addClass("red");
        $(".goods .choose .please p").show();
    }
});

$(".goods .please p span").click(function(){
    $(".goods .choose .please p").hide();
    $(".choose .please").removeClass("red");
});

/**
 * 换一批
 */
function changeGoods(obj,num){
    var page=num;
    postData(page);

    $(obj+" .other").click(function(){
        console.log(page);
        if (page == num ){
            page = num+1;
        }else if(page == num+1){
            page = num+2;
        }else{
            page = num;
        }
        postData(page);
    });

    function postData(page){
        $.ajax({
            type:"POST",
            url:"clothes.php",
            data:"page="+page,
            dataType:"json",
            success:function(data){
                var i = 0;
                $(obj+" ul").find("li").each(function(){
                    $(this).find("img").attr("src","uploads/"+data[i].cImg);
                    $(this).find(".listName a").text(data[i].cName);
                    $(this).find(".listPrice strong").text("￥" + data[i].nowPrice);
                    $(this).find(".listPrice del").text("￥" + data[i].prevPrice);
                    i++;
                })
            }
        });
    }
}
changeGoods(".change .intro",1);
changeGoods(".change .buy",2);
changeGoods(".change .watch",3);

/**
 * history
 */
$(".history .drop").click(function(){
    $(this).parent().siblings("ul").empty();
});

/**
 *回到顶部
 */
var leftDistance=$(".goods").width()+$(".goods").offset().left;
$(".goTop").css({left:leftDistance});
$(window).scroll(function(){
    var num=$(this).scrollTop()||$("html,body").scrollTop();
    if(num==0){
        $(".goTop").fadeOut("slow");
    }else{
        $(".goTop").fadeIn("slow")
    }
});

$(".goTop").click(function(){
    $("html,body").animate({
        scrollTop:0
    },300)
});

show(".nav .all>a",".nav .all .sort","");