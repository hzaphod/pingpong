$(document).ready(function() {
//A loop is needed to take a user input then return/write/show all numbers leading up to that input.
//Further modify to show any result where inputNumber % 3 === 0 returns the number 3, or inputNumber % 5 === 0 returns pong, or inputNumber % 15 === 0 returns pingpong.
//if (index % 3 ===0) {
  //console.log("ping");
//}

  var pingPong = function(inputNumber) {
    for (index = inputNumber; index >= 1; index -=1) {
      if (index % 15 === 0)
        showResult("pingpong");
      else if (index % 5 === 0)
        showResult("pong");
      else if (index % 3 === 0)
        showResult("ping");
      else
        showResult(index);
    }
  }
  //Modify results to show returned numbers in an unordered list
  var showResult = function(input) {
    $("#results").prepend("<li>" + input);
  }

//Add click function to show and reset results

  $('#mySubmit').click(function() {
    $("#results").html("");
    pingPong($("#userInput").val());
  });
});
