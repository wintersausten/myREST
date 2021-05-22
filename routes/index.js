var express = require('express');
var { recipe } = require('../controllers');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Recipe CRUD */
router.post('/recipe', recipe.postRecipe); /* Add recipe */
router.get('/recipe', recipe.getAllRecipes); /* Get all recipes */
router.get('/recipe/:name', recipe.getRecipe); /* Get single recipe by name */
router.put('/recipe/:name', recipe.updateRecipe); /* Update recipe by name */
router.delete('/recipe/:name', recipe.deleteRecipe); /* Delete recipe by name */


module.exports = router;
