// 阻止默认行为
function stopDefault(e){
    var e = e || event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

//tab切换
function tab(divObj,liObj,classN,does){
    $(divObj).eq(0).siblings().hide();
    $(liObj).eq(0).addClass(classN).siblings().removeClass(classN);
    $(liObj).each(function(i){
        $(this).on(does,function(){
            $(liObj).removeClass(classN);
            $(this).addClass(classN);
            $(divObj).eq(i).show().siblings().hide();
        });
    })
}

//滚动置顶
function rollTop(obj){
	var topDistance=$(obj).offset().top;
	$(window).scroll(function(){
		if($(this).scrollTop()>=topDistance){
			var leftDistance=$(obj).offset().left;
			$(obj).css({
				position:"fixed",
				left:leftDistance,
				top:0
			}).removeClass("por");
		}else{
			$(obj).css({
				position:"relative",
				left:"auto",
				top:0
			});
		}
	});
}

//左右切换
function leftRight(display,left,right){
    var W = $(display).parent().width();
    var len = $(display).children("ul").size();
    var i = 0;
    $(display).width(len*W);

    $(left).click(function(){
        i--;
        if(i <= -1){
            $(display).css({left:-(len-1)*W});
            i = len-2;
        }
        $(display).stop().animate({left:-i*W},500);
    });
    $(right).click(function(){
        i++;
        if(i >= len){
            $(display).css({left:0});
            i = 1;
        }
        $(display).stop().animate({left:-i*W},500);
    });

}

//边框闪烁
function border(bor,bk){
    $(bor).append("<div class=\"bk1\"></div><div class=\"bk2\"></div>");
    var W=$(bor).width()+1;
    var H=$(bor).height()+1;

    $(bor).hover(function(){
        $(this).children(bk).css({display:"block"});
        $(this).children(bk).stop().animate({width:W, height:H},500);
    },function(){
        $(this).children(bk).stop().animate({width:0, height:0},500,function(){
           $(this).css({display:"none"});
        });
    });
}

//显示与隐藏
function show(obj,objChild,className){
    var t;
    $(objChild).hide();
    $(obj).hover(function(){
        $(objChild).show();
        $(this).addClass(className);
    },function(){
        t=setTimeout(function(){
            $(objChild).hide();
            $(obj).removeClass(className);
        },100);
    });

    $(objChild).hover(function(){
        clearTimeout(t);
    },function(){
        $(objChild).hide();
        $(obj).removeClass(className);
    });
}

// 城市选择
function findCity(obj){
    $(obj).click(function(){
        var cityVal=$(this).text();
        $(".city span").text(cityVal);
        $(".nowCity span").text(cityVal);
        $(".cityChoose").find("a").removeClass("on");
        $(this).addClass("on");

        $(".cityChoose a").each(function(){
            if($(this).text()==cityVal){
                $(this).addClass("on");
            }
        });
    });
}
findCity(".manyCities a");
findCity(".always li a");

$(".char span").click(function(){
    var change=$(this);
    $(".manyCities li span").each(function(){
        if($(this).text()==change.text()){
            var toTop=$(this).position().top-5+$(".manyCities").scrollTop();
            $(".manyCities").animate({scrollTop:toTop});
        }
    });
});

$(".cityInput button").click(function(){
    var inputVal=$(".cityInput input").val();
    $(".cityChoose").find("a").removeClass("on");
    $(".cityChoose a").each(function(){
        if($(this).text()==inputVal){
            $(this).addClass("on");
            $(".city span").text(inputVal);
            $(".nowCity span").text(inputVal);
            var toTop=$(this).position().top-5+$(".manyCities").scrollTop();
            $(".manyCities").animate({scrollTop:toTop});
        }
    });
});

$(".cityInput input").focus(function(){
    $(this).val("");
});

show(".city",".cityChoose","show");

//顶部jq动效
(function(){
    $(".weixin").hover(function(){
        $(".weixin .wechat").fadeToggle("fast");
    });
    $(".phone").hover(function(){
        $(".phone .phonechat").fadeToggle("fast");
    });
    $(".my").hover(function(){
        $(".my .myMsg").fadeToggle("fast");
    });
    $(".cart").hover(function(){
        $(".cart .cartCont").fadeToggle("fast");
    });
})();

function listshow(){
    $(".nav .sort dd").hide();  
    $(".nav .sort dl").mouseenter(function(){
        $(this).children("dd").show();
    });
     $(".nav .sort dl").mouseleave(function(){
        $(this).children("dd").hide();
    });
}
listshow();

// 搜索栏
function searchshow(){
    $(".search .searchbox .txt").focus(function(){
        $(this).attr("value","");
    });
    $(".search .searchbox .txt").blur(function(){
        var t = $(this).val();
        if(t == ""){
            $(this).attr("value","女士针织衫");
        }
    });
}
searchshow();

// 电梯效果
function lift(floor,f,className,css1,css2){
    var size = $(floor).size();
    for(var i=0;i<size;i++){
        $(f).eq(i).click(function(){
            var index=$(this).index();
            var T=$(floor).eq(index).offset().top - 100;
            $("html,body").animate({scrollTop:T});
        });
    }
    $(f).last().click(function(){
        $("html,body").animate({scrollTop:0});
    });

    $(window).scroll(function(){
        var T=$("html,body").scrollTop()||$(this).scrollTop();
        var t1=$(floor).eq(0).offset().top-200;
        if(t1<=T){
            $(f).parent().css(css1);
        }else if(t1>T){
            $(f).parent().css(css2);
        }
        for (var j=0;j<size;j++){
            var t=$(floor).eq(j).offset().top-100;
            if (T>=t){
                $(f).children().eq(j).addClass(className).parent().siblings().children().removeClass(className);
            }
        } 

    });
}

 // 顶部固定搜索
$(window).scroll(function(){
    if($(window).scrollTop()>400){
        $(".scroll").slideDown();
    }
    if($(window).scrollTop()<100){
       $(".scroll").slideUp();   
    }   
});

//搜索框动态请求银泰数据
function yinJsonp(){
    var containerNode = document.getElementById("containers");
    var containerscroll = document.getElementById("containerSSS");
    var inputBox = document.getElementById("searchBoxxxx");
    var inputscroll = document.getElementById("searchBox");

    function getData(key,cont){
        //调用方法
        jsonp({
            url:"http://www.yintai.com/ajaxpage/autosearch.aspx",
            callback:"callback",   //跟后台协商的接收回调名
            data:{
                keyword:key,
            },
            success:function(json){
                var str = [];
                for(var i=0;i<json.length;i++){
                    var item = json[i];
                    str.push("<dl class='cf'>");
                    str.push("<a href='#'>"+ item.keyword +"</a>");
                    str.push("</dl>");
                }
                 cont.innerHTML = str.join("");
                if(cont.innerHTML == ''){
                    cont.style.display = 'none';  
                }
            },
            fail:function(){
                console.log("error")
            },
            time:10000
        });
    }
    inputBox.onkeyup = function(){
        if(inputBox.value == ''){
          containerNode.style.display = 'none';  
        }else{ 
          containerNode.style.display = 'block';
        }
        getData(this.value,containerNode);
    }
    inputscroll.onkeyup = function(){
        if(inputscroll.value == ''){
          containerscroll.style.display = 'none';  
        }else{ 
          containerscroll.style.display = 'block';
        }
        getData(this.value,containerscroll);
    }
}
yinJsonp();

// jsonp
function toQueryString(data){
        var queryArray = [];
        for(var key in data){
            if(data[key]){
                queryArray.push(key+"="+data[key]);
            }
        }
        return queryArray.join("&");
    };
var jsonp = function(options) {
    options = options || {};
    if (!options.url || !options.callback) {
        throw new Error("参数不合法");
    }

    //创建 script 标签并加入到页面中
    var callbackName = ('jsonp_' + Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    var params = "";
    if(options.data){
        options.data[options.callback] = callbackName;
        params += toQueryString(options.data);
    }else{
        params+=options.callback+"="+callbackName;
    }
    var oS = document.createElement('script');
    oHead.appendChild(oS);

    //创建jsonp回调函数
    window[callbackName] = function (json) {
        oHead.removeChild(oS);
        clearTimeout(oS.timer);
        window[callbackName] = null;
        options.success && options.success(json);
    };

    //发送请求
    oS.src = options.url + '?' + params;

    //超时处理
    if (options.time) {
        oS.timer = setTimeout(function () {
            window[callbackName] = null;
            oHead.removeChild(oS);
            options.fail && options.fail({ message: "超时" });
        }, options.time);
    }
};

// 左右切换
function leftRight(display,left,right,block){
    $(display).children(block).eq(0).clone().appendTo($(display));

    var W = $(display).parent().width();
    var len = $(display).children(block).size();
    var i = 0;
    $(display).width(len*W);

    $(left).click(function(){
        i--;
        if(i <= -1){
            $(display).css({left:-(len-1)*W});
            i = len-2;
        }
        $(display).stop().animate({left:-i*W},500);
    });
    $(right).click(function(){
        i++;
        if(i >= len){
            $(display).css({left:0});
            i = 1;
        }
        $(display).stop().animate({left:-i*W},500);
    });
}