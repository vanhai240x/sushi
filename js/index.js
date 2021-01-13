$(document).ready(function() {
    scroolDown();
})

function scroolDown() {
    $(window).scroll(function() {
        var posHtml = $('html').offset().top;
        if (posHtml < -600) {
            $('#back-top').addClass("show");
        } else {
            $('#back-top').removeClass("show");
        }
        $(".visible-bottom-to-top").each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide-bottom-to-top");
            }
        });
    });
}

// Back to top
$('#back-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
})