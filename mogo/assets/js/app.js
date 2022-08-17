$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset =  $(window).scrollTop();



    /* FIxed Header */
    checkScroll(scrolloffset)    

    $(window).on("scroll",function() {
        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);
    });


    function checkScroll(scrolloffset) {    
        if( scrolloffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");  
        }
    }


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");    
        

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);    
      
    });

    /* Menu nav toggle */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    })



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");    
        $(blockId).slideToggle();

    })


    /* Slider */
    $("[data-slider]").stick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });










});