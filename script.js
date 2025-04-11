let sumButton = document.createElement("button");
sumButton.innerHTML = "Get Total Price"
document.body.appendChild(sumButton);

const getSum = () => {
	const priceAll = document.querySelectorAll(".price");
	let total = 0;

	for (let i = 0; i < priceAll.length; i++) {
		const price = parseFloat(priceAll[i].textContent) || 0;
		total += price;
	}
	document.getElementById("text").innerHTML = `${total}`
};

sumButton.addEventListener("click", getSum);
