
//https://www.mathworks.com/help/fuzzy/fuzzy-inference-process.html
const javascriptFuzzylogic = require("javascript-fuzzylogic");
let exampleFIS =null;
let serviceGood, serviceBad,serviceExcellent,foodDelicious,foodAwful,cheapTip, averageTip, generousTip =null;
let foodVariable, serviceVariable, tipVariable =null;
//fuzzInferInit();
//getTip({service:10 , food:10})
function fuzzInferInit(){

// We start by creating our fuzzy sets (or membership functions) that will make up our variables
// How to construct fuzzy sets is dealt with below

serviceExcellent= new javascriptFuzzylogic.FuzzySet('excellent').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Gaussian,
    parameters: {
        center: 10,
        standardDeviation: 1.5,
        minValue: 0,
        maxValue: 10,
        step: 0.5,
    },
});

 serviceGood = new javascriptFuzzylogic.FuzzySet('good').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Gaussian,
    parameters: {
        center: 5,
        standardDeviation: 1.5,
        minValue: 0,
        maxValue: 10,
        step: 0.5,
    },
});

 serviceBad = new javascriptFuzzylogic.FuzzySet('bad').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Gaussian,
    parameters: {
        center: 0,
        standardDeviation: 1.5,
        minValue: 0,
        maxValue: 10,
        step: 0.5,
    },
});


foodDelicious = new javascriptFuzzylogic.FuzzySet('delicious').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Trapezoidal,
    parameters: {
        bottomLeft: 7,
        topLeft: 9,
        topRight: 10,
        bottomRight: 10,
        minValue: 0,
        maxValue: 10,
        step: 0.5,
    },
});

 
foodAwful = new javascriptFuzzylogic.FuzzySet('awful').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Trapezoidal,
    parameters: {
        bottomLeft: 0,
        topLeft: 0,
        topRight: 1,
        bottomRight: 3,
        minValue: 0,
        maxValue: 10,
        step: 0.5,
    },
});

 cheapTip = new javascriptFuzzylogic.FuzzySet('low').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Triangular,
    parameters: {
        left: 0,
        center: 5,
        right: 10,
        minValue: 0,
        maxValue: 30,
        step: 0.1,
    },
});

averageTip = new javascriptFuzzylogic.FuzzySet('average').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Triangular,
    parameters: {
        left: 10,
        center: 15,
        right: 20,
        minValue: 0,
        maxValue: 30,
        step: 0.1,
    },
});
 generousTip = new javascriptFuzzylogic.FuzzySet('high').generateMembershipValues({
    type: javascriptFuzzylogic.MembershipFunctionType.Triangular,
    parameters: {
        left: 20,
        center: 25,
        right: 30,
        minValue: 0,
        maxValue: 30,
        step: 0.1,
    },
});



}




