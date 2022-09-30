const mongoose = require('mongoose');
const fitBitSchema = new mongoose.Schema({
    Id:Number,
    ActivityDate:Number,
    TotalSteps:Number,
    TotalDistance:Number,
    TrackerDistance:Number,
    LoggedActivitiesDistance:Number,
    VeryActiveDistance:Number,
    ModeratelyActiveDistance:Number,
    LightActiveDistance:Number,
    SedentaryActiveDistance:Number,
    VeryActiveMinutes:Number,
    FairlyActiveMinutes:Number,
    LightlyActiveMinutes:Number,
    SedentaryMinutes:Number,
    Calories:Number
});

const fitBitDataModel = mongoose.model("fitbit_collection", fitBitSchema, fitbit_collection);
module.exports = fitBitDataModel;
