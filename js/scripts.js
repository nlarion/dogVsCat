$(document).ready(function() {
  $("button#catButton, button#dogButton").click(function() {
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
    $("#attracDIV").children("img").first().click(function(){
      $(this).remove();
    });
  });

  $(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});


});
