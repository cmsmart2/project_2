const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

// axios
//     .get("/https://www.thecocktaildb.com/api/json/v2/9973533/search.php")
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// request.open(
//     "GET",
//     "https://www.thecocktaildb.com/api/json/v2/9973533/search.php",
//     true
// );
// request.onload = function (response) {
//     // Begin accessing JSON data here
//     console.log(this.response);
//     var data = JSON.parse(this.response);

//     if (request.status >= 200 && request.status < 400) {
//         data.forEach(cocktail => {
//             const card = document.createElement("div");
//             card.setAttribute("class", "card");
//             const h1 = document.createElement("h1");
//             h1.textContent = cocktail;

//             const p = document.createElement("p");
//             cocktail.description = cocktail.description.substring(0, 300);
//             p.textContent = `${cocktail.description}...`;

//             container.appendChild(card);
//             card.appendChild(h1);
//             card.appendChild(p);

//             console.log();
//         });
//     } else {
//         const errorMessage = document.createElement("marquee");
//         errorMessage.textContent = "shit.";
//         app.appendChild(errorMessage);
//     }
// };

// request.send();

// // var cocktail = $("#cocktailType :selected").text();
// // var cocktailType = cocktail.toLowerCase();
// // var APIKey = "9973533";
// // var queryURL =
// //     "https://www.thecocktaildb.com/api/json/v2/9973533/search.php" + cocktailType + "?s=" + "&api_key=" + APIKey;
// // $("#cocktail").val("");
// // $.ajax({
// //     url: queryURL,
// //     method: "GET"
// // }).then(function (response) {
// //     console.log(response);
// //     var resultLength = response.data.length;
// //     console.log(resultLength);
// // });
