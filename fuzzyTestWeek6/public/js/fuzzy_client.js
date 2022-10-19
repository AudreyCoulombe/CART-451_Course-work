window.onload = function () {
  console.log("we are loaded fuzzy!");

  document.querySelectorAll(".slider").forEach(function(element) {
    element.addEventListener('input', function () {
      let foodRating = document.getElementById("food").value;
      document.getElementById("fVal").innerHTML = foodRating;

      let serviceRating = document.getElementById("service").value;
      document.getElementById("sVal").innerHTML = serviceRating;
   })
  })

  document.querySelectorAll(".slider").forEach(function(element) {
    element.addEventListener('change', function () {
    console.log("here");
    console.log(this.value);
    let serviceRating = document.getElementById("service").value;
    let foodRating = document.getElementById("food").value;

    
    $.get(
      "/fuzzifyVars",
      {paramService : serviceRating, paramFood:foodRating},
     // if we get a response from the server .... 
      function(response) {
         console.log('page content: ' + response.tip);
         document.querySelector("#response").innerHTML = "tip::"+ response.tip;
      }); //get
          
  }, false);
});

  
};
