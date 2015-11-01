$(document).ready(function(){
  $('#down-arrow').on("click", function() {
    $(this).velocity("scroll", { duration: 1500, offset: 180, easing: "easeInSine" })
    
  });
});