const sumButton = document.getElementById("sumButton");

const getSum = () => {
  const priceAll = document.querySelectorAll(".price");
  let total = 0;

  priceAll.forEach((priceCell) => {
    const price = parseFloat(priceCell.textContent) || 0;
    total += price;
  });

  // Print result in <p id="ans">
  document.getElementById("ans").textContent = `Total: ${total}`;
};

sumButton.addEventListener("click", getSum);
