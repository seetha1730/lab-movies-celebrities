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


/* GET All celebrities  */
router.get("/celebrities", (req, res, next) => {
    Celebrity.find().then(celebrities =>{
        res.render("celebrities/celebrities",{celebrities});
    })
    
  });

  router.get('/celebrities/:id', (req,res) => {
    const celebrityId = req.params.id;
  
    Movie.findById(celebrityId).then(movie =>{
  
      res.render("celebrities/celebrity-details",{celebrityId});
  })
  });

// all your routes here

module.exports = router;