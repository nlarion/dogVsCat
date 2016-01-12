$(document).ready(function() {
  $("button").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
  });
  $("h2#dogPic").click(function(){
    $("button#dogButton").after("<img src=\"images/dog.jpg\" alt=\"\" />");
    $(".col-sm-6").children("img").first().click(function(){
      $(this).remove();
    });
  });

  $("h2#catPic").click(function(){
    $("button#catButton").after("<img src=\"images/cat.jpg\" alt=\"\" />");
    $(".col-sm-6").children("img").first().click(function(){
      $(this).remove();
    });
  });


});
