
$(document).ready(function() {
$("#firstButton").on("click", function() {
    var inputURL = $("#urlvalue").val();
    var EncodedURL =encodeURI(inputURL);
    $("#OutputURL").text(EncodedURL);
  }); 
  $("#secondButton").on("click", function() {
    var inputURL = $("#urlvalue").val();
    var DecodedURL =decodeURI(inputURL);
    $("#OutputURL").text(DecodedURL);
  }); 
});