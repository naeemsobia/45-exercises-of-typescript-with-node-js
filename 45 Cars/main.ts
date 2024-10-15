function create_car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add optional objects to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;

}

// Call the function to create car object
let my_car =  create_car("Toyota", "Corolla", "colour:Black", "Sunroof: True");

// Print the value to ensure everything is stored in the car object
console.log(my_car);