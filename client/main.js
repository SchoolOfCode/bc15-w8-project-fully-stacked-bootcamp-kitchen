//Fetch object

const res = await fetch("http://localhost:3000/dishes");
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
// let btn = document.getElementById("search-click"); <--- If event input causing issues we can change searchBox to btn and input to click to only re-render on click
let searchText = "";

//Event listener to re-render Dom on input change
searchBox.addEventListener("input", () => {
	searchText = searchBox.value;
	clearDom();
	renderToDom();
});

//Clear te DOM before re-rendering new obj
function clearDom() {
	document.querySelector(".feed").innerHTML = "";
}

// Print card elements to the DOM
function renderToDom() {
	recipeArray
		.filter(
			(e) =>
				e.title.toLowerCase().includes(`${searchText.toLowerCase()}`) ||
				e.description.toLowerCase().includes(`${searchText.toLowerCase()}`) ||
				e.tags.toLowerCase().includes(`${searchText.toLowerCase()}`)
		)
		.map((obj) => {
			document.querySelector(".feed").innerHTML += `

			<div class="card container">
			<img src="${obj.imageurl}" class="card-img-top" alt="...">
			<div class="card-body">
			<h5 class="card-title">${obj.title}</h5>
			<p class="card-text">${obj.description}</p>
			<a href="${obj.link}" class="btn">Go To Recipe</a>
			</div>
			</div>`;
		});
}
