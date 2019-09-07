"use strict";
jQuery(document).ready(function($) {
  $(window).on("load", function() {
    $(".loaded").fadeOut();
    $(".preloader")
      .delay(1000)
      .fadeOut("slow");
  });
  /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
  $("#bs-example-navbar-collapse-1")
    .find("a[href*=\\#]:not([href=\\#])")
    .click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 0
            },
            1000
          );
          if ($(".navbar-toggle").css("display") != "none") {
            $(this)
              .parents(".container")
              .find(".navbar-toggle")
              .trigger("click");
          }
          return false;
        }
      }
    });

  /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

  // var wow = new WOW({
  //   mobile: false // trigger animations on mobile devices (default is true)
  // });
  // wow.init();
  AOS.init();

  /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

  $(".main_home_slider").owlCarousel({
    responsiveClass: true,
    autoplay: true,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='lnr lnr-chevron-left'></i>",
      "<i class='lnr lnr-chevron-right'></i>"
    ],
    autoplayHoverPause: true
  });

  $(".single_features_slide").owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='lnr lnr-chevron-left'></i>",
      "<i class='lnr lnr-chevron-right'></i>"
    ],
    autoplayHoverPause: true
  });

  $(".main_teastimonial_slider").owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='lnr lnr-chevron-left'></i>",
      "<i class='lnr lnr-chevron-right'></i>"
    ],
    autoplayHoverPause: true
  });

  // magnificPopup

  $(".portfolio-img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  //mytabs

  //    $('ul.service_tabe_menu li a').click(function (e) {
  //        e.preventDefault()
  //        $(this).tab('show')
  //    });

  //skillbar section

  // var skillBarTopPos = jQuery('.skillbar').position().top;
  // jQuery(document).scroll(function () {
  //     var scrolled_val = $(document).scrollTop().valueOf();
  //     if (scrolled_val > skillBarTopPos - 250)
  //         startAnimation();
  // });

  // function startAnimation() {
  //   jQuery(".skillbar").each(function() {
  //     jQuery(this)
  //       .find(".skillbar-bar")
  //       .animate(
  //         {
  //           width: jQuery(this).attr("data-percent")
  //         },
  //         6000
  //       );
  //   });
  // }
  //---------------------------------------------
  // Counter
  //---------------------------------------------

  // $(".statistic-counter").counterUp({
  //   delay: 10,
  //   time: 2000
  // });

  // main-menu-scroll

  jQuery(window).scroll(function() {
    var top = jQuery(document).scrollTop();
    var height = 320;
    //alert(batas);

    if (top > height) {
      jQuery(".fixed-top").addClass("menu-scroll");
    } else {
      jQuery(".fixed-top").removeClass("menu-scroll");
    }
  });

  // scroll Up

  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn("slow");
    } else {
      $(".scrollup").fadeOut("slow");
    }
  });

  $(".scrollup").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  //    $('#menu').slicknav();
  // jQuery("#portfoliowork").mixItUp({
  //   selectors: {
  //     target: ".tile",
  //     filter: ".filter",
  //     sort: ".sort-btn"
  //   },
  //   animation: {
  //     animateResizeContainer: false,
  //     effects: "fade scale"
  //   }
  // });

  $(".dropdown-menu").click(function(e) {
    e.stopPropagation();
  });

  //End
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 120) {
    $("nav").addClass("small");
  } else {
    $("nav").removeClass("small");
  }
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
