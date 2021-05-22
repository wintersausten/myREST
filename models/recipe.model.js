var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    unit: String,
    optional: Boolean
});

var recipeSchema = new mongoose.Schema({
    name: String,
    author: String,
    sourceURL: String,
    servingSize: Number,
    ingredients: [ ingredientSchema ],
    steps: [ String ],
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

