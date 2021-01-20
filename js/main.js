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
  $("#castle-txt-btn").toggleClass('castle-txt');
  if($("#castle-txt-btn").hasClass('castle-txt')){
    $("#castle-txt-btn").text('show less').css('background-color', '#03A943');
    $(".castle-txt").slideDown(900);
  } else {
    $("#castle-txt-btn").text('show more').css('background-color', '#D50130');
    $(".castle-txt").slideUp(900);
  }
});

$("#food-txt-btn").click(function(){
  $("#food-txt-btn").toggleClass('food-txt');
  if($("#food-txt-btn").hasClass('food-txt')){
    $("#food-txt-btn").text('show less').css('background-color', '#03A943');
    $(".food-txt").slideDown(900);
  } else {
    $("#food-txt-btn").text('show more').css('background-color', '#D50130');
    $(".food-txt").slideUp(900);
  }
});

$("#family-txt-btn").click(function(){
  $("#family-txt-btn").toggleClass('family-txt-section');
  if($("#family-txt-btn").hasClass('family-txt-section')){
    $("#family-txt-btn").text('show less').css('background-color', '#03A943');
    $(".family-txt-section").slideDown(900);
  } else {
    $("#family-txt-btn").text('show more').css('background-color', '#D50130');
    $(".family-txt-section").slideUp(900);
  }
});

$("#mountains-txt-btn").click(function(){
  $("#mountains-txt-btn").toggleClass('mountains-txt');
  if($("#mountains-txt-btn").hasClass('mountains-txt')){
    $("#mountains-txt-btn").text('show less').css('background-color', '#03A943');
    $(".mountains-txt").slideDown(900);
  } else {
    $("#mountains-txt-btn").text('show more').css('background-color', '#D50130');
    $(".mountains-txt").slideUp(900);
  }
});