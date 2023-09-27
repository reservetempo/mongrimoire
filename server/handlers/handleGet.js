const pool = require('../db');

const getRecipes = async (req, res) => {
    try {
        const allRecipes = await pool.query("SELECT * FROM recipes JOIN recipe_info ON recipes.recipe_id = recipe_info.id ORDER BY recipes.recipe_id ASC")
        res.status(200).json(allRecipes.rows)
    } catch (err) {
        console.log(err.message)
    }
}

const getRecipeNames = async (req, res) => {
    try {
        const recipeNames = await pool.query(
            "SELECT recipe_id, recipe_name FROM recipes ORDER BY recipes.recipe_id DESC"
        )
        res.status(200).json(recipeNames.rows)
    }
    catch (err) {
        console.log(err)
    }
}

const getRecipesBySection = async (req, res) => {
    try {
        if (req.params.id.includes("*")){
            const recipes = await pool.query(
                `SELECT recipe_id, recipe_name
                FROM recipes
                WHERE recipe_months = $1`,
                [req.params.id])
            res.status(200).json(recipes.rows)
        }
        else {
            const recipes = await pool.query(
                `SELECT recipe_id, recipe_name
                FROM recipes
                WHERE recipe_type = $1`,
                [req.params.id.toLowerCase().slice(0,-1)])
            res.status(200).json(recipes.rows)
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
const getRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await pool.query(
            "SELECT * FROM recipes JOIN recipe_info ON recipes.recipe_id = recipe_info.id WHERE recipe_id = $1", [id]
        )
        res.json(recipe.rows[0])
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    getRecipes,
    getRecipeNames,
    getRecipe,
    getRecipesBySection
};