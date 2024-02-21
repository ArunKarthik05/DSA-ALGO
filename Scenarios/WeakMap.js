// Function to save cart items to localStorage
function saveCartToLocalStorage(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(Array.from(cartItems.entries())));
}

// Function to load cart items from localStorage
function loadCartFromLocalStorage() {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? new Map(JSON.parse(savedCartItems)) : new Map();
}

// Example usage:
const cartItems = loadCartFromLocalStorage();

function addToCart(product, quantity) {
    if (!cartItems.has(product)) {
        cartItems.set(product, 0);
    }
    cartItems.set(product, cartItems.get(product) + quantity);
    saveCartToLocalStorage(cartItems);
    console.log(`${quantity} ${product.name}(s) added to the cart.`);
}

function removeFromCart(product, quantity) {
    if (cartItems.has(product)) {
        const currentQuantity = cartItems.get(product);
        const newQuantity = Math.max(0, currentQuantity - quantity);
        cartItems.set(product, newQuantity);
        if (newQuantity === 0) {
            cartItems.delete(product);
        }
        saveCartToLocalStorage(cartItems);
        console.log(`${quantity} ${product.name}(s) removed from the cart.`);
    }
}

function proceedToPayment(){
    console.log('Proceeding to payment...');
    console.log('Payment successful..');
    localStorage.removeItem('cartItems');
}
setTimeout(()=>{
    console.log('Proceeding to payment...');
    proceedToPayment();
},10000)

// Example usage:
const product1 = { name: 'T-shirt', price: 20 };
const product2 = { name: 'Jeans', price: 50 };

addToCart(product1, 2);
addToCart(product2, 1);
addToCart(product2, 5);
addToCart(product1, 3);

console.log('Cart items:', Array.from(cartItems.entries()));

removeFromCart(product1, 1);

console.log('Cart items:', Array.from(cartItems.entries()));
