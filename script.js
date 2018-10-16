var windowX = $(window).width();
var windowY = $(window).height();

$(window).load(function () {
    $('body').css({
        // "height": (windowY/100)*110,
    })

    $('#landing-content').css({
        "height": (windowY / 100) * 120,
        "width": (windowX / 100) * 120,
    });

    $('#background').css({
        "height": $('#landing-content').height(),
    });

    $('#foreground').css({
        "height": $('#landing-content').height(),
    });
});

$(window).resize(function () {
    $('body').css({
        // "height": (windowY/100)*110,
    })

    $('#landing-content').css({
        "height": (windowY / 100) * 120,
    });

    $('#background').css({
        "height": $('#landing-content').height(),
    });

    $('#foreground').css({
        "height": $('#landing-content').height(),
    });

});

$(document).ready(function ($) {


    $(document).mousemove(function (event) {
        doParallax(event.pageX, event.pageY);
    });

    function doParallax(cursorX, cursorY) {
        var pointX = (windowX / 2) - cursorX;
        var pointY = (windowY / 2) - cursorY;

        $('#landing-content').css('transform', 'translate3d(' + (pointX / 40) + 'px, ' + (pointY / 40) + 'px, 0px)');
        $('#foreground').css('transform', 'translate3d(' + (pointX / 10000) + 'px, ' + (pointY / 10000) + 'px, 0px)');
        $('#background').css('transform', 'translate3d(' + (pointX / 50) + 'px, ' + (pointY / 50) + 'px, 0px)');
    }


});

$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop(),
        stickyContainer = $('.col-sm-12[name=position-topmenu]'),
        elementOffset = stickyContainer.offset().top;

    if (scroll >= elementOffset) {
        sticky.addClass('fixed');
    } else if (scroll < elementOffset) {
        sticky.removeClass('fixed');
    }

});
