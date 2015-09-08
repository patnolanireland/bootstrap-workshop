/*global window, $*/
(function () {
    'use strict';

    $(function () {
        $('a[href*=#]:not([href=#])').not('[href^=#carousel]').click(function () {
            var location = window.location,
                target = $(this.hash),
                headerHeight = $('header').height(),
                navHeight = $('nav').height(),
                isNavFixed = $('nav').hasClass('affix');
            
            console.log(headerHeight, navHeight, isNavFixed);
            
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: isNavFixed ? target.offset().top - navHeight : target.offset().top - (headerHeight > 0 ? headerHeight : navHeight * 2)
                    }, 1000);
                    return false;
                }
            }
        });
    });
}());