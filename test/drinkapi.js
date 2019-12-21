var addToFavorite = [];
$("#btn").on("click", function(event) {
  console.log("favorites on search click: " + addToFavorite);
  $("#status").text("");
  $("#loading")
    .show(1)
    .delay(1000)
    .hide(1);
  $(".col-sm-8").empty();
  event.preventDefault();

  var drinkName = getAbbr();
  var alcohol = $("#alcoholType :selected").text();
  var alcoholType = alcohol.toLowerCase();
  var APIKey = "9973533";
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v2/9973533/search.php" +
    alcoholType +
    "?ingredients=" +
    drinkName +
    "&api_key=" +
    APIKey;

  $("#alcohol").val("");
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var resultLength = response.data.length;
    console.log(resultLength);

    for (var i = 0; i < resultLength; i++) {
      if (alcoholType === "alcohol") {
        var sectionDiv = $("<div class='card_content'>");
        // designation
        var responseFullName = response.data[i].title;
        // console.log(responseFullName);
        sectionDiv.attr("name", responseFullName);
        // var cardName = $(
        //   "<div class='card mb-2 result_description w3-text-khaki'>"
        // );
        // var cardBody = $("<div class='card-body bg-dark p-1 my-auto'>");
        // var cardContent = $(
        //   "<h4 class=' ml-3 my-auto'>" + responseFullName + "</h4>"
        // );
        // search Button
        // var favoriteBtn = $(
        //   "<button type=\"button\" class=\" pure-button\">&#9733; Add to Favorite </button>"
        // );
        // unfavorite the alcohol
        // var unfavorite = $(
        //   "<button type=\"button\" class=\" unfavoriteAlcohol btn btn-danger float-right mr-2 mt-2\">Remove From Favorites </button>"
        // );
      }
    }
  });
});

//search cocktail by name, first letter, indgredient, random cocktail,
