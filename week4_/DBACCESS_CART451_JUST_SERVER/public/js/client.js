//run server (node server.js) and go to http://localhost:4200/client


window.onload = function () {
  console.log("we are loaded");

  //GET
  // When you go to http://localhost:4200/client and input text in "sample search form", it will display text in terminal
  // Event listener for "send data" button (with id findData) 
  document.querySelector("#findData").addEventListener('click', function(event){

    let searchCrit =   document.getElementById("searchCrit").value;
    $.get(
      "/varsToMongo",
      {paramOne : searchCrit},
     // if we get a response from the server .... 
      function(response) {
         console.log(response); // response coming from server.js
      }
    )
  });//click

  //POST NOTE this is specific for airbnb data set - you change according to your wishes!
   // When you go to http://localhost:4200/client and input text in "sample addin form" it will display input as JSON in terminal
  // Event listener for "send data" button (with id sendData) 
  document.querySelector("#sendData").addEventListener('click', 
    function(event){
      event.preventDefault();
      console.log("clicked");
      let mData={
        host_name:document.querySelector("#host_name").value,
        nbgn_grp:document.querySelector("#neighbour_hood_group").value
      
      };
      console.log(mData);


      /*** request ***/
    $.ajax({
               type: "POST",
               data: JSON.stringify(mData),
               url:'/postForm',
               processData: false,
               contentType: "application/json",
               cache: false,
               timeout: 600000,
               success: function (response) {
               //reponse is a STRING
               console.log("we had success!");
               console.log(response);
              
              },
              error:function(e){
            console.log(e);
             console.log("error occurred");

           }
         });


  });//click
};
