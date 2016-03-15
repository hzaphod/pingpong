//A loop is needed to take a user input then return/write/show all numbers leading up to that input.

var pingPong = function(inputNumber) {
  for (index = inputNumber; index >= 1; index -=1)
    console.log(index);
}

//Modify results to show returned numbers in an unordered list

//Further modify to show any result where inputNumber % 3 === 0 returns the number 3, or inputNumber % 5 === 0 returns pong, or inputNumber % 15 === 0 returns pingpong.
