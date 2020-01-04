// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },

  searchCoctails: function() {
    var alcohol = $("#alcoholType :selected").text();
    var alcoholType = alcohol.toLowerCase();
    var APIKey = "9973533";
    var drinkName = $("#drinkName").val();
    var queryURL =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;

    return $.ajax({
      url: queryURL,
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

$("#searchButton").click(function() {
  refreshCocktails();
});

// refreshExamples gets new examples from the db and repopulates the list
var refreshCocktails = function() {
  API.searchCoctails().then(function(data) {
    $("#drinkImages").empty();

    data.drinks.forEach(i => {
      var image = $(
        `<div>
          <p>${i.strDrink}</p>
          <img src="${i.strDrinkThumb}" title="${i.strDrink}" />
          <button class="pure-button" onclick="window.open('https://www.thecocktaildb.com/drink.php?c=${i.idDrink}', '_blank');">View Recipe</button>
          <button class="pure-button">Favorite</button>
          
          </div>
          `
      );
      $("#drinkImages").append(image);
    });
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
