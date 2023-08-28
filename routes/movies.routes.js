// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require('../models/Movies.model')
const Celebrity = require('../models/Celebrity.model')



/* GET Adding New Movies  */
router.get('/movies/create', (req, res) => {
  Celebrity.find().then(getcast =>{
  res.render('movies/new-movie',{getcast});
});
});

/* POST movie create page */
router.post("/movies/create", (req, res, next) => {

  const { title, genre, plot ,cast } = req.body

  Movie.create({ title, genre, plot ,cast })
      .then(newMovie => {
        console.log(newMovie)
          console.log(`New celebrity Created: ${newMovie.title}`)
          res.redirect('/movies')
      })

      

})

//Iteration #7: Listing Our Movies
// GET route to display all the movies
router.get("/movies", (req, res, next) => {
  Movie.find().then(movies =>{
      res.render("movies/movies",{movies});
  })
  
});

// Iteration 8 The Movie Details Page
router.get('/movies/:id', (req,res) => {
  const movieId = req.params.id;

  Movie.findById(movieId).populate('cast').then(movie =>{

    res.render("movies/movie-details",{movie});
})
});

//Iteration 9 The Deleting Movies movie Page


router.post('/movies/:id/delete', (req,res) => {
  const {id} = req.params;
  Movie.findByIdAndRemove(id).then(movie =>{
   res.redirect("/movies");
}) .catch((err) => {console.log(err)});
});
//Iteration 10 Editing Movies

router.get('/movies/:id/edit', (req,res) => {
  const {id} = req.params;
    Movie.findById(id)
    .populate("cast")
    .then((movie) => {
      console.log(movie)
        Celebrity.find().then((allcelebrities) => {
       
          console.log(allcelebrities)
          res.render("movies/edit-movie",{ movie:movie, allCelebrities: allcelebrities})
   
          })
        
        })
       
    
      
  });
  router.post('/movies/:id/edit', (req,res) => {
    const {id} = req.params;
    const{title,genre,plot,cast} = req.body
    console.log(req.body)
      Movie.findByIdAndUpdate(id,{title,genre,plot,cast})
     
      .then((movie) => {
         res.redirect(`/movies/${id}`);
      })
        
    });
  // Movie.findById(id)
  //   .populate("cast")
  //   .then((movie) => {
  //     return Celebrity.find();
  //   })
  //   .then((celebrities) => {
   
  //     console.log(celebrities)
  //   })
  //  .catch((err) => {console.log(err)});

  


router.post('/movies/:id', (req,res) => {
  const {id} = req.params;
 
  Movie.findByIdAndUpdate(id)
    .then((movie) => {
  
      res.render(`movies/movie-details`, movie);
    })
   
   .catch((err) => {console.log(err)});
});

module.exports = router;