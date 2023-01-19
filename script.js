let messButton = document.querySelector("button");

messButton.addEventListener("click", function (event) {
	// Select the first box-1 element
	let firstBox1 = document.querySelector(".box-white");

	// Create a new div element for the additional box-1
	let newBox1 = document.createElement("div");

	// Add the class "box-1" to the new div element
	newBox1.classList.add("box-white");

	// Insert the new box-1 element after the first box-1
	firstBox1.insertAdjacentElement("afterend", newBox1);
});
