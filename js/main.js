//smoothscrolling on safari
(function($) {
    $.fn.SmoothAnchors = function() {

        function scrollBodyTo(destination, hash) {

            // Change the hash first, then do the scrolling. This retains the standard functionality of the back/forward buttons.
            var scrollmem = $(document).scrollTop();
            window.location.hash = hash;
            $(document).scrollTop(scrollmem);
            $("html,body").animate({
                scrollTop: destination
            }, 200);

        }

        if (typeof $().on == "function") {
            $(document).on('click', 'a[href^="#"]', function() {

                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
        else {
            $('a[href^="#"]').click(function() {
                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
    };
})(jQuery);

$(document).ready(function() {
    $().SmoothAnchors();
});

//back to top button
mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

//search field (https://tripadvisor.co.uk/Search?q=${userInput})
    searchButton = document.getElementById("searchbtn")
    searchBar = document.getElementById("searchbar")


//family card expanding button
$("#castle-txt-btn").click(function(){
    $(".castle-txt").slideToggle();
});

$("#food-txt-btn").click(function(){
    $(".food-txt").slideToggle();
});

$("#family-txt-btn").click(function(){
    $(".family-txt").slideToggle();
});

$("#mountains-txt-btn").click(function(){
    $(".mountains-txt").slideToggle();
});