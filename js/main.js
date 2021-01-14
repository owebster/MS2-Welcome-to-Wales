//smooth scrolling for safari
$(document).ready(function(){
    $('a').on('click', function(event){
      if(this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

//back to top button

  mybutton = document.getElementById("myBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function(){scrollFunction()};

      function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
      }

      
      function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

      $('#myBtn').on('click', function(){
        if(this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
        topFunction();
      });

//family card expanding button
$("#castle-txt-btn").click(function(){
    $(".castle-txt").slideToggle();
});

$("#food-txt-btn").click(function(){
    $(".food-txt").slideToggle();
});

$("#family-txt-btn").click(function(){
    $(".family-txt-section").slideToggle();
});

$("#mountains-txt-btn").click(function(){
    $(".mountains-txt").slideToggle();
});