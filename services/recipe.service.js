 var { Recipe } = require('../models');

const createRecipe = async (body) => {
    try { 
        var recipe = new Recipe( {
            name: body.name,
            author: body.author,
            servingSize: body.servingSize,
        });
        var result = await recipe.save();
    } catch (e) {
        throw new Error(e.message);
    };
    return;
}

module.exports = { createRecipe };

