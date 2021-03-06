require("dotenv").config();
var axios = require("axios");

module.exports = function (app) {
    app.get("/api/search", function (req, res) {
        console.log(req.query.search);
        axios
            .get(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=" + req.query.search
            )
            .then(function (response) {
                var results = response.data.meals;
                if (results) {
                    res.render('search', { recipes: results });
                } else {
                    res.render('noSearchResults');
                }
            });
    });
}