let slider = $('.register__slider');

$(document).ready(function () {

    if ($(slider).length) {

        $('.register__slider').slick({
            dots: true,
        });

    };
});