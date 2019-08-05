// DOES NOT WORK WITH HTTPS//
// FOR A NON JQUERY VERSION CHECK OUT THE ARTICLE AT: https://inspiredwebdev.com/tutorial/create-random-quote-machine

$(document).ready(function() {
  getQuote(); /*to already have a quote when i load the page*/
  colorRandomizer(); //to create a random color as soon as i load
  function getQuote() {
    var url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    $.getJSON(url, function(data) {
      //store the quote and the author in var
      var currentQuote = data.quoteText;
      var currentAuthor = data.quoteAuthor;
      //add them to my html
      $("#quoteText").html(currentQuote);
      $("#author").html("- " + currentAuthor);

      //prepopulate my twitter
      $("#twitter").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes,Fcc&related=freecodecamp&text=" +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      );
    }); /*end get json*/
  } /*get quote end */

  $("#new-quote").on("click", function() {
    //run my color randomizer and my get quote
    colorRandomizer();
    getQuote(); /* to generate a quote */
  });

  function colorRandomizer() {
    var myColors = ["#3498db", "#2ecc71", "#9b59b6", "#e74c3c", "#f1c40f"]; //array of colors
    var randomNum = Math.floor(Math.random() * myColors.length); //generate random number

    var randomColor = myColors[randomNum]; //store my random color
    //modify bg and txt color with my random color
    $(".randomBgColor").css("background-color", randomColor);
    $(".randomTxtColor").css("color", randomColor);
  }
}); /* end jquery*/
