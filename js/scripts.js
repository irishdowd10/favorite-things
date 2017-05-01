$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {

    var icecreams = ["favoriteOne", "favoriteTwo", "favoriteThree"]
    var nameInput = $("input#name").val();

    icecreams.forEach(function(icecream) {
      var userInput = $("input#" + icecream).val();
      $("#unorderd").append("<li>" + userInput + "</li>");
    });

    $(".name").text(nameInput);
    $("#list").show();

    event.preventDefault();
  });
});
