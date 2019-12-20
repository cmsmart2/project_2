function addFavArr() {
  var addToFavoriteArr = [];
  return addToFavoriteArr;
}

function addAlcoholToFavorite() {
  // addToFavorite = addFavArr();
  $(".favoriteAlcohol").click(function(e) {
    // localStorage.clear();
    $(this).hide();
    $(this)
      .parent()
      .find(".unfavoriteAlcohol")
      .show();

    var selectedAlcohol = $(this)
      .parent()
      .attr("name");
    console.log(selectedAlcohol);
    addToFavorite.push(selectedAlcohol);
    console.log("favorites are: " + addToFavorite);
    localStorage.setItem("totalFavorites", JSON.stringify(addToFavorite));
    e.preventDefault();
    var storedFavs = JSON.parse(localStorage.getItem("totalFavorites"));
    console.log("stored favs to show: " + storedFavs);
    for (var i = 0; i < storedFavs.length; i++) {
      var showFavs = $(
        `<div class = "myFavs w3-card my-2 pl-2 w3-lime"><h3>${storedFavs[i]}</h3></div>`
      );
      showFavs.addClass(storedFavs[i]);
      $("#displayFavoriteHere").append(showFavs);
      showFavs.attr("favoriteName", storedFavs[i]);
    }
  });
  $(".unfavoriteAlcohol").click(function(e) {
    $(this).hide();
    $(this)
      .parent()
      .find(".favoriteAlcohol")
      .show();

    var selectedAlcohol = $(this)
      .parent()
      .attr("name");
    console.log(selectedAlcohol);

    addToFavorite.splice(addToFavorite.indexOf(selectedAlcohol), 1);
    console.log("favorites are: " + addToFavorite);
    localStorage.setItem("totalFavorites", JSON.stringify(addToFavorite));
    var storedFavs = JSON.parse(localStorage.getItem("totalFavorites"));
    console.log("Remaining Favs are:  " + storedFavs);
    e.preventDefault();
  });
}

$("#favoriteSection").click(function(e) {
  e.preventDefault();
  $("#displayFavoriteHere").empty();
  var storedFavs = JSON.parse(localStorage.getItem("totalFavorites"));
  if (storedFavs === null) {
  } else {
    for (var i = 0; i < storedFavs.length; i++) {
      var showFavs = $(
        `<div class = "myFavs w3-card my-2 pl-2 w3-lime"><h3>${storedFavs[i]}</h3></div>`
      );
      showFavs.addClass(storedFavs[i]);
      $("#displayFavoriteHere").append(showFavs);
      showFavs.attr("favoriteName", storedFavs[i]);
    }
    $("#clearAll").click(function(e) {
      e.preventDefault();

      $("#displayFavoriteHere").empty();
      localStorage.clear();
      addToFavorite = [];
      console.log("Array now has: " + addFavArr());
      $(".result_description")
        .next()
        .find(".unfavoriteAlcohol")
        .hide();
      $(".result_description")
        .next()
        .find(".favoriteAlcohol")
        .show();
    });
  }
});
