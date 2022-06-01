// Created by Graeme Barbe
// Created on: May 27
// JS functions for index.html

function submit() {
	//Variables
	let numb = document.getElementById('factorial').value
	let display = ""
	let counter = 1
	let factorial = 1

	//If statement for 0 and 1
	if (numb >= 0) {
		if (numb != 0 && numb != 1) {
			//While loop for calculations
			do {
				factorial *= counter
				counter ++
			} while (counter <= numb)
			display = "The answer is " + factorial
			
		} else {
			display = "The answer is 1"
		}
	} else {
		display = "Please enter a number greater than 0"
	}

	//Display answer 
	document.getElementById('sum').innerHTML = display
}