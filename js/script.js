// script de buscar
jQuery(".top-cart > .cartToggle").click(function() {
    jQuery("#dropdown-cart").addClass("active"), jQuery(".wrapper-container").addClass("show-cart"), jQuery("body").css("overflow", "hidden")
}), jQuery(".continue-shoping a").click(function() {
    jQuery("#dropdown-cart").removeClass("active"), jQuery(".wrapper-container").removeClass("show-cart"), jQuery("body").css("overflow", "visible")
}), jQuery(".search-close").click(function() {
    jQuery("body").removeClass("active-search"), jQuery("#search-top").removeClass("active")
}), jQuery(".icon-search").click(function() {
    jQuery("body").addClass("active-search"), jQuery("#search-top").addClass("active")
}), $(document).ready(function() {
    $(".dropdown-sub").hover(function() {
        $(this).parent().addClass("has_arrow")
    }, function() {
        $(this).parent().removeClass("has_arrow")
    })
}), jQuery(document).mouseup(function(e) {
    var r = jQuery("#dropdown-cart");
    r.is(e.target) || 0 !== r.has(e.target).length || (jQuery("#dropdown-cart").removeClass("active"), jQuery(".wrapper-container").removeClass("show-cart"), jQuery("body").css("overflow", "visible"))
}), jQuery(".icon-search").click(function() {
    jQuery(".search-form").fadeIn("300"), jQuery(".overlay-search").css({
        display: "block",
        transform: "scale(1, 1)"
    })
}), jQuery(".search-close").click(function() {
    jQuery(".search-form").fadeOut("300"), jQuery(".overlay-search").removeAttr("style")
});


jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll > 150) {
        jQuery(".header").addClass("is-ticky");
        jQuery(".header-layout-02").removeClass("show-menu");
    } else {
        jQuery(" .header").removeClass("is-ticky");
        jQuery(".header-layout-02").addClass("show-menu");
    }
});

// Fin de buscar

// slide show





// fin de slide show