const recipe = [
    {
        id: "101",
        recpname: "chicken briyani",
        foodType: "non-veg",
        ingredients: "hi",
        stepstoPrepare: "hello",
        images: {
            url: "./images/",
            altInfo: "Biriyani Images",
        },
    },
    {
        id: "102",
        recpname: "Pasta",
        foodType: "veg",
        ingredients: "hi",
        stepstoPrepare: "hello",
        images: {
            url: "./images/",
            altInfo: "pasta Images",
        },
    },
    {
        id: "103",
        recpname: "Vegtable Soup",
        foodType: "veg",
        ingredients: "hi",
        stepstoPrepare: "hello",
        images: {
            url: "./images/",
            altInfo: "soup Images",
        },
    }
];

const addRecipe = (payload) => {
    const add = {
        // id: new Date().getTime(),
        ...payload,
        // recpname : payload.recpname,
        // foodType : payload.foodType,
        // ingredients : payload.ingredients,
        // stepstoPrepare : payload.stepstoPrepare,
        // images: {
        //     payload.url,
        //     payload.altInfo,
        // },
    }
    recipe.push(add);
    return recipe;
}

const addOneRecipe = (payload) => {
    const addOne = {
        ...payload,
    }
}

module.exports = {
    recipe,
    addRecipe,
    addOneRecipe,
}