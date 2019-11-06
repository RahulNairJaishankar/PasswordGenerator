/*java script file*/

/**
 * @author Rahul Jaishankar
 * parser function that recieves user input from html page
 */
function parser(){


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
    //TODO data validation

    //Checking if user checked any of the check-boxes
    //IMP please change to appropriate ID tags; rn only placeholders
    let leetBool = document.getElementsByName("numAsLetters")[0].checked;
    let symbolBool = document.getElementsByName("addSymbols")[0].checked;
    let camelCaseBool = document.getElementsByName("useCamelCase")[0].checked;

    //testing parser functionality
    console.log(DOB);
    console.log(firstPetName);
    console.log(bestFriendsName);
    console.log(intendedWebsite);
    console.log(streetName);
    console.log("num as letters bool: " + leetBool /*+ " num as letters: " + leet(bestFriendsName)*/);
    console.log("add symbolsclass: " + symbolBool);
    console.log("camelCase: " + camelCaseBool );

    //display message test
    //finalPassword = "Testing123";
    finalPassword = leet(bestFriendsName);

    //calling display function
    displayMessage(finalPassword);
}

/**
 * function to update final password text on website
 * @param {} message message to be displayed
 */
function displayMessage(message){
    document.getElementById("finalPassword").innerHTML = message;
}

/**
 * @author James Johnson
 * @param {*} a String to be converted to leet code
 */
function leet(a){
    let b = "";
    if (typeof a == "string"){
      for (let i = 0; i < a.length; i++){
        if(a.substring(i,i+1) == "i"){
          b = b.concat("1");
        }else if (a.substring(i,i+1) == "a"){
          b = b.concat("4");
        }else if (a.substring(i,i+1) == "e"){
          b = b.concat("3");
        }else if (a.substring(i,i+1) == "o"){
          b = b.concat("0");
        }else{
          b = b.concat(a.substring(i,i+1));
        }
      }
      return b;
    }else{
      return "not string";
    }
  }
