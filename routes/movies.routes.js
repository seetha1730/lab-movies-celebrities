// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();


/* GET movie page */
router.get("/movies", (req, res, next) => {
    res.render("movies/movies");
  });

// all your routes here

module.exports = router;