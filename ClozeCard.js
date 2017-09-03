var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

var firstPresident = new BasicCard ("Who was the first president of the United States?", "George Washington");

var firstPresidentClose = new ClozeCard("George Washington was the first president of the United States", "George Washington") ;

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = function () {
		var partialText = (this.cloze, "was the first president of the United States");
		console.log("..." + partialText);
	}
	this.fulltext = function() {
		console.log(text);
	}
};



inquirer.prompt([
	{
		type: "list",
		name: "startResponse",
		message: "Which type of card would you like to see?",
		choices: ["Basic", "Clozed"]
	}
	]).then(function(cardSelection){
		if(cardSelection.startResponse === "Basic"){
			inquirer.prompt([
			{
				type: "list",
				name: "basicResponse",
				message: "Would you like to see the front or the back of the card?",
				choices: ["Front", "Back"]
			}
			]).then(function(basicSelection){
				if (basicSelection.basicResponse === "Front") {
					console.log(firstPresident.front);
				} else {
					console.log(firstPresident.back);
				}
			})
		} else { 
			inquirer.prompt([ 
			{
				type: "list",
				name: "clozeResponse",
				message: "Would you like to see the clozed, partial, or full text?",
				choices: ["Clozed", "Partial", "Full Text"]
			}	
			]).then(function(clozeSelection){
				if (clozeSelection.clozeResponse === "Clozed") {
					console.log(firstPresidentClose.cloze);
				};
				if (clozeSelection.clozeResponse === "Partial") {
					firstPresidentClose.partial();
				};
				if(clozeSelection.clozeResponse === "Full Text") {
					firstPresidentClose.fulltext();
				}

			})

		}
	});



module.exports = ClozeCard;