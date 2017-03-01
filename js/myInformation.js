
//获取时间
function getdate(){
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var weekday=date.getDay();
    var day=date.getDate();

    switch(weekday){
        case 1:week="一";break;
        case 2:week="二";break;
        case 3:week="三";break;
        case 4:week="四";break;
        case 5:week="五";break;
        case 6:week="六";break;
        case 0:week="七";break;
    }
    return {
        y:year,
        m:month,
        d:day,
        w:week
    }
}

$(".calendar .day em").text(getdate().d);
$(".calendar .day span").eq(0).text("星期"+getdate().w);
$(".calendar .day span").eq(1).text(getdate().y+"."+getdate().m);

tab(".manyGoods ul",".cont4 .content .tit li","on","click");

$(function(){
    $.easing.def = "easeOutBounce";

    $('.informTit li.button a').click(function(e){
        e.preventDefault();
        $(this).parent().siblings().slideDown("slow");
        $(this).parents(".menu").siblings().find(".dropdown").slideUp("slow");
    });
});

$(".icon-trash").click(function(){
    $(this).parents("li").empty();
});

tab(".myInformation .cont4 .content .cont>div",".myInformation .cont4 .content .tit>div","borderTop","click");

tab(".informContent>div",".informTit .tab","changeColor","click");


// 下拉菜单
function date(obj,start,end){
    for(var i=start;i<=end;i++){
        $(obj).html($(obj).html()+"<option value=\""+i+"\">"+i+"</option>");
    }
    
}
date("#year",1940,2016);
date("#month",1,12);
date("#day",1,31);

//复选框
(function(){
    $(".base .choose input").each(function(){
        $(this).click(function(){
            var i=0;
            $(".base .choose input").each(function(){
                if($(this).prop("checked")){
                    i++;
                }
            });
            if(i>=3){
                $(".base .choose input").each(function(){
                    if(!$(this).prop("checked")){
                        $(this).attr({disabled:true});
                    }
                });
            }else{
                $(".base .choose input").each(function(){
                    $(this).attr({disabled:false});
                });
            }
        });
    });
})();

show(".nav .all>a",".nav .all .sort","");

$(".icon-plus").click(function(){
    $(".bgAdd").show();
});

$(".addNew .close").click(function(){
    $(".bgAdd").hide();
});
// setTimeout(function(){

// },10000);
// function getPath(obj){  
//     if(obj){  
//         if (window.navigator.userAgent.indexOf("MSIE")>=1){  
//             obj.select(); 
//             return document.selection.createRange().text;
//         }else if(window.navigator.userAgent.indexOf("Firefox")>=1){
//             if(obj.files){
//                 return obj.files.item(0).getAsDataURL();
//             }
//             return obj.value;
//         }
//         return obj.value;
//     }  
// }  
// $("#file").change(function(){
    // console.log($(".file").val());
    // console.log(getPath($(".file")));
    // console.log(document.getElementById("file"));
    // console.log(getPath(document.getElementById("file")));
     // $("#file").change(function(){
                // var path=$(this).val();
                //  var path1 = path.lastIndexOf("\\");
                // var name = path.substring(path1+1);
                // console.log(name);
            // });
// });


//附带不用修改浏览器安全配置的javascript代码，兼容ie， firefox全系列

//参数obj为input file对象