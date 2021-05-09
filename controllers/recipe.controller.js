const { recipeService } = require('../services');

const { createRecipe } = recipeService;

const postRecipe = async (req, res, next) => {
    try {
        await createRecipe(req.body);
        res.sendStatus(201);
       // next();
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = { postRecipe };
