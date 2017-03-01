
//分类隐藏鼠标经过出现

function listshow(){
    // $(".nav .sort").hide()

    $(".nav .all").mouseenter(function(){
        $(this).children('.sort').fadeIn();
    });
    $(".nav .all").mouseleave(function(){
        $(this).children('.sort').fadeOut();
    });

    $(".nav .sort dd").hide(); 

    $(".nav .sort dl").mouseenter(function(){
        $(this).children("dd").show();
    })

    $(".nav .sort dl").mouseleave(function(){
        $(this).children("dd").hide();

        
    })
}
listshow();
//环形进度条
function circle(){
    $('#indicatorContainer1').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 86,
        roundCorner : true,
        percentage: true
    });
    $('#indicatorContainer2').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 42,
        roundCorner : true,
        percentage: true
    });
    $('#indicatorContainer3').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 97,
        roundCorner : true,
        percentage: true
    });
    $('#indicatorContainer4').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 99,
        roundCorner : true,
        percentage: true
    });
    $('#indicatorContainer5').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 85,
        roundCorner : true,
        percentage: true
    });
    $('#indicatorContainer6').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 91,
        roundCorner : true,
        percentage: true
    });
    $('#indicatorContainer7').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 37,
        roundCorner : true,
        percentage: true
    });
    $('#indicatorContainer8').radialIndicator({
        barColor: '#f15e6f',
        barWidth: 4,
        initValue: 95,
        roundCorner : true,
        percentage: true
    });
}
circle();

show(".nav .all>a",".nav .all .sort","");