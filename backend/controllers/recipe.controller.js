const { recipeService } = require("../services");

//const { createRecipe, getAllRecipes, getRecipe, deleteRecipe, updateRecipe } = recipeService;

const postRecipe = async (req, res, next) => {
  try {
    if (!req.body) res.sendStatus(400);
    await recipeService.createRecipe(req.body);
    res.sendStatus(201);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const getAllRecipes = async (req, res, next) => {
  try {
    const allRecipes = await recipeService.getAllRecipes();
    res.status(200).send(allRecipes);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const getRecipe = async (req, res, next) => {
  try {
    if (!req.params.name) res.sendStatus(400);
    const recipe = await recipeService.getRecipe(req.params.name);
    console.log(recipe);
    res.status(200).send(recipe);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const deleteRecipe = async (req, res, next) => {
  try {
    if (!req.params.name) res.sendStatus(400);
    await recipeService.deleteRecipe(req.params.name);
    res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const updateRecipe = async (req, res, next) => {
  try {
    if (!req.params.name) res.sendStatus(400);
    if (!req.body) res.sendStatus(400);
    await recipeService.updateRecipe(req.params.name, req.body);
    res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};
module.exports = {
  postRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
};
