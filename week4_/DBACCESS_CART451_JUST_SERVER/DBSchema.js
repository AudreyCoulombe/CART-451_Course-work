const mongoose = require('mongoose');
const fitBitSchema = new mongoose.Schema({
    Id:String,
    ActivityDate:String,
    TotalSteps:String,
    TotalDistance:String,
    TrackerDistance:String,
    LoggedActivitiesDistance:String,
    VeryActiveDistance:String,
    ModeratelyActiveDistance:String,
    LightActiveDistance:String,
    SedentaryActiveDistance:String,
    VeryActiveMinutes:String,
    FairlyActiveMinutes:String,
    LightlyActiveMinutes:String,
    SedentaryMinutes:String,
    Calories:String
});

//const fitBitDataModel = mongoose.model("Fitbit_collection", fitBitSchema, fitbit_collection);
const fitBitDataModel = mongoose.model("Fitbit_collection", fitBitSchema, "fitbit_collection");
module.exports = fitBitDataModel;
