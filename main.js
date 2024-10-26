
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `You bought ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});

function calculateTotal() {
    const productPrice = parseFloat(document.getElementById("product").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = productPrice * quantity;
    document.getElementById("totalPrice").textContent = "Total Cost: $" + totalPrice.toFixed(2);
    return totalPrice;
  }

  document.getElementById("product").addEventListener("change", calculateTotal);
  document.getElementById("quantity").addEventListener("input", calculateTotal);

  function placeOrder() {
    const productText = document.getElementById("product").selectedOptions[0].text;
    const quantity = document.getElementById("quantity").value;
    const totalPrice = calculateTotal();
    document.getElementById("summary").textContent = `Order Summary: ${productText}, Quantity: ${quantity}, Total: $${totalPrice.toFixed(2)}`;
  }

  calculateTotal();

function calculateTotal() {
    const productDropdown = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("totalPrice");
  
    const productPrice = parseFloat(productDropdown.value);
    const quantity = parseInt(quantityInput.value) || 1; 
  
    const totalPrice = productPrice * quantity;
  
    totalPriceElement.textContent = "Total Cost: $" + totalPrice.toFixed(2);
  }
  
  function placeOrder() {
    const productDropdown = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const summaryElement = document.getElementById("summary");
  
    const productText = productDropdown.selectedOptions[0].text;
    const quantity = parseInt(quantityInput.value) || 1;
    const totalPrice = parseFloat(productDropdown.value) * quantity;
  
    summaryElement.textContent = `Order Summary: ${productText}, Quantity: ${quantity}, Total: $${totalPrice.toFixed(2)}`;
  }
  
  document.getElementById("product").addEventListener("change", calculateTotal);
  document.getElementById("quantity").addEventListener("input", calculateTotal);
  
  document.getElementById("placeOrderButton").addEventListener("click", placeOrder);
  
  calculateTotal();
  