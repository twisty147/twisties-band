// Scroll to top button functionality
$(document).ready(function () {
    var backToTopBtn = $('#backToTopBtn');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            backToTopBtn.addClass('visible');
        } else {
            backToTopBtn.removeClass('visible');
        }
    });

    backToTopBtn.click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});