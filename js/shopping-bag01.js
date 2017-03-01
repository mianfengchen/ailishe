

// 购物袋
function shopping(){
    var k,bk,num;
    var n,p,p0,a;
    var m;
    var zong;
    var z=[];
    var jz;
    var zj;
    var sheng;
    var yun;
    var moneyNum;
    var str;
    var money;
    var div;

    // 复选框
    
    var size = $(".checkOne").size();
    $(".check").children().attr({"checked":true});

    $(".check").click(function(){
        if(!($(this).children().is(":checked"))){
            $(this).children().prop({"checked":true});
            $(this).css({backgroundPositionY:"-73px"});
        }else{
            $(this).children().prop({"checked":false});
            $(this).css({backgroundPositionY:"-55px"});
        }
    });

    $(".cAll").click(function(){
        k = $(this).children().prop("checked");
        bk = $(this).css("backgroundPositionY");
        $(".check").children().prop({"checked":k});
        $(".check").css({"backgroundPositionY":bk});
        price();
    });

    $(".checkOne").click(function(){
        num=0;
        $(".checkOne input").each(function(){
            if($(this).is(":checked")){
                num++;
            }
        });
        if(num != size){
            $(".cAll").children().prop({"checked":false});
            $(".cAll").css({backgroundPositionY:"-55px"});
        }else{
            $(".cAll").children().prop({"checked":true});
            $(".cAll").css({backgroundPositionY:"-73px"});
        }
        price();
    });
    
        
    // 商品数量更改
        
    $(".countInf .num").keyup(function(){
        if ($(this).val() < 1) {
            $(this).val(1);
        }
        price();
    });

    $(".countInf .minus").click(function(){
        m=parseFloat($(this).siblings("input").val()) - 1;
        $(this).siblings("input").val(m);
        if(m<1){
            $(this).siblings("input").val(1);
        }
        price();
    });
    $(".countInf .add").click(function(){
        m=parseFloat($(this).siblings("input").val())+1;
        $(this).siblings("input").val(m);
        price();
    });
      

    // 计算价格
    function price(){
        $(".countInf .num").each(function(){
            if ($(this).val() == 1) {
                $(this).siblings(".minus").text("");
            }else{
                $(this).siblings(".minus").text("-");
            }
            n=$(this).val();
            p0=$(this).parent().siblings(".priceInf").text();
            p=parseFloat(p0.replace("￥",""));
            $(this).parent().siblings(".moneyInf").text("￥"+(n*p).toFixed(2));
        });
        
        zong = 0;
        str=$(".check").parent().siblings(".moneyInf").text();
        money = str.split("￥");
        $.each(money,function(i){
            z[i] = parseFloat(money[i]);
        });
        z.shift();
        $.each(z,function(i){
            if($(".cOne").eq(i).is(":checked")){
                zong += z[i];
            }
        });
        $(".cO .zj").text(zong.toFixed(2));
        if(zong>=199){
            $(".result .che").text("该订单已满199元，运费已免！");
            $(".yun").text("0.00");
            $(".cue").text("(已免运费)");
        }else{
            $(".result .che").text("该订单未满199元，运费12元！");
            $(".yun").text("12.00");
            $(".cue").text("(未免运费)");
        }

        zj = parseFloat($(".zj").text().replace("￥",""));
        sheng = parseFloat($(".sheng").text().replace("￥",""));
        yun = parseFloat($(".yun").text());
        jz = zj - sheng + yun;
        moneyNum = zj;
        $(".jiesuan").text(jz.toFixed(2));
        $(".moneyNum,.payment AccountsNum .num").text(moneyNum);
    }

    // 删除商品及弹出层中弹出框的移动
    
    // 单个商品删除
    $(".remove").children("a").click(function(){
        $(this).siblings(".select").show();
    });
    $(".remove .select .yes").click(function(){
        $(this).parents(".information").remove();
        price();
    });
    $(".remove .select .no").click(function(){
        $(this).parents(".select").hide();
    });

    // 删除选中商品
    $(".result .checkR").click(function(){
        $(".removeSelect,.rsBox").show();
    });

    $(".rsBox .foot .yes").click(function(){
        $(".cOne").each(function(i){
            if($(this).is(":checked")){
                $(this).parents(".information").remove();
            }
        });
        $(".removeSelect,.rsBox").hide();
        price();
    });

    $(".rsBox .foot .no,.rsBox .tit i").click(function(){
        $(".removeSelect,.rsBox").hide();
    });

    // 移动弹出框
    $(".rsBox .tit").mousedown(function(e){
        e.preventDefault();
        var left= e.clientX-$(".rsBox").position().left;
        var top= e.clientY-$(".rsBox").position().top;

        $(".rsBox").mousemove(function(e){
            e.preventDefault();
            var l=e.clientX-left;
            var t=e.clientY-top;
            
            $(".rsBox").css({"left":l}); 
            $(".rsBox").css({"top":t}); 
        });

        $(".rsBox").mouseup(function(e){
            $(".rsBox").unbind("mousemove");
        });
        $(".rsBox").mouseleave(function(e){
            $(".rsBox").unbind("mousemove");
        });
    });

    $(".small").hover(function(){
        div = $(this).children().attr("src");
        $(this).after("<div class='poa big'><img src='"+div+"' alt=''>");
    },function(){
        $(this).siblings(".big").remove();
    });
    
    
    $(".removeSelect").css({"height":$("body").innerHeight()});

    $.ajax({
        type:"GET",
        url:"shopping-car.php",
        data:"",
        datatype:"json",
        success:function(data){
            $(".num").eq(0).val(data.goods0);
            $(".num").eq(1).val(data.goods1);
            price();
        }

    });

// 推荐
    // 初始化
    $(".recommend .recommendTit li").eq(0).addClass("lihover");
    $(".recommend .goodsList .reG").eq(0).show().siblings().hide();

    var index;
    $(".recommend .recommendTit li").mouseenter(function(){
        $(".recommend .goodsList .reG").css({"left":0});
        i = 0;
        $(this).addClass("lihover").siblings().removeClass("lihover");
        index = $(this).index();
        $(".recommend .goodsList .reG").eq(index).show().siblings().hide();
    });

    var W =170;
    var len =11;
    var i = 0;
    $(".recommend .goodsList .left").click(function(){
        i--;
        if(i >= 0 && i < len){
            $(".recommend .goodsList .reG").stop().animate({left:-i*W},100);
        }else{
            i=0;
        }
        
    });
    $(".recommend .goodsList .right").click(function(){
        i++;
        if(i >= 0 && i < len){
           $(".recommend .goodsList .reG").stop().animate({left:-i*W},100);
        }else{
            i=len-1;
        }
    });
    

}
shopping();

show(".nav .all>a",".nav .all .sort","");