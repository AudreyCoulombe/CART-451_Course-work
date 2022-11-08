$(document).ready(go);

function go(){
  console.log("we are ready to go");
  $("#getRes").click(getDalle);

  function getDalle(){
    //let phrase = $("#sentimentSearch").val();
    let searchText = document.getElementById("textSearch").value;
    console.log(searchText);
    let mData={clientSearch:searchText};

    /*** request ***/
    $.ajax({
               type: "POST",
               data: JSON.stringify(mData),
               url:'/getDalleRequest',
               processData: false,
               contentType: "application/json",
               cache: false,
               timeout: 600000,
               success: function (response) {
               //reponse is a STRING
               console.log("we had success!");
               console.log(response);
                parseResponse(response)
              },
              error:function(e){
            console.log(e);
             console.log("error occurred");

           }
         });
        }

}

function parseResponse(response){
$("#resultsContainer").empty();
let image = $("<img>").attr("src",response[0].imgSrc).appendTo("#resultsContainer");
}
