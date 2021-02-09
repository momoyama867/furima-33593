document.addEventListener('DOMContentLoaded', function() {
  const priceInput = document.getElementById("item-price");
  const addTaxDom = document.getElementById("add-tax-price");
  const profitDom = document.getElementById("profit");
  priceInput.addEventListener("input", () => {
    var inputValue = priceInput.value;
    var addTaxPrice =  Math.floor(inputValue * 0.1);
    var profit = inputValue - addTaxPrice;
    addTaxDom.innerHTML = addTaxPrice.toLocaleString();
    profitDom.innerHTML = profit.toLocaleString();
  })
});
