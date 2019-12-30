const Router = require("express").Router;
const exampleRoutes = require("./examples");
const cocktail = require("../services/cocktail");
const apiRoutes = Router();

apiRoutes.use("/api", exampleRoutes);

module.exports = apiRoutes;

//post-model sequelzie 12.

apiRoutes.post("/searchCocktail", async (req, res) => {
    console.log(req.body.cocktail);
    let cocktailResponse = await cocktail.searchCocktail(req.body.cocktail);
    // console.log(cocktailResponse.data);
    res.json(cocktailResponse.data);
});
