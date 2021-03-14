 var { recipeDb } = require('../db');

 var { addRecipe } = recipeDb;

const createRecipe = async () => {
    try { 
        return await addRecipe();
    } catch (e) {
        throw new Error(e.message);
    };
}

module.exports = { createRecipe };

