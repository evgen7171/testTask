$(document).ready(function () {
    wrapperCarousel();
    productCarousel('hits');
});

function wrapperCarousel() {

    let change_img_time = 3000,
        transition_speed = 500;

    let listItems = $("#slider").children('li'),
        navItems = $('#navs').children('li'),
        listLen = listItems.length,
        current,
        changeTimeout;

    function moveTo(newIndex) {

        let i = newIndex;

        if (newIndex === 'prev') {
            i = (current > 0) ? (current - 1) : (listLen - 1);
        }

        if (newIndex === 'next') {
            i = (current < listLen - 1) ? (current + 1) : 0;
        }

        navItems.removeClass('wrapper_nav__active')
            .eq(i).addClass('wrapper_nav__active');

        listItems.fadeOut(transition_speed)
            .eq(i).fadeIn(transition_speed);

        current = i;

        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(function () {
            moveTo('next');
        }, change_img_time);
    }

    $("#navs li").click(function () {
        let i = $('#navs li').index(this);
        moveTo(i);
    });

    moveTo('next');
}

function productCarousel(id) {
    let listItems = $(id).children('div'),
        listLen = listItems.length,
        current;

    // console.log($(id));

    function moveTo(newIndex) {

        let i = newIndex;

        if (newIndex === 'prev') {
            i = (current > 0) ? (current - 1) : (listLen - 1);
        }

        if (newIndex === 'next') {
            i = (current < listLen - 1) ? (current + 1) : 0;
        }

        navItems.removeClass('wrapper_nav__active')
            .eq(i).addClass('wrapper_nav__active');

        listItems.fadeOut(transition_speed)
            .eq(i).fadeIn(transition_speed);

        current = i;
    }

    $("#prev").click(function () {
        moveTo('prev');
    });

    $("#next").click(function () {
        moveTo('next');
    });

}