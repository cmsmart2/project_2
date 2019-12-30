const axios = require("axios");
const APIKey = process.env.COCKTAILDB_API_KEY;

module.exports = {
    search: function ({ term = null, type = null }) {
        var queryURL =
            "https://www.thecocktaildb.com/api/json/v2/9973533/search.php" +
            alcoholType +
            "?cocktail=" +
            drinkName +
            "&api_key=" +
            APIKey;

        return axios.get(queryURL);
    },
    searchCocktail: function (cocktail) {
        var queryURL =
            "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" +
            cocktail +
            "&api_key=" +
            APIKey;
        return axios.get(queryURL);

        // console.log(cocktail, "cocktail");
    }
    // random: () =>
};

//base template with the api key; create instance axios.
