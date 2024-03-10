//Ex" 13 Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”
//transportation.map((items) => console.log('I would like to own a ' + items));
var transportation = ["honda city", "Audi", "Alto"];
transportation.map(function (items) { return console.log('I would like to own a ' + items); });
