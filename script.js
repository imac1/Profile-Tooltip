document.getElementById("white-button").addEventListener("click", function (e) {
	let cardsContainer = document.getElementById("cards-container");
	let newDarkBox = document.createElement("div");
	newDarkBox.classList.add(".box-dark");
	cardsContainer.appendChild(newDarkBox);
	console.log(newDarkBox);
});
