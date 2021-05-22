var { Recipe } = require("../models");

const createRecipe = async (body) => {
  var recipe = new Recipe({
    name: body.name,
    author: body.author,
    servingSize: body.servingSize,
    sourceURL: body.sourceURL,
    ingredients: body.ingredients,
    steps: body.steps,
  });
  var result = await recipe.save(function (err) {
    if (err) {
      throw new Error(err.message);
    }
  });
};

const getAllRecipes = async () => {
  return Recipe.find(function (err) {
    if (err) {
      throw new Error(err.message);
    }
  });
};

const getRecipe = async (name) => {
  return Recipe.findOne({ name: name }, function (err) {
    if (err) {
      throw new Error(err.message);
    }
  });
};

const deleteRecipe = async (name) => {
  Recipe.deleteOne({ name: name }, function (err, data) {
    if (err) {
      throw new Error(err.message);
    }
  });
};

const updateRecipe = async (name, body) => {
  return Recipe.updateOne({ name: name }, body, function (err) {
    if (err) {
      throw new Error(err.message);
    }
  });
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
};
