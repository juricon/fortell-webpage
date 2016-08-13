
$(document).ready(function(){
    $('.third-block-bxslider').bxSlider({
        pager:false
    });
    $('.seventh-block-slider-squares').bxSlider({
        auto: true,
        controls:false,
        pause: 5000
    });

    var button = $(".to-top");

    $(window).scroll(function(){
        if ($(window).scrollTop() > 400 ){
            button.show()
        }else{
            button.hide()
        };
    });

    button.click(function(){
        $('html , body').animate({scrollTop:0},2000)
    });
});



