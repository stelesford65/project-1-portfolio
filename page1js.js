$(document).ready(function(){
    $("#div1").fadeIn(2000);
    $("#div2").fadeIn(2000);
  });

  $(function() {
   $(".toggle").on("click", function(){
   if($(".item").hasClass("active")){
       $(".item").removeClass("active");
   }
   else{
    $(".item").addClass("active");
   }

})   
});