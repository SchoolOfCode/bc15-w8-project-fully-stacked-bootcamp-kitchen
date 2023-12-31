//Fetch object

const res = await fetch(`https://bootcamp-kitchen.onrender.com/dishes`);
const recipes = await res.json();
const recipeArray = await recipes.data;

//Toggling between landing and feed pages
let toggle = true;
const searchButton = document.querySelector(".search-button");
const homeButton = document.querySelector(".feed--home-icon");
const feed = document.querySelector(".feed-div");
const landingPage = document.querySelector(".landing-div");

searchButton.addEventListener("click", () => {
	toggle = false;
	handleToggle();
});

// xxxx

homeButton.addEventListener("click", () => {
	toggle = true;
	handleToggle();
});

function handleToggle() {
	if (toggle === true) {
		landingPage.setAttribute("style", "display: flex");
		feed.setAttribute("style", "display: none");
	}

	if (toggle === false) {
		feed.setAttribute("style", "display: block");
		landingPage.setAttribute("style", "display: none");
	}
}

//Search and render functions below #################################################################

let searchBox = document.getElementById("search-input");

let searchText = "";
renderToDom();
//Event listener to re-render Dom on input change
searchBox.addEventListener("input", () => {
	searchText = searchBox.value;
	clearDom();
	renderToDom();
	console.log(searchText.split(" "));
});

//Clear te DOM before re-rendering new obj
function clearDom() {
	document.querySelector(".feed").innerHTML = "";
}

// Print card elements to the DOM
function renderToDom() {
	const searchWords = searchText.toLowerCase().split(" ");

	recipeArray
		.filter((e) => {
			return searchWords.every(
				(word) =>
					e.title.toLowerCase().includes(word) ||
					e.description.toLowerCase().includes(word) ||
					e.tags.toLowerCase().includes(word)
			);
		})
		.forEach((obj) => {
			document.querySelector(".feed").innerHTML += `
			<div class="row">
			<div class="card container col-sm-10 ">
			<img alt="${obj.title}"  src="${obj.imageurl}" class="card-img-top" alt="...">
			<div class="card-body">
			<h5 class="card-title">${obj.title}</h5>
			<p class="card-text">${obj.description}</p>
			<a href="${obj.link}" class="btn">Go To Recipe</a>
			</div>
			</div>
			</div>`;
		});
}
