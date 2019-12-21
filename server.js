require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const db = require("./models");

const app = express();
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");

// const env = require('dotenv').load();

const PORT = process.env.PORT || 3000;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Handlebars

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Models
const models = require("./models");
//Synce Database
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

// Routes
const authRoute = require("./routes/auth.js")(app, passport);
app.get(authRoute);
app.use(routes);
app.get("/", function(req, res) {
  res.send("Welcome to Passport with Sequelize");
});
const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// load passport strategies
require("./config/passport.js")(passport, models.user);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
