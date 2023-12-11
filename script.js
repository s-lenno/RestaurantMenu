let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');

    // Clear the current cart
    cartList.innerHTML = '';

    // Populate the cart list
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - £${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Calculate and display the total
    cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    totalElement.textContent = `Total: £${cartTotal.toFixed(2)}`;
}

function submitForm() {
    const specialRequests = document.getElementById('special-requests').value;
    // You can send special requests to the server or perform any necessary actions here
    console.log('Special Requests:', specialRequests);
}

function placeOrder() {
    // Prepare the order data
    const order = {
        items: cartItems, // Corrected from 'cart' to 'cartItems'
        specialRequests: document.getElementById('special-requests').value,
    };

    // Make a POST request to the server
    fetch('http://localhost:3000/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // Reset the cart after placing an order
        cartItems = []; // Corrected from 'cart' to 'cartItems'
        cartTotal = 0;
        updateCart();
    })
    .catch(error => {
        console.error('Error placing order:', error);
    });
}
