/*javaScript file*/

/**
 * @author Rahul Jaishankar
 * parser function that recieves user input from html page
 */
function parser() {


    //declaring elements variables to store elements from "form1"
    let elements = document.getElementById("form1");

    //final password variable
    let finalPassword;

    //assigning values to variables from elements

    let DOB = document.getElementsByName("bday")[0].value; //retuns in YYYY-MM-05
    let firstPetName = document.getElementsByName("petName")[0].value;
    let bestFriendsName = document.getElementsByName("friendName")[0].value;
    let intendedWebsite = document.getElementsByName("intendedSiteName")[0].value;
    let streetName = document.getElementsByName("streetName")[0].value;

    //data validation
    if (dataValidation(DOB, intendedWebsite, streetName) == false) {
        return;
    };
    //capturing checkbox states
    let leetBool = document.getElementsByName("numAsLetters")[0].checked;
    let symbolBool = document.getElementsByName("addSymbols")[0].checked;
    let camelCaseBool = document.getElementsByName("useCamelCase")[0].checked;

    //testing parser functionality
    console.log(DOB);
    console.log(firstPetName);
    console.log(bestFriendsName);
    console.log(intendedWebsite);
    console.log(streetName);
    console.log("num as letters bool: " + leetBool);
    console.log("add symbolsclass: " + symbolBool);
    console.log("camelCase: " + camelCaseBool);

    //create array of elements from all user inputted fields
    let passwordElements = delimitInputs(DOB, firstPetName, bestFriendsName, intendedWebsite, streetName);

    //logging passwordElements
    console.log(passwordElements);

    //TODO: RANDOMIZE PASSWORD ELEMENTS

    //generate password
    finalPassword = generatePassword(passwordElements, leetBool, symbolBool, camelCaseBool);

    //calling display function
    displayMessage(finalPassword);
}

/**
 * function to update final password text on website
 * @param {} message message to be displayed
 */
function displayMessage(message) {
    document.getElementById("finalPassword").innerHTML = message;
}

/**
 * @author James Johnson
 * @param {*} a String to be converted to leet code
 */
function leet(a) {
    let b = "";
    if (typeof a == "string") {
        for (let i = 0; i < a.length; i++) {
            if ((a.substring(i, i + 1) == "i") || (a.substring(i, i + 1) == "I")) {
                b = b.concat("1");
            } else if ((a.substring(i, i + 1) == "a") || (a.substring(i, i + 1) == "A")) {
                b = b.concat("4");
            } else if ((a.substring(i, i + 1) == "e") || (a.substring(i, i + 1) == "E")) {
                b = b.concat("3");
            } else if ((a.substring(i, i + 1) == "o") || (a.substring(i, i + 1) == "O")) {
                b = b.concat("0");
            } else if ((a.substring(i, i + 1) == "s") || (a.substring(i, i + 1) == "S")) {
                b = b.concat("5");
            } else {
                b = b.concat(a.substring(i, i + 1));
            }
        }
        return b;
    } else {
        return "not string";
    }
}

/**
 * @author Jose Alvarez
 * @param {} str str that needs to be converted to camelCase.
 */
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        //if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        if (/\s+/.test(match)) return "";
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

/**
 * function to randomly insert a symbol into an array of strings
 * @param {} arrayOfStrings 
 */
function insertSymbols(arrayOfStrings) {
    
    //array of symbols
    let symbols = ["!","@","#","$","%",'^',"&","*"];

    arrayOfStrings.splice(indexPicker(arrayOfStrings.length), 0, symbols[indexPicker(symbols.length)]);

    console.log(arrayOfStrings);

    return arrayOfStrings;
}

/**
 * function to generate password
 * @author Rahul Jaishanakar
 * @param {*} passwordBits 
 * @param {*} leetChk 
 * @param {*} SymCheck 
 * @param {*} CmlChk 
 */
function generatePassword(passwordBits, leetChk, SymCheck, CmlChk) {
    let password = "";

    if (SymCheck) {
        
        passwordBits = insertSymbols(passwordBits);
    }    
    if (CmlChk) {
        for (i = 0; i < passwordBits.length; i++) {
            password += " " + passwordBits[i];
        }

        password = camelize(password);
    }
    else {
        for (i = 0; i < passwordBits.length; i++) {
            password += passwordBits[i];
        }
    }
    if (leetChk) {
        password = leet(password);
    }

    return password;
}

/**
 * data validation function
 * @author Rahul Jaishankar
 * @param {*} date 
 * @param {*} website 
 * @param {*} street 
 */
function dataValidation(date, website, street) {
    if (date == "") {
        window.alert("Enter Date of Birth.");
        return false;
    }
    if (website == "") {
        window.alert("Enter the website where you are planning to use the password");
        return false;
    }
    if (street == "") {
        window.alert("Enter your street address.");
        return false;
    }

    return true; //all tests passed
}

/**
 * delimits all strings from parameters and combines into one array of strings
 * @author Rahul Jaishankar
 * @param {*} dateStr 
 * @param {*} petStr 
 * @param {*} friendStr 
 * @param {*} siteStr 
 * @param {*} streetStr 
 */
function delimitInputs(dateStr, petStr, friendStr, siteStr, streetStr) {
    let bits = dateStr.split(new RegExp('[-+()*/:? ]', 'g'));
    let tempArray;
    if (petStr != "") //filtering optional content
    {
        tempArray = petStr.split(new RegExp('[-+()*/:? ]', 'g'));

        for (i = 0; i < tempArray.length; i++) {
            bits.push(tempArray[i]);
        }
    }

    if (friendStr != "") //filtering optional content
    {
        tempArray = friendStr.split(new RegExp('[-+()*/:? ]', 'g'));

        for (i = 0; i < tempArray.length; i++) {
            bits.push(tempArray[i]);
        }
    }

    tempArray = siteStr.split(new RegExp('[-+()*/:? ]', 'g'));

    for (i = 0; i < tempArray.length; i++) {
        bits.push(tempArray[i]);
    }

    tempArray = streetStr.split(new RegExp('[-+()*/:? ]', 'g'));

    for (i = 0; i < tempArray.length; i++) {
        bits.push(tempArray[i]);
    }

    return bits;
}

/**
 * function to randomly pick an index/number between 0 and length
 * @param {*} length length of a string or array of elements
 */
function indexPicker(length){
    
    return Math.floor(Math.random() * length);
}