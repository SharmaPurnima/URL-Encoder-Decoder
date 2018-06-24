
$(document).ready(function() {
$("#firstButton").on("click", function() {
    var inputURL = $("#urlvalue").val();
    var EncodedURL =encodeURIComponent(inputURL);
    $("#OutputURL").text(EncodedURL);
  }); 
  $("#secondButton").on("click", function() {
    var inputURL = $("#urlvalue").val();
    var DecodedURL =decodeURIComponent(inputURL);
    $("#OutputURL").text(DecodedURL);
  }); 
});
