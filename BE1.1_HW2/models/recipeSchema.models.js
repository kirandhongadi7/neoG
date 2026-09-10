const mongoose = require("mongoose")


const recipeSchema = new mongoose.Schema({
    imgURL: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    cookingTime: {
        type:Number,
        required: true
    },
    ingredients:{
        type:[String],
        required: true
    },
    directions:{
        type:[String],
        required: true
    },
    note: String

},
{
    timestamps: true
}
)
const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe