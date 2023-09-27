const pool = require('../db');

const handleSearch = async (req, res) => {
    console.log(req.query)
    try {
        const search = await pool.query(
            `WITH unnested_ingredients 
            AS (
                SELECT r.id, unnest(r.section1_ing) AS ingredient
                FROM recipe_info r
              )
              SELECT r.id, rn.recipe_name
              FROM unnested_ingredients r
              JOIN recipes rn ON r.id = rn.recipe_id
              WHERE to_tsvector('english', r.ingredient) @@ websearch_to_tsquery('english', $1)`
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

