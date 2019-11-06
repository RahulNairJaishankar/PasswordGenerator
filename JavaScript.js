/*java script file*/

/**
 * parser function that recieves user input from html page
 */
function parser(){


    //declaring elements variables to store elements from "form1"
    let elements = document.getElementById("form1");

    //assigning values to variables from elements
 
    let DOB = document.getElementsByName("bday")[0].value; //retuns in YYYY-MM-05
    let firstPetName = document.getElementsByName("petName")[0].value;
    let bestFriendsName = document.getElementsByName("friendName")[0].value;
    let intendedWebsite = document.getElementsByName("intendedSiteName")[0].value;
    let streetName = document.getElementsByName("streetName")[0].value;
    //TODO data validation

    //Checking if user checked any of the check-boxes
    //IMP please change to appropriate ID tags; rn only placeholders
    let leet = document.getElementsByName("numAsLetters")[0].checked;
    let symbols = document.getElementsByName("addSymbols")[0].checked;
    let camelCase = document.getElementsByName("useCamelCase")[0].checked;

    //testing parser functionality
    console.log(DOB);
    console.log(firstPetName);
    console.log(bestFriendsName);
    console.log(intendedWebsite);
    console.log(streetName);
    console.log("num as letters: " + leet);
    console.log("add symbolsclass: " + symbols);
    console.log("camelCase: " + camelCase);
}