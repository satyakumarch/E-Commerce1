// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Sample product data (you would fetch this from a server in a real application)
    const products = [
        { id: 1, name: "Product 1", price: 19.99 },
        { id: 2, name: "Product 2", price: 29.99 },
        // Add more products as needed
    ];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // Add the selected product to the shopping cart
            addToCart(products[index]);
        });
    });

    function addToCart(product) {
        // Implement logic to add the product to the shopping cart
        console.log(`Added ${product.name} to the cart`);
    }
});
