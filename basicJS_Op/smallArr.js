/*
You have an array of objects:
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];
Find the product with the lowest price.
*/
{
    let products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Tablet", price: 30000 }
    ];
    let minPriceProduct = products[0];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price < minPriceProduct.price) {
            minPriceProduct = products[i]
        }
    }
    console.log(`Product with the lowest price: ${minPriceProduct.price}, Name: ${minPriceProduct.name}`);
}
// using reduce
{
    let products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Tablet", price: 30000 }
    ];
    let minPriceProduct = products.reduce((min, curr) => {
        return curr.price < min.price ? curr : min;
    });
    console.log(`Product with the lowest price: ${minPriceProduct.price}, Name: ${minPriceProduct.name}`);
}
// using sort
{
    let products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Tablet", price: 30000 }
    ];
    products.sort((a, b) => a.price - b.price);
    let minPriceProduct = products[0];
    console.log(`Product with the lowest price: ${minPriceProduct.price}, Name: ${minPriceProduct.name}`);
}
// using Math.min and map
{
    let products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Tablet", price: 30000 }
    ];
    let minPrice = Math.min(...products.map(p => p.price));
    let minPriceProduct = products.find(p => p.price === minPrice);
    console.log(`Product with the lowest price: ${minPriceProduct.price}, Name: ${minPriceProduct.name}`);
}
//for of loop
{
    let products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Tablet", price: 30000 }
    ];
    let minPriceProduct = products[0];
    for (let product of products) {
        if (product.price < minPriceProduct.price) {
            minPriceProduct = product;
        }
    }
    console.log(`Product with the lowest price: ${minPriceProduct.price}, Name: ${minPriceProduct.name}`);
}