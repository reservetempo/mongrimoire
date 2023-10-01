const pool = require('../db');

const handleSearch = async (req, res) => {
    console.log(req.query)
    try {
        const search = await pool.query(
            `SELECT recipe_info.id, recipes.recipe_name, recipes.recipe_type,
            ts_rank(recipe_info.json_vector, to_tsquery('english', $1)) AS rank
            FROM recipe_info INNER JOIN recipes 
            ON recipe_info.id = recipes.recipe_id
            WHERE recipe_info.json_vector @@ to_tsquery('english', $1)
            ORDER BY rank DESC LIMIT 12`
        ,[req.query.searchValue])
        console.log(search.rows)
        res.status(200).json({status: 200, data: search.rows })
    }

    catch (err) {
        console.log(err);
        throw err;
    }
}
module.exports = { handleSearch };

