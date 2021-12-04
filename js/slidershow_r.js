(function($) {
    "use strict";
    $.fn.sliderResponsive = function(settings) {

        var set = $.extend({
                slidePause: 5000,
                fadeSpeed: 800,
                autoPlay: "on",
                showArrows: "off",
                hideDots: "off",
                hoverZoom: "on",
                titleBarTop: "off"
            },
            settings
        );

        var $slider_r = $(this);
        var size = $slider_r.find("> div").length; //number of slides
        var position = 0; // current position of carousal
        var sliderIntervalID; // used to clear autoplay

        // Add a Dot for each slide
        $slider_r.append("<ul></ul>");
        $slider_r.find("> div").each(function() {
            $slider_r.find("> ul").append('<li></li>');
        });

        // Put .show on the first Slide
        $slider_r.find("div:first-of-type").addClass("show");

        // Put .showLi on the first dot
        $slider_r.find("li:first-of-type").addClass("showli")

        //fadeout all items except .show
        $slider_r.find("> div").not(".show").fadeOut();

        // If Autoplay is set to 'on' than start it
        if (set.autoPlay === "on") {
            startSlider();
        }

        // If showarrows is set to 'on' then don't hide them
        if (set.showArrows === "on") {
            $slider_r.addClass('showArrows');
        }

        // If hideDots is set to 'on' then hide them
        if (set.hideDots === "on") {
            $slider_r.addClass('hideDots');
        }

        // If hoverZoom is set to 'off' then stop it
        if (set.hoverZoom === "off") {
            $slider_r.addClass('hoverZoomOff');
        }

        // If titleBarTop is set to 'on' then move it up
        if (set.titleBarTop === "on") {
            $slider_r.addClass('titleBarTop');
        }

        // function to start auto play
        function startSlider() {
            sliderIntervalID = setInterval(function() {
                nextSlide();
            }, set.slidePause);
        }

        // on mouseover stop the autoplay
        $slider_r.mouseover(function() {
            if (set.autoPlay === "on") {
                clearInterval(sliderIntervalID);
            }
        });

        // on mouseout starts the autoplay
        $slider_r.mouseout(function() {
            if (set.autoPlay === "on") {
                startSlider();
            }
        });

        //on right arrow click
        $slider_r.find("> .right").click(nextSlide)

        //on left arrow click
        $slider_r.find("> .left").click(prevSlide);

        // Go to next slide
        function nextSlide() {
            position = $slider_r.find(".show").index() + 1;
            if (position > size - 1) position = 0;
            changeCarousel(position);
        }

        // Go to previous slide
        function prevSlide() {
            position = $slider_r.find(".show").index() - 1;
            if (position < 0) position = size - 1;
            changeCarousel(position);
        }

        //when user clicks slider button
        $slider_r.find(" > ul > li").click(function() {
            position = $(this).index();
            changeCarousel($(this).index());
        });

        //this changes the image and button selection
        function changeCarousel() {
            $slider_r.find(".show").removeClass("show").fadeOut();
            $slider_r
                .find("> div")
                .eq(position)
                .fadeIn(set.fadeSpeed)
                .addClass("show");
            // The Dots
            $slider_r.find("> ul").find(".showli").removeClass("showli");
            $slider_r.find("> ul > li").eq(position).addClass("showli");
        }

        return $slider_r;
    };
})(jQuery);



//////////////////////////////////////////////
// Activate each slider - change options
//////////////////////////////////////////////
$(document).ready(function() {

    $("#slider_uno").sliderResponsive({
        // Using default everything
        // slidePause: 5000,
        // fadeSpeed: 800,
        // autoPlay: "on",
        // showArrows: "off", 
        // hideDots: "off", 
        // hoverZoom: "on", 
        // titleBarTop: "off"
    });

    $("#slider_dos").sliderResponsive({
        fadeSpeed: 300,
        autoPlay: "off",
        showArrows: "on",
        hideDots: "on"
    });

    $("#slider_tres").sliderResponsive({
        hoverZoom: "off",
        hideDots: "on"
    });

});