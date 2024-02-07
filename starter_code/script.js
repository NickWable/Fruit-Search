
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// window.onload = function() {
// 	const sortedFruit = fruit.sort(); // Sort the fruit array
// 	showSuggestions(fruit, '');
//   }

function search(str) {
	let results = [];
	str = str.toLowerCase(); // Convert the input string to lower case

    results = fruit.filter(fruitName => {
        return fruitName.toLowerCase().startsWith(str); // Convert each fruit name to lower case before checking
    });
	return results;
}


function searchHandler(e) {
	let inputVal = e.target.value; // Get the current value of the input field
	suggestions.innerHTML = ''; // Clear any existing suggestions
  if (inputVal !== '') { // If the input value is not empty, search the fruit list and show the results
    let results = search(inputVal); // Search the fruit list based on the input value
    showSuggestions(results, inputVal); // Show the search results
  }
}


function showSuggestions(results) {
suggestions.innerHTML = ''; // Clear any existing suggestions
results.forEach(result => { // Loop through the search results and add each result to the suggestions list
	const li = document.createElement('li');
	li.textContent = result;
	li.addEventListener('mouseover', () => { // Add mouseover event listener to the li element
		li.style.backgroundColor = '#cccccc'; // Change the background color to highlight the li element
	});
	li.addEventListener('mouseout', () => {
		li.style.backgroundColor = ''; // Remove the background color to unhighlight the li element
	});
	suggestions.appendChild(li); // Append the li element to the suggestions list
});
}


// Set the value of the input field to the text content of the clicked li element
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
    }
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

