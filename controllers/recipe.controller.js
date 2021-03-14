const { recipeService } = require('../services');

const { createRecipe } = recipeService;

const postRecipe = async (req, res) => {
    try {
        await createRecipe();
        return res.sendStatus(201);
    } catch (e) {
        console.log(e.message);
        return res.sendStatus(500);
    }
}

module.exports = { postRecipe };
