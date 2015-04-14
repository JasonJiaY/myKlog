$(document).ready(function() {
    $(".container").hide();
    $(".container").fadeIn('5000');
    $(".showcase-wrapper").hide();
    $(".showcase-wrapper").fadeIn("slow");


    // 固定顶部标题
    var fixedTitle = function() {
        $('#fixedTitle').css({
            'height' : '36px',
            'backgroundColor' : 'rgba(255, 255, 255, 0.85)',
            'position' : 'fixed',
            "overflow" : "hidden",
            "boxShadow" : "0 10px 14px 0 #e8e8e8",
            "width" : $("#article").css("width"),
            "top" : 0,
            "marginLeft" : "-40px",
            "borderTop" : "solid 3px #d90006",
        });

        var titles = [];

        $('h2').each(function(){
            titles.push({'top' : $(this).offset().top, 'html' : $(this).html()});
        })
        var titlesLength = titles.length;
        // console.log(titles);

        var currentScrollTop = 0;
        $(document).scroll(function(){
            // console.log($(this).scrollTop());
            currentScrollTop = $(this).scrollTop();
            for (var i = 0; i < titlesLength; i++) {
                if (i == titlesLength - 1 && titles[i].top < currentScrollTop) {
                    $("#fixedTitle").css('opacity', '1');
                    $("#fixedTitle").html('<h2 style="border:none; margin-top:0; margin-left:40px;">'+titles[i].html+'</h2>');
                    break;
                } else if (titles[i].top > currentScrollTop) {
                    if (i > 0 && titles[i-1].top < currentScrollTop) {
                        $("#fixedTitle").css('opacity', '1');
                        $("#fixedTitle").html('<h2 style="border:none; margin-top:0; margin-left:40px;">'+titles[i-1].html+'</h2>');
                        $("h2").css("opacity", "1");
                        $("h2").eq(i).css("opacity", "0");
                    } else {
                        $("h2").css("opacity", "1");
                        $("#fixedTitle").html('');
                        $("#fixedTitle").css('opacity', '0');
                    }

                    break;
                } 
            }
        });
    };

    fixedTitle();


});


/*
var toggle = false;
$('.nav-toggle').on('click', function () {
    if (toggle == false) {
        $('#sidebar-wrapper').stop().animate({
            'left': '4px'
        });
        toggle = true;
    } else {
        $('#sidebar-wrapper').stop().animate({
            'left': '250px'
        });
        toggle = false;
    }
});
*/

$(function() {
    $('.project-box').click(function() {
        $(this).find('.post').slideToggle();
    });
});
