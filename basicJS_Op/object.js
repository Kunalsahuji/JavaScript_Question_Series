/*
You have an object:
let car = { brand: "Toyota", model: "Fortuner", year: 2022 };
Print all keys and values one by one.
*/
{
    let car = { brand: "Toyota", model: "Fortuner", year: 2022 };
    for (let key in car) {
        console.log(`${key}: ${car[key]}`);
    }
}
// with Object.keys() and forEach
{
    console.log("Using Object.keys() and forEach:");
    let car = { brand: "Toyota", model: "Fortuner", year: 2022 };
    Object.keys(car).forEach(key => console.log(` ${key}: ${car[key]}`));
}
// with Object.values() and forEach
{
    console.log("Using Object.values() and forEach:");
    let car = { brand: "Toyota", model: "Fortuner", year: 2022 };
    Object.values(car).forEach(value => console.log(`Value: ${value}`));
}
// with Object.entries() and forEach
{
    console.log("Using Object.entries() and forEach:");
    let car = { brand: "Toyota", model: "Fortuner", year: 2022 };
    Object.entries(car).forEach(([key, value]) => console.log(`${key}: ${value}`));
}

// with Object.entries() and for..of
{
    console.log("Using Object.entries() and for..of:");
    let car = { brand: "Toyota", model: "Fortuner", year: 2022 };   
    for (let [key, value] of Object.entries(car)) {
        console.log(`${key}: ${value}`);
    }
}