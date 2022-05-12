 (function (jQuery) {
     jQuery.fn.menumaker = function (options) {
         var cssmenu = jQuery(this),
             settings = jQuery.extend({
                 format: "dropdown",
                 sticky: false
             }, options);
         return this.each(function () {
             jQuery(this).find(".button").on('click', function () {
                 jQuery(this).toggleClass('menu-opened');
                 var mainmenu = jQuery(this).next('ul');
                 if (mainmenu.hasClass('open')) {
                     mainmenu.slideToggle().removeClass('open');
                 } else {
                     mainmenu.slideToggle().addClass('open');
                     if (settings.format === "dropdown") {
                         mainmenu.find('ul').show();
                     }
                 }
             });
             cssmenu.find('li ul').parent().addClass('has-sub');
             multiTg = function () {
                 cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                 cssmenu.find('.submenu-button').on('click', function () {
                     jQuery(this).toggleClass('submenu-opened');
                     if (jQuery(this).siblings('ul').hasClass('open')) {
                         jQuery(this).siblings('ul').removeClass('open').slideToggle();
                     } else {
                         jQuery(this).siblings('ul').addClass('open').slideToggle();
                     }
                 });
             };
             if (settings.format === 'multitoggle') multiTg();
             else cssmenu.addClass('dropdown');
             if (settings.sticky === true) cssmenu.css('position', 'fixed');
             resizeFix = function () {
                 var mediasize = 1000;
                 if (jQuery(window).width() > mediasize) {
                     cssmenu.find('ul').show();
                 }
                 if (jQuery(window).width() <= mediasize) {
                     cssmenu.find('ul').hide().removeClass('open');
                 }
             };
             resizeFix();
             return jQuery(window).on('resize', resizeFix);
         });
     };
 })(jQuery);

 (function (jQuery) {
     jQuery(document).ready(function () {
         jQuery("#cssmenu").menumaker({
             format: "multitoggle"
         });
     });


     // search br
     jQuery('.search_box').on("click", function () {
         jQuery('.search_bar').addClass('search_active');
     });
     jQuery('.search_bar .close').on("click", function () {
         jQuery('.search_bar').removeClass('search_active');
     });

     //banner carousel
     jQuery('.banner_area .owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         dots: false,
         nav: true,
         navText: ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
         items: 1,
         animateOut: 'fadeOut',
     });


     // latest product carousel
     jQuery('.latest_products .owl-carousel').owlCarousel({
         loop: true,
         margin: 20,
         dots: true,
         nav: false,
         responsive: {
             0: {
                 items: 2
             },
             600: {
                 items: 3
             },
             1000: {
                 items: 5
             }
         }
     });


     // cart popup
     jQuery('.cart-1').on("click", function () {
         jQuery('.product_cart_popup').addClass('product_cart_popup_active');
     });
     jQuery('.product_cart_popup .close').on("click", function () {
         jQuery('.product_cart_popup').removeClass('product_cart_popup_active');
         jQuery('.overlay').removeClass('product_cart_popup_active');
     });

     // cart popup
     jQuery('.view_item').on("click", function () {
         jQuery('.view_popup').addClass('view_popup_active');
     });
     jQuery('.view_popup .close').on("click", function () {
         jQuery('.view_popup').removeClass('view_popup_active');
         jQuery('.overlay').removeClass('view_popup_active');
     });

     // color selected
     jQuery(".view_popup .colors ul .li").on("click", function () {
         jQuery(this).toggleClass("selected").siblings("li").removeClass("selected");
     });
     //size selected 
     jQuery(".view_popup .size ul li").on("click", function () {
         jQuery(this).toggleClass("selected").siblings("li").removeClass("selected");
     });



     // category carousel

     jQuery('.category .owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         dots: false,
         nav: false,
         autoplay: true,
         autoplayTimeout: 3000,
         responsive: {
             0: {
                 items: 2
             },
             600: {
                 items: 3
             },
             1000: {
                 items: 4
             },
             1200: {
                 items: 6
             }
         }
     });

     //3d hover 
     jQuery('#plate-default').plate();
     jQuery('#plate-inverse').plate({
         inverse: true
     });
     jQuery('#plate-custom').plate({
         perspective: 200,
         maxRotation: 20,
         animationDuration: 100
     });
     jQuery('#listener-contained').plate({
         element: '#plate-contained'
     });
     jQuery('#listener-remote').plate({
         element: jQuery('#plate-remote')
     });


     // brand carousel

     jQuery('.brand .owl-carousel').owlCarousel({
         loop: true,
         margin: 50,
         dots: false,
         nav: false,
         autoplay: true,
         autoplayTimeout: 3000,
         responsive: {
             0: {
                 items: 2
             },
             600: {
                 items: 3
             },
             1000: {
                 items: 6
             }
         }
     });

     // scroll top function

     var progressPath = document.querySelector('.progress-wrap path');
     var pathLength = progressPath.getTotalLength();

     progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
     progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
     progressPath.style.strokeDashoffset = pathLength;
     progressPath.getBoundingClientRect();
     progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

     var updateProgress = function () {
         var scroll = jQuery(window).scrollTop();
         var height = jQuery(document).height() - jQuery(window).height();
         var progress = pathLength - (scroll * pathLength / height);
         progressPath.style.strokeDashoffset = progress;
     }

     updateProgress();
     jQuery(window).scroll(updateProgress);

     var offset = 50;
     var duration = 550;

     jQuery(window).on('scroll', function () {
         if (jQuery(this).scrollTop() > offset) {
             jQuery('.progress-wrap').addClass('active-progress');
         } else {
             jQuery('.progress-wrap').removeClass('active-progress');
         }
     });

     jQuery('.progress-wrap').on('click', function (event) {
         event.preventDefault();
         jQuery('html, body').animate({
             scrollTop: 0
         }, duration);
         return false;
     });
     
     
     // sticky menu
     
     jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 65) {
            jQuery('.main_menu').addClass('fixed-top');
        } else {
            jQuery('.main_menu').removeClass('fixed-top');
        }
    });
     
     // category_carousel

     
     
     
    

 })(jQuery);
