//4-
let petName = max

//1-Let’s create a simple module. A module which ultimately will simply return an object. Create a file called testModule.js in your project directory. Add the following code:
module.exports.name = function() {
    return "Sabine"; //will write in terminal
}

//3-
module.exports.age = function() {
    return "29 (really)";
}
//4 function that passe parameters
module.exports.setPetName = function(inComing) {
    petName = inComing; 

}

//5 - get pet name
module.exports.getPetName = function() {
    appendPetName(); //to make public?
    return petName;
    }
//6
    module.exports.setPetName = function(inComing) {
        petName = inComing;
        appendPetName();
        }
         
        module.exports.getPetName = function() {
            return petName;
        }
         
        /** private **/
        function appendPetName(){
          petName = petName +"****";
        }