const express = require('express');
const router = express.Router();
var recipes = require('./../schemaModels/recipes');

/* get recipes list. */
router.get('/getRecipeDetails', (req, res, next) => {
    recipes.find((err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

/* post recipes data. */
router.post('/saveRecipeDetails', (req, res, next) => {
    var recipeObject = {
        dishName: req.body.dishName,
        noOfPeopleSuitable: req.body.noOfPeopleSuitable,
        isVegetarian: req.body.isVegetarian,
        ingredients: req.body.ingredients,
        cookingInstructions: req.body.cookingInstructions,
        dateTime: req.body.dateTime
    };
    recipes.create(recipeObject, (err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

/* patch or update recipes data. */
router.patch('/updateRecipeDetails', (req, res, next) => {
    const _id = req.body._id;
    var recipeObject = {
        _id: req.body._id,
        dishName: req.body.dishName,
        noOfPeopleSuitable: req.body.noOfPeopleSuitable,
        isVegetarian: req.body.isVegetarian,
        ingredients: req.body.ingredients,
        cookingInstructions: req.body.cookingInstructions,
        dateTime: req.body.dateTime
    };
    recipes.findByIdAndUpdate(_id, recipeObject, (err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

/* delete user from recipes list. */
router.delete('/deleteRecipeDetails', (req, res, next) => {
    recipes.remove((err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

module.exports = router;
