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
 // The celebrities Details Page
  router.get('/celebrities/:id', (req,res) => {
    const celebrityId = req.params.id;
  
    Celebrity.findById(celebrityId).then(celebrity =>{
  
      res.render("celebrities/celebrity-details",{celebrity});
  })
  });
  //The Deleting celebrities Page
  router.post('/celebrities/:id/delete', (req,res) => {
    const {id} = req.params;
    Celebrity.findByIdAndRemove(id).then(celebrity =>{
     res.redirect("/celebrities");
  }) .catch((err) => {console.log(err)});
  });
  //Editing celebrities

router.get('/celebrities/:id/edit', (req,res) => {
  const {id} = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
       res.render("celebrities/edit-celebrity",{celebrity});
    })
      
  });

  router.post('/celebrities/:id/edit', (req,res) => {
    const {id} = req.params;
    const { name, occupation, catchPhrase } = req.body;
   Celebrity.findByIdAndUpdate(id,{name, occupation, catchPhrase}).then((celebrity)=>{
    res.render("celebrities/celebrity-details",{celebrity})
   })
        
    });
// all your routes here

module.exports = router;