document.addEventListener("DOMContentLoaded", () => {
    // Function to update the total price
    function updateTotal() {
      let total = 0;
      document.querySelectorAll(".card").forEach(card => {
        const quantity = parseInt(card.querySelector(".quantity").innerText);
        const unitPrice = parseInt(card.querySelector(".unit-price").innerText.replace("$", "").trim());
        total += quantity * unitPrice;
      });
      document.querySelector(".total").innerText = `${total} $`;
    }
  
    // Handle increment and decrement
    document.querySelectorAll(".fa-plus-circle").forEach(button => {
      button.addEventListener("click", () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = ++quantity;
        updateTotal();
      });
    });
  
    document.querySelectorAll(".fa-minus-circle").forEach(button => {
      button.addEventListener("click", () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 0) {
          quantityElement.innerText = --quantity;
          updateTotal();
        }
      });
    });
  
    // Handle delete
    document.querySelectorAll(".fa-trash-alt").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".card-body");
        card.remove();
        updateTotal();
      });
    });
  
    // Handle like
    document.querySelectorAll(".fa-heart").forEach(button => {
      button.addEventListener("click", () => {
        button.style.color = button.style.color === "red" ? "black" : "red";
      });
    });
  });
  