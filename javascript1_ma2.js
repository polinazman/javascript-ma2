//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Fruit() {
	this.type = "apple"
}

Fruit.prototype.kind = function() {
	console.log("This is an " + this.type)
}

var greenApple = new Fruit();
greenApple.kind();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.slice(4,5);

//3. Delete the last number in the array that you created above.
var numbers = [1,2,3,4,5,6,7,8,9,10];
delete numbers [9];

console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var paragraph = ("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.");
var replacement = paragraph.replace(/strawberry/g,"banana").replace(/strawberries/g,"bananas").replace(/Strawberries/g,"Bananas");

console.log(replacement);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var footballClubs = ["Manchester United", "Real Madrid", "Barcelona", "Bayern Munich"];

document.getElementById ("clickArray").addEventListener ("click", clickArray);

	console.log(footballClubs);

function clickArray() {
	document.getElementById('clickArray').onclick = delete footballClubs;
	document.getElementById('clickArray').onclick = footballClubs.splice(0,4,"Audi","BMW","Ferrari","Volvo");
	console.log(footballClubs);
};

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var peopleArray = [
	{name: "Ivan", gender: "male"},
	{name: "Sophie", gender: "female"},
	{name: "Alice", gender: "female"},
]

var filtered = peopleArray.filter(function(gender){
	return (gender.name === "Sophie");
})

console.log(filtered);

//7. Create a simple function that logs the date.
function todaysDate() {
	var date = Date();
	console.log(date);
}

todaysDate();