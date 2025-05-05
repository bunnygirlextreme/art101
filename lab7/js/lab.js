// author: ally herro
// art101 programming for the arts
// may 2025
// lab 7: functions

function sortUserName() {
    var userName = window.prompt("Hey! What's your name?");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
        // possible as a single line: 
        //  userName.toLower().split("").sort().join("")
    return nameSorted;
}

// output
document.writeln("Nice! I added your name: ",
    sortUserName(), "</br>"
);