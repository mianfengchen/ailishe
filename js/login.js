

$(function(){
     // $(".phone").fadeOut()
    $(".erweima .code").mouseenter(function(){
        $(".ma").stop(true,false).animate({left:-80},800)
        $(".phone").stop(true,false).fadeIn(800)
    })
    $(".erweima .code").mouseleave(function(){
        $(".ma").stop(true,false).animate({left:0},1000)
        setTimeout(function(){
            $(".phone").stop(true,false).fadeOut();
        },500)  
    })
    // 登录切换
    $(".erweima").hide()
    $(".lgtop .num").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".erweima").hide()
        $(".main").show()
    })
    $(".lgtop .saoma").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".main").hide()
        $(".erweima").show()
    })
    $(".refresh").hide()
    setInterval(function(){
       $(".refresh").show()
       $(".hid").hide()
    },9000)
    $(".refresh").click(function(){
        $(".refresh").hide()
       $(".hid").show()
    })

    //登录框 验证
    //账号验证
    
     $(".tips .wrong").fadeOut(1)
     $(".tips .true").fadeOut(1)
     $(".nametxt").focus()
           $(".nametxt").click(function(){
            $(this).siblings(".tips").children(".wrong").fadeOut(1)   
            $(this).siblings(".tips").children(".true").fadeIn(1)
            $(this).css({border:"1px solid #ccc"})
        })
        $(".nametxt").blur(function(){
            var str = $(this).val();
            var msg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            console.log( (/^1[3|4|5|8]\d{9}$/).test(str) )
            console.log( msg.test(str) )
            if (str == "")
            {
                $(this).siblings(".tips").children(".true").fadeOut(1)
                $(this).siblings(".tips").children(".wrong").fadeIn(1)
                $(this).siblings(".tips").children(".wrong").css({color:"#e5004f"})   
                $(this).css({border:'1px solid #e5004f'})
                console.log(2)
            }else{
                if ( !( (/^1[3|4|5|8]\d{9}$/).test(str) ) && !(msg.test(str))) 
                {
                    $(this).siblings(".tips").children(".true").fadeOut(1)
                    $(this).siblings(".tips").children(".wrong").fadeIn(1)
                    $(this).siblings(".tips").children(".wrong").css({color:"#e5004f"})   
                    $(this).css({border:'1px solid #e5004f'})
                    console.log(1)
                }else{
                    $(this).siblings(".tips").children(".wrong").fadeOut(1)   
                        $(this).siblings(".tips").children(".true").fadeOut(1)
                    }
                };
        })
     

//密码验证
        $(".passtxt").click(function(){
            $(this).siblings(".tips").children(".wrong").fadeOut(1)   
            $(this).siblings(".tips").children(".true").fadeIn(1)
            $(this).css({border:"1px solid #ccc"})
        })
        $(".passtxt").blur(function(){
            var str = $(this).val();
            var msg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
            if (str == ""){
                $(this).siblings(".tips").children(".true").fadeOut(1)
                $(this).siblings(".tips").children(".wrong").fadeIn(1)
                $(this).siblings(".tips").children(".wrong").css({color:"#e5004f"})   
                $(this).css({border:'1px solid #e5004f'})
            }else{
                if ( !(msg.test(str))){
                    $(this).siblings(".tips").children(".true").fadeOut(1)
                    $(this).siblings(".tips").children(".wrong").fadeIn(1)
                    $(this).siblings(".tips").children(".wrong").css({color:"#e5004f"})   
                    $(this).css({border:'1px solid #e5004f'})
                }else{
                    $(this).siblings(".tips").children(".wrong").fadeOut(1)   
                        $(this).siblings(".tips").children(".true").fadeOut(1)
                    }
                };
        })
    
})