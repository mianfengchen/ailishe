

// 地质信息
(function(){

    $(".common h3 a").click(function(){
        $(this).parents(".common").hide().css({"background-color":" #fffeed"}).slideDown();
    });
    $(".addressInformation h3 a").click(function(){
        $(".form1,.form2").hide();
        $(".userAddress").css({"padding-left":"30px"});
        $(".addressInformation .userAddress .hidden").removeClass("hidden");
        $(this).text("");
    });
    $(".common button").click(function(){
        $(this).parents(".common").hide().css({"background-color":" #fff"}).slideDown().children("h3").find("a").text("【修改】");
    });

    $(".addressInformation .queren button").click(function(){
        $(".form1,.form2").hide();
        $(".userAddress").css({"padding-left":""});
        $(".hiddenPl").addClass("hidden");
    });

    $(".addressInformation .compile").click(function(){
        $(".form1").slideDown();
        $(".form2").hide();
        $(".default").prop({"checked":"checked"});
    });
    
    $(".userAddress .new").click(function(){
        $(".form1").hide();
        if($(this).is(":checked")){
            $(".form2").slideDown();
        }
    });

    $(".userAddress .default").click(function(){
        $(".form2").hide();
        if($(this).is(":checked")){
            $(".form2").slideUp();
        }
    });

    $(".invoice h3 a").click(function(){
        $(".payment").hide();
        $(".invoiceChoose").show();
        $(this).text("");
    });
    $(".InvoiceBtnBox button").click(function(){
        $(".invoiceChoose").hide();
        $(".payment").show();
    });
    $(".Personal").click(function(){
        $(".CompanyTitle").hide();
    });
    $(".Company").click(function(){
        $(".CompanyTitle").show();
    });
    $(".BillText .CompanyTitle").focus(function(){
        $(this).attr({"placeholder":""});
    });
    $(".BillText .CompanyTitle").blur(function(){
        $(this).attr({"placeholder":"请填写公司名称"});
    });
   

    // $(".payWays h3 a").click(function(){
    //     $(this).parents(".common").hide().css({"background-color":" #fff"}).slideDown();
    //     $(this).text("【取消】").addClass("xiugai");
    // });
    // $(".payWays h3 .xiugai").click(function(){
    //     $(this).parents(".common").hide().css({"background-color":" #fffeed"}).slideDown();
    //     $(this).text("【修改】").removeClass("xiugai");
    // });
    

    var i=0;
    $(".account .ment").click(function(){
        i++;
        $(this).next(".mentDisplay").slideToggle();
        if(i%2==0){
            $(this).children("i").css({"transform":"rotate("+0+"deg)"});
        }else{
            $(this).children("i").css({"transform":"rotate("+180+"deg)"});
        }
    });

show(".nav .all>a",".nav .all .sort","");

})();   