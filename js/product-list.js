

/*-----------预览图切换-----------*/
$(".contBox").on("mouseenter",".simg li",function(){
    $(this).parent().parent().siblings(".img").find("img").attr("src",$(this).find("img").attr("src"));
})


/*---------筛选部分多选----------*/
$(".selectBox").on("click",".mul-choice",function(){
    var a = $(this).parent().siblings(".sei-option").find("input");
    a.css({"visibility" : (a.css("visibility") == "hidden" ? "visible" : "hidden")});
})
$(".selectBox").on("mousedown",".mul-choice",function(event){
    event.preventDefault();
})

/*--------返回顶部-------------*/
$(".gotop").css({"left" : $(".main .wrapper").offset().left + 1210 + "px","opacity" : 0});
$(window).on("resize",function(){
    $(".gotop").css({"left" : $(".main .wrapper").offset().left + 1210 + "px"});
})
$(window).scroll(function(){
    $(window).scrollTop() < 100 ? $(".gotop").stop().animate({"opacity":0}) : $(".gotop").stop().animate({"opacity":1});
})

/*---------点击添加历史纪录------*/
$(".hvcont ul").html('<li><p>浏览历史为空</p></li>');
$(".main").on("click",".product",function()
{
    $(".hvcont ul").html(function(i,n)
    {
        return n.replace(/^<li><p>浏览历史为空<\/p><\/li>$/,"")
    })
    !($(this)[0].flag) && $("<li>").html('<a href="#"><img src="' + $(this).find(".img").find("img").attr("src") + '" alt=""></a><p><strong>' + $(this).find(".price").find("strong").text() + '</strong></p>').appendTo($(".hvcont ul"));
    $(this)[0].flag = 1; 
})
$(".delhv").on("click",function(){
    $(".hvcont ul").html('<li><p>浏览历史为空</p></li>');
    $.each($(".product"),function(){
        delete $(this)[0].flag;
    })
})

show(".nav .all>a",".nav .all .sort","");

/*--------------随屏滚动导航------------*/
$(window).scroll(function(){
    var a ;
    //a = a || $(".fixnav").offset().top; 
    $(window).scrollTop() > a ? $(".fixnav").css({"position" : "fixed","left" : $(".wrapper").offset().left + "px"}) : $(".fixnav").css({"position" : "static"});
})