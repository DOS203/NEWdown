const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    items: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }

});

mongoose.model('recipes', RecipeSchema);