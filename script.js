function calculateTotal() {
	const priceElements = document.querySelectorAll(".prices");
	let total = 0;

	priceElements.forEach(cell => {
		let value = parseFloat(cell.textContent) || 0;
		total += value;
	});

	// Remove previous total row if it exists
	const table = document.getElementById("grocery-table");
	const existingTotalRow = document.getElementById("total-row");
	if (existingTotalRow) {
		table.removeChild(existingTotalRow);
	}

	// Create a new row for the total
	const totalRow = document.createElement("tr");
	totalRow.id = "total-row";

	const totalCell = document.createElement("td");
	totalCell.colSpan = 2;
	totalCell.style.fontWeight = "bold";
	totalCell.textContent = `Total Price = ₹${total}`;

	totalRow.appendChild(totalCell);
	table.appendChild(totalRow);
}
