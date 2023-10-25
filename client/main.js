const array = [
	{
		title: "Title yyy 1",
		img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
		bodyText:
			"Some xo quick example text to build on the card title and make up the bulk of the card's content.",
		link: "#",
	},
	{
		title: "Title 2",
		img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
		bodyText:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "#",
	},
	{
		title: "Title 3",
		img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
		bodyText:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		link: "#",
	},
];

//Fetch object

// const res = await fetch("http://localhost:6006/dishes");
// const recipes = await res.json();
// const recipeArray = await recipes.data;

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

const searchBox = document.querySelector(".search-box");
let searchText = "";

searchBox.addEventListener("input", () => {
	searchText = searchBox.value;
});

// If we can get the value of the searchBox.value into the searchText this will automatically filter using the filter function below.

array
	.filter((e) => e.bodyText.includes(`${searchText}`))
	.map((obj) => {
		document.querySelector(".feed").innerHTML += `

<div class="card container">
  <img src="${obj.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.title}</h5>
    <p class="card-text">${obj.bodyText}</p>
    <a href="${obj.link}" class="btn">Go somewhere</a>
  </div>
</div>`;
	});
