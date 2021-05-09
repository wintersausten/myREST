var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    name: String,
    author: String,
    servingSize: Number,
    //ingredientList: [String],
    //stepList: [String]
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

