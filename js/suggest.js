
// 提交按钮 js，如果没有对满意度进行选择，将会出现错误提示，且不能提交
void function()
{
    var flag = false;

    $(".btn").click(function(e){
        e = e || event;
        $.each($(".feedSome input"),function(){
            if ($(this)[0].checked) 
            {
                flag = true;
            };
        })

        if(!flag)
        {
            $("#feederro").show();
            if (e.preventDefault) e.preventDefault();  //阻止浏览器默认提交行为
            else e.returnValue = false;
            // return false;
        }
        
    })
}();
    

})
