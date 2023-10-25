const array = [
	{
		title: "Title 1",
		img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
		bodyText:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
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

array.map((obj) => {
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
