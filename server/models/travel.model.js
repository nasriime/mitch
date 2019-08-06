const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelSchema = new Schema({    
    title: String,
    agencyName: String,
    rating: Number,
    description: String,
    mealPlan: String,
    days: Number,
    ImageUrl: String
});

module.exports = mongoose.model('Travel', travelSchema);
