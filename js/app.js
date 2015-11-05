$(document).ready(function(){

  //Scroll down
  $('#down-arrow').on("click", function() {
    $(this).velocity("scroll", { duration: 1500, offset: 180, easing: "easeInSine" })
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

  //scroll up image effects on hover
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


  //Adds/removes portfolio image opacity
  $('.portfolio-section').find('li').mouseenter(function(){
        $(this).siblings('li').find('img').css('opacity', '0.5');
        $(this).find('.hover-text').css('opacity', '1');
  });

  $('.portfolio-section').find('li').mouseleave(function(){
        $(this).siblings('li').find('img').css('opacity', '1');
        $(this).find('.hover-text').css('opacity', '0');
  });

  //Shake button on hover
  $('#contact-btn').mouseenter(function(){
    shake(this);
  });

  $('#portfolio-link').mouseenter(function(){
    shake(this);
  });

 
});//End document ready

//Shake effect
function shake(div){                                                                                                                                                                                            
    var interval = 100;                                                                                                 
    var distance = 10;                                                                                                  
    var times = 4;                                                                                                      

    $(div).css('position','relative');                                                                                  

    for(var iter=0;iter<(times+1);iter++){                                                                              
        $(div).animate({ 
            left:((iter%2==0 ? distance : distance*-1))
            },interval);                                   
    }//for                                                                                                              

    $(div).animate({ left: 0},interval);                                                                                

}//shake        