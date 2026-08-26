let product = {
    name : "Laptop",
    price: 199999,
    category : "Electronics",
};

// 7. get keys 
console.log(Object.keys(product));

// 8. get values 
console.log(Object.values(product));

// 9. get enteries
console.log(Object.entries(product));

// 10. display enteries 
console.log(Object.entries(product));
Object.entries(product).foreach(function(key, value){
    console.log(key, value);
});
