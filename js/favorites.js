
$(document).ready(function(){
/**
 * 
 * 收藏夹
 */
function fav(){
    var fg = 0 ;
    var number = 0 ;

// 全部
    var str;
    str = [
    {src:"images/item01.jpg",txt:"港风冬装男士中长款棉衣男韩版青年宽松连帽加厚棉服男情侣外套潮",pri1:"￥155.00",pri2:"￥308.00",flag:0},
    {src:"images/item02.jpg",txt:"恒源祥冬季新款真皮皮草貉子毛内胆大衣皮毛一体修身连帽海宁皮草",pri1:"￥187.00",pri2:"￥248.00",flag:0},
    {src:"images/item03.jpg",txt:"冬季加绒加厚运动裤男长裤收口学生纯棉休闲小脚裤哈伦束脚卫裤潮",pri1:"￥88.00",pri2:"￥108.00",flag:0},
    {src:"images/item04.jpg",txt:"拐角英伦冬季新款舒适宽松连帽保暖背后刺绣简约男女情侣棉衣棉服",pri1:"￥155.00",pri2:"￥308.00",flag:0},
    {src:"images/item05.jpg",txt:"大牛传说 秋冬款男士直筒牛仔裤男修身 青少年时尚水洗男裤子韩版",pri1:"￥139.00",pri2:"￥288.00",flag:0},
    {src:"images/item06.jpg",txt:"2016冬装港风新款贴布织带装饰字母印花撞色连帽原宿面包服棉衣潮",pri1:"￥158.00",pri2:"￥185.00",flag:0},
    {src:"images/item07.jpg",txt:"2016冬季中长款毛呢大衣男青年韩版宽松风衣休闲加厚呢子外套潮流",pri1:"￥199.00",pri2:"￥408.00",flag:0},
    {src:"images/item08.jpg",txt:"秋冬新款男士连帽休闲羽绒服 韩版潮流保暖80绒青年学生御寒外套",pri1:"￥208.00",pri2:"￥798.00",flag:0},
    ]


    //删除
    function alldel(){
        $(".cont .cont-r .tit-del").mousedown(function(){
            $(".hid").css({display:"block"});
            var str1 = [];
            var str2 = [];
            $.each(str,function(index,value){
                if(str[index].flag == 0){
                    str1.push(str[index]);
                }
            });
            $.each(str,function(index,value){
                if(str[index].flag == 1){
                    str2.push(str[index]);
                }
            });
            if(str2.length == 0){
                $(".cont .pop1").css({display:"block"});
                $(".cont .pop1 div span").mousedown(function(){
                    $(".hid").css({display:"none"});
                    $(".cont .pop1").css({display:"none"});
                })
                $(".cont .pop1 i").mousedown(function(){
                    $(".hid").css({display:"none"});
                    $(".cont .pop1").css({display:"none"});
                })
            }else{
                $(".cont .pop").css({display:"block"});
                $(".cont .pop .sl").mousedown(function(){
                    $(".hid").css({display:"none"});
                    str = str1;
                    start();

                    $(".cont .pop").css({display:"none"});
                    number = 0 ;
                    $(".cont .cont-r>p").text("批量管理").prev().css({display:"none"});
                })
                $(".cont .pop .sr").mousedown(function(){
                    $(".hid").css({display:"none"});
                    number = 0 ;
                    $.each(str,function(index,value){
                        str[index].flag = 0 ;
                    });
                    start();
                    $(".cont .pop").css({display:"none"});
                    $(".cont .cont-r>p").text("批量管理").prev().css({display:"none"});
                })
                $(".cont .pop>i").mousedown(function(){
                    $(".hid").css({display:"none"});
                    number = 0 ;
                    $.each(str,function(index,value){
                        str[index].flag = 0 ;
                    });
                    start();
                    $(".cont .pop").css({display:"none"});
                    $(".cont .cont-r>p").text("批量管理").prev().css({display:"none"});
                });
            }
            
        });
    }
    alldel();

    //总的
    function start(){
        function all(){
            var li = ""
            $.each(str,function(index,value){
                li += '<li class="fl por"><div class="cont-popup poa"><p>确定删除？</p><button class="pop-yes poa" value="1">确定</button><button class="pop-no poa" value="0">取消</button></div><div class="item-img por"><a href="#"><img src="'+str[index].src+'" alt=""><div class="poa"><i class="in-block poa"></i></div></a><div><a href="#" class="poa item-join">加入购物车</a><a href="#" class="poa item-sim">找相似</a><span class="poa item-del icon-trash"></span></div></div><div class="item-txt"><a href="#"><p>'+str[index].txt+'</p></a></div><div class="item-pri"><p><i class="in-block"></i>'+str[index].pri1+'<span>'+str[index].pri2+'</span></p></div></li>';
            });
            $(".cont ul").html(li);
        }
        all();

        // 宝贝数量
        function num(){
            var number = $(".cont .cont-item li").size();
            $(".cont .cont-l>span").text(number);
            $(".cont .cont-l>div .tit-bot-p>span").text(number);
        }
        num();

        // 删除宝贝
        function del(){
            $(".cont>ul>li .item-img>div>span").click(function(){
                $(this).parent().parent().prev().css({display:"block"}).children("button").eq(0).click(function(){
                    $(this).parent().parent().remove();
                    num();
                }).next().click(function(){
                    $(this).parent().css({display:"none"}).next().children("div").css({display:"block"});
                });
                $(this).parent().css({display:"none"});
            })
        }
        del();

    // 批量管理
        var a = 0 ;

        function adm(){
            $(".cont .cont-r>p").unbind("mousedown").mousedown(function(e){
                console.log(a++)
                stopDefault(e);
                if(number == 0){
                    number = 1 ;
                    $(this).text("取消管理").prev().css({display:"block"});
                    
                    $(".cont ul li").each(function(){
                        $(this).children().eq(1).children().eq(0).children().eq(1).css({display:"block"});
                        $(this).children().eq(1).children().eq(1).css({display:"none"});
                    });
                }else{
                    number = 0 ;
                    fg = 0 ;
                    $(".cont .cont-r .tit-rad").children("i").css({backgroundPosition:"0 -184px"});
                    $.each(str,function(index,value){
                        str[index].flag = 0
                    });
                    choice();
                    $(this).text("批量管理").prev().css({display:"none"});

                    $(".cont ul li").each(function(){
                        $(this).children().eq(1).children().eq(0).children().eq(1).css({display:"none"});
                        $(this).children().eq(1).children().eq(1).css({display:"block"});
                    });
                }
            });
        }
        adm();

        // 选择
        function choice(){
            $.each(str,function(index,value){
                if(str[index].flag == 1){
                    $(".cont ul li").eq(index).children().eq(1).children().eq(0).children().eq(1).addClass("sty").children().addClass("bp")
                }else{
                    $(".cont ul li").eq(index).children().eq(1).children().eq(0).children().eq(1).removeClass("sty").children().removeClass("bp")
                }
            })
        }
        choice();

        // 点击全选
        function allcho(){
            $(".cont .cont-r .tit-rad").unbind("mousedown").mousedown(function(e){
                stopDefault(e);
                if(fg == 0){
                    fg = 1;
                    $(this).children("i").css({backgroundPosition:"0 -706px"});
                    $.each(str,function(index,value){
                        str[index].flag = 1
                    });
                    choice();
                }else{
                    fg = 0 ;
                    $(this).children("i").css({backgroundPosition:"0 -184px"});
                    $.each(str,function(index,value){
                        str[index].flag = 0
                    });
                    choice();
                }

            })
        }
        allcho();

    // 单选
        function rad(){
            $(".cont ul li").each(function(i){
                $(".cont ul li").eq(i).children().eq(1).children().eq(0).children().eq(1).mousedown(function(e){
                    cancelBubble(e);
                    if(str[i].flag == 1){
                        str[i].flag = 0;
                        choice();
                    }else{
                        str[i].flag = 1;
                        choice();
                    }
                    var num1 = 0 ;
                    $.each(str,function(index,value){
                        if(str[index].flag == 1){
                            num1 ++ ;
                        }
                    });
                    if($(".cont ul li").size() == num1){
                        fg = 1 ;
                        $(".cont .cont-r .tit-rad").children("i").css({backgroundPosition:"0 -706px"});
                        choice();
                    }else{
                        fg = 0 ;
                        $(".cont .cont-r .tit-rad").children("i").css({backgroundPosition:"0 -184px"});
                        choice();
                    }
                });
            });
        }
        rad();
    }
    start();
}
fav();

    show(".nav .all>a",".nav .all .sort","");
});