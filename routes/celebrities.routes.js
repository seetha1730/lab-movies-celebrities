// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();


/* GET home page */
router.get("/celebrities", (req, res, next) => {
    res.render("celebrities");
  });

// all your routes here

module.exports = router;