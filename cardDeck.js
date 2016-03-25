/*
Code was written to be executable from the command line with:
	node <filename> <n cards>

You are given a deck containing n cards.  While holding the deck:
 
1)Take the top card off the deck and set it on the table.
2)Take the next card off the top and put it on the bottom of the deck in your hand.
3)Continue steps 1 and 2 until all cards are on the table.  This is a round.
Pick up the deck from the table and repeat steps 1-3 until the deck is in the original order.
 
Write a program to determine how many rounds it will take to put a deck back into the original order.  This will involve creating a data structure to represent the order of the cards. This program should be written in JavaScript/Node.js, and should be executable from the command line. It should take a number of cards in the deck as a command line argument and write the result to stdout.
 
Other than data structures you create yourself:
For a JavaScript solution, do not use any Array methods.
*/


function roundCounter(n) {
	//init round count
	var rounds = 0;
	//create arrays to shuffle with, and compare to
	var originalOrder = [];
	var currentOrder = [];
	for(var i = 0; i < n; i++) {
		originalOrder.push(i);
		currentOrder.push(i);
	}
	function cycle() {
	  currentOrder = shuffleCards(currentOrder);
	  rounds++;
	  if(orderCheck(currentOrder, originalOrder)) {
	  	return;
	  } else {
	  	cycle();
	  }
  }
  cycle();
  return rounds;
}

//check order of two arrays
function orderCheck(arrOne, arrTwo) {
	for(var i = 0; i < arrOne.length; i++) {
		//if at any index, the values are different
		if(arrOne[i] !== arrTwo[i]) {
			return false;
		}
	}
	return true;
}

//function to deal cards onto table
function shuffleCards(arr) {
	//cards on the table
	var table = [];
	for(var i = 0; i < arr.length; i++) {
		//check for odd or even
		if(i % 2 === 0 || i === 0) {
			//place card on the table
		  table.push(arr[i]);
		} else {
			//or put card at the end of the deck
			arr.push(arr[i]);
		}
	}
	//return cards from table in order
	return table;
}

//extract number of cards for command line arguments
var numberOfCards = process.argv[2];

//find number of rounds
var result = roundCounter(parseInt(numberOfCards));

//write result
process.stdout.write(result.toString());