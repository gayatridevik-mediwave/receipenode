const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const db = require("./db");

app.use(express.json());
app.use(cors());

//get all recipes
app.get("/recipe", (req, res) => {
    const recipe = db.addRecipe();
    return res.send(recipe);
});

//get one recipe
app.get("./recipe:id", (req, res) => {
    const recipeid = req.params.id;
    const recipe = db.getOneRecipe(recipeid);
    if (!addOnemovie) {
        return res.status(404).send({
            message: `recipe ${recipeid} not found`,
        });
    }
    return res.send(recipe);
})

app.get("/", (req, res) => {
    return res.send("hi");
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        console.log(`cannot running on ${port}`);
        process.exit(1);
    }

    console.log(`server running on ${port}`);
});