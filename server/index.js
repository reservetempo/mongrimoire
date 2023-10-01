
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const dotenv = require("dotenv");
dotenv.config();
const { getRecipe, getRecipeNames, getRecipesBySection } = require('./handlers/handleGet');
const { submitRecipe, submitUpdateRecipe } = require('./handlers/handleSubmit');
const { handleSearch } = require('./handlers/handleSearch');


//middleware
app.use(cors());
app.use(express.json()); 

//ROUTES

//create recipe
app.post("/recipes", submitRecipe)

// handle search
app.get("/search", handleSearch)

// update recipe 
app.put("/recipes/:id", submitUpdateRecipe)

//get recipe names by section
app.get("/recipes/section/:id", getRecipesBySection)

// get all recipe names
app.get("/recipes/names", getRecipeNames)

//get a recipe
app.get("/recipes/:id", getRecipe)

app.get("/*", (req, res) => {
    console.log(req.query)
    res.status(400).json({status: 400, message: "No server endpoint here"})
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
})