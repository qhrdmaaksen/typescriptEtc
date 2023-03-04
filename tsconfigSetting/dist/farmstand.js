"use strict";
const printProduct = (product) => {
    console.log(`${product.name} - $${product.price}, 수량: ${product.quantity}`);
};
printProduct({ name: 'Eggs', price: 2.99, quantity: 10 });
