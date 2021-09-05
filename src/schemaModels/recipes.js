const mongoose = require('mongoose');

const recipesSchema = mongoose.Schema({
    dishName: { type: String, required: true },
    isVegetarian: { type: Boolean, required: true },
    noOfPeopleSuitable: { type: Number, required: true },
    ingredients: { type: String, required: true },
    cookingInstructions: { type: String, required: true },
    dateTime: { type: Date, required: true }
});

recipesSchema.index({ dishName: 1 }, { unique: true });
const recipes = mongoose.model('recipes', recipesSchema);
module.exports = recipes;