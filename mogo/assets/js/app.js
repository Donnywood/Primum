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
        
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);    

          
    });










});