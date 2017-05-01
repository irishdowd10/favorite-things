$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {

    //debugger;
    var nameInput = $("input#name").val();

    var favoriteOne = $("input#favoriteOne").val();
    var favoriteTwo =$("input#favoriteTwo").val();
    var favoriteThree= $("input#favoriteThree").val();

    var arrayFavorite = [favoriteOne, favoriteTwo, favoriteThree];
    arrayFavorite.forEach(function(item) {
      $("#unorderd").append("<li>" + item + "</li>");
    });

    $(".name").text(nameInput);
    $("#list").show();

    event.preventDefault();
  });
});
