
$(document).ready(function() {
$("#firstButton").on("click", function() {
    var inputURL = $("#urlvalue").val();
    var EncodedURL =encodeURI(inputURL);
    $("#EncodedURL").text(EncodedURL);
  }); 
});