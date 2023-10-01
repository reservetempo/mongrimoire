const pool = require('../db');

const submitRecipe = async(req, res) => {
    try {
        console.log(req.body)

        const { recipe_months, recipe_name, recipe_type } = req.body.recipe;
        const recipe = await pool.query(
            'INSERT INTO recipes (recipe_months, recipe_name, recipe_type) VALUES($1, $2, $3) RETURNING *',
             [recipe_months, recipe_name, recipe_type]);
        const recipe_id = recipe.rows[0].recipe_id;

        // insert all the recipe info data with same id as recipe_id
        const { recipe_author, drink_pairing, section1_name, section1_ing, section1_prep, section2_name, section2_ing, section2_prep, section3_name, section3_ing, section3_prep 
        } = req.body.recipeInfo;
        const recipe_info = await pool.query(
            'INSERT INTO recipe_info (id, recipe_author, drink_pairing, section1_name, section1_ing, section1_prep, section2_name, section2_ing, section2_prep, section3_name, section3_ing, section3_prep) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
            [recipe_id, recipe_author, drink_pairing, section1_name, section1_ing, section1_prep, section2_name, section2_ing, section2_prep, section3_name, section3_ing, section3_prep]
        );

        res.status(200).json({status: 200, data: [recipe.rows[0].recipe, recipe_info.rows[0]]})
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');

    }
}


const submitUpdateRecipe = async (req, res) => {
    console.log("PUT REQUEST")
    try {
        const { id } = req.params;
        // update recipe
        const { recipe_months, recipe_name, recipe_type } = req.body.recipe;
        const updateRecipe = await pool.query(
            'UPDATE recipes SET recipe_months = $2, recipe_name = $3, recipe_type = $4 WHERE recipe_id = $1',
             [parseInt(id), recipe_months, recipe_name, recipe_type]);
        // update recipe info
        const { recipe_author, drink_pairing, section1_name, section1_ing, section1_prep, section2_name, section2_ing, section2_prep, section3_name, section3_ing, section3_prep 
        } = req.body.recipeInfo;
        const updateRecipeInfo = await pool.query(
            'UPDATE recipe_info SET recipe_author = $2, drink_pairing = $3, section1_name = $4, section1_ing = $5, section1_prep = $6, section2_name = $7, section2_ing = $8, section2_prep = $9, section3_name = $10, section3_ing = $11, section3_prep = $12 WHERE id = $1',
            [parseInt(id), recipe_author, drink_pairing, section1_name, section1_ing, section1_prep, section2_name, section2_ing, section2_prep, section3_name, section3_ing, section3_prep]
        ); 
        res.status(200).json({status: 200, message: "Successful update!"})
    } catch (err) {
        console.log(err.message)
    }
}



module.exports = { submitRecipe, submitUpdateRecipe }