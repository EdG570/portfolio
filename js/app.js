$(document).ready(function(){

  //Scroll down
  $('#down-arrow').on("click", function() {
    $(this).velocity("scroll", { duration: 1500, offset: 170, easing: "easeInSine" })
  });

  $('#down-arrow').mouseenter(function(){
    $(this).velocity({
        top: "+=5"
      });
    });

  $('#down-arrow').mouseleave(function(){
    $(this).velocity({
        top: "-=5"
    });
  });

  //Scroll Up
  $('.arrow-container').on("click", function() {

    $(this).velocity("scroll", { duration: 2500, offset: -2570, easing: "easeInSine"})
  });

  $('.arrow-container').mouseenter(function(){
    $(this).velocity({
        top: "-=5"
      })

    $(this).css('border', '3px solid #50E3C2');
    $(this).css('border-radius', '50%')
  });

  $('.arrow-container').mouseleave(function(){
    $(this).velocity({
        top: "+=5"
    });

    $(this).css('border', 'none');
  });

  $('.portfolio-section').find('img').mouseenter(function(){
      $(this).parent().parent().parent().siblings().find('img').css('opacity', '0.2');
  });

  $('.portfolio-section').find('img').mouseleave(function(){
      $(this).parent().parent().parent().siblings().find('img').css('opacity', '1');
  });

 
});//End document ready