var express = require('express');
var { recipe } = require('../controllers');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Recipe CRUD */
router.post('/recipe', recipe.postRecipe);

module.exports = router;
