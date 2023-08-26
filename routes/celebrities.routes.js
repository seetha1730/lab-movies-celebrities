// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require('../models/Celebrity.model')

//Create celebrety route
router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/new-celebrity');
  });
router.post("/celebrities/create", (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({  name, occupation, catchPhrase })
        .then(newCelebrity => {
            console.log(`New celebrity Created: ${newCelebrity.name}`)
            res.redirect('/celebrities')
        })

})


/* GET celebrities page */
router.get("/celebrities", (req, res, next) => {
    
    res.render("celebrities/celebrities");
  });

// all your routes here

module.exports = router;