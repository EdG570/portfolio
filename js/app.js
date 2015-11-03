$(document).ready(function(){
  $('#down-arrow').on("click", function() {
    $(this).velocity("scroll", { duration: 1500, offset: 180, easing: "easeInSine" })
  });

  $('#down-arrow').on('hover', function(){
    $(this).velocity({
        translateY: "10px"
      }, {
        loop: true
      }).velocity("reverse");
    });
});