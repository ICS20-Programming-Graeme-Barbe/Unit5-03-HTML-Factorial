// Created by Graeme Barbe
// Created on: May 27
// JS functions for index.html

function submit() {
	//Variabls
		let numb = document.getElementById('factorial').value
		let counter = 1
		let factorial = 1

	do {
		factorial = factorial * counter
		counter + 1
	} while (counter <= numb)

	document.getElementById('sum').innerHTML = "The sum is " + factorial
}