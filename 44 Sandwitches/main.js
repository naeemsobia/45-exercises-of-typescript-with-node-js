function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(" \n Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Now enjoy sandwich");
}
// calling function 3 times with 3 different arguments
makeSandwich("Chicken", "Cheese", "Butter", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Cheese", "Cucumber", "Chicken", "Egg", "Mayo");
