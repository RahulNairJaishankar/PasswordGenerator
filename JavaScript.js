/*java script file*/

/**
 * parser function that recieves user input from html page
 */
function parser(){

    //declaring elements variables to store elements from "form1"
    let elements = document.getElementById("form1");

    //assigning values to variables from elements
    let DOB = elements[0].value; //not sure about this one yet. Check how date is returned from html form.
    let name = elements[1].value;
    let firstPetName = elements[2].value;
    let bestFriendsName = elements[3].value;
    let intendedWebsite = elements[4].value;
    let streetName = elements[5].value;


    //TODO data validation

    //Checking if user checked any of the check-boxes
    //IMP please change to appropriate ID tags; rn only placeholders
    leet = document.getElementById("leet").checked;
    symbols = document.getElementById("symbols").checked;
    cameCase = document.getElementById("camelCase").checked;
}