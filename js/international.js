
 function smallTab(banner,imgul,hid,prev,next){
    // 克隆第一幅图片
    $(imgul).children().eq(0).clone().appendTo($(imgul));    
    var W = $(imgul).children().eq(0).width();
    var H = $(imgul).children().eq(0).height();
    var len = $(imgul).children().size(); 
    $(imgul).width(len*W);
    // $(banner).height(H);
    $(banner).width(W);

    //封闭轮播动画
    var i=0,t;
    function move(){
        if (i == len){
            $(imgul).css({left:0});
            i = 1;
        }
        if (i<0) {
            $(imgul).css({left:-(len-1)*W});
            i=len-2;
        };
        $(imgul).stop().animate({left:-i*W},600);
    }

    t=setInterval(function(){ 
      i++; 
      move();
      
    },2000);

    // 鼠标经过时定时停止//隐藏翻页按钮
    $(hid).hide();
    $(banner).mouseenter(function(){
        clearInterval(t);
        $(hid).fadeIn();
    }).mouseleave(function(){
        t=setInterval(function(){ 
          i++; 
          move();  
       },2000);
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
}       
        
smallTab(".goods_list",".allgoods",".goods_list>span",".goods_list .left",".goods_list .right");
smallTab(".category_slide",".slide_list",".category_slide>span",".category_slide>.left",".category_slide>.right")

// 视差滚动
function feiru(){
    var hotH = $(".hotTopic").offset().top;
    var wH = $(window).height();
    var hscroll=hotH-wH+250;
    var flag=true;
    $(window).scroll(function(){
        var scrollY = document.body.scrollTop || document.documentElement.scrollTop ;
        if (scrollY>=hscroll){
            if (flag){
                $(".firstUl").stop().animate({left:0},500);
                $(".secondUl").stop().animate({left:0},500);
                flag=false;
            };
        }else{
            $(".firstUl").stop().animate({left:"-580px"},100);
            $(".secondUl").stop().animate({left:"580px"},100)
            flag = true;
        }
    });
}
feiru();

function changeGoods(obj){
    var page=1;
    postData(page);

    $(".special .change").click(function(){
        if (page == 1 ){
            page = page+1;
        }else{
            page = page;
        }
        postData(page);
    });

    function postData(page){
        $.ajax({
            type:"POST",
            url:"goods.php",
            data:"page="+page,
            dataType:"json",
            success:function(data){
                var i = 0;   
                $(obj+" ul").find("li").each(function(){
                    $(this).find("img").attr("src","images/"+data[i].Img);
                    // $(this).find(".listName a").text(data[i].cName);
                    // $(this).find(".listPrice strong").text("￥" + data[i].nowPrice);
                    // $(this).find(".listPrice del").text("￥" + data[i].prevPrice);
                    i++;
                })
            }
        });
    }
}
changeGoods(".specialCont")


/**
 * 闪光
 */
function bilingbiling(obj,biling){
        $(biling).css({left:-1200});
    $(obj).mouseenter(function(){
        $(biling).css({left:-1200});

        $(biling).animate({left:1250},"slow");
    });
    
}
bilingbiling(".sale",".sale .light");
show(".nav .all>a",".nav .all .sort","");

// tab(".specialRight .cont>li",".specialRight .tit li","red","mouseenter");