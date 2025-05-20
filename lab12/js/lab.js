// jquery must be loaded for script to work
// author: ally herro
// may 2025
function getHouse(num) {
    // get the remainder when divided by 4
    let remainder = num % 4
    let str = "";

    // assign houses with descriptions based off the remainders
    if (remainder == 0) {
        str = "The Blue Lions, associated with students from the Northern Kingdom of Faerghus. They specialize in knight shit like swords, lances, and cavalry.";
    } else if (remainder == 1) {
        str = "The Golden Deer, associated with students from the Leicester Alliance. They specialize in archers and stuff, I promise it's cooler than it sounds.";
    } else if (remainder == 2) {
        str = "The Black Eagles, associated with students from the Adrestian Empire. They specialize in magic, in a way that's definitely not evil.";
    } else if (remainder == 3) {
        str = "The Ashen Wolves... we don't talk about the Ashen Wolves. They live in a jail underground, sorryyy.";
    }
    return str;
};

// attach click listener to submit button
$("#button").click(function(){
    console.log("Button clicked!");
    
    // get the value in the input text box, assign to a variable name
    let name = $("#input").val()
    console.log(name);

    // get the length of the name
    let nameLength = name.length;
    console.log(nameLength);

    // get the house
    let house = getHouse(nameLength);
    console.log(house);

    // add house to output div
    $("#output").html("<h2>" + house + "</h2>");
});