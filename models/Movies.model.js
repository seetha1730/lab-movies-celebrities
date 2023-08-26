//  Add your code here
const { Schema, model } = require("mongoose");

const MoviesSchema = new Schema(
    {
        title:{type:String},
        genre: {type:String},
        plot: {type:String},
        cast:{type:Schema.Types.ObjectId, ref:'Celebrity'}
       
    },
    {
        timestamps: true
    }
  
);

const Movie = model("Movie", MoviesSchema);

module.exports = Movie;
