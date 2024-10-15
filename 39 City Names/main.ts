function city_country(city: string, country: string) : string {
    return `${city} , ${country}`;

}

// calling a function and print the returned value
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));

city_country("Beijing", "China");
console.log(city_country("Beijing", "China"));

console.log(city_country("Tokyo", "Japan"));