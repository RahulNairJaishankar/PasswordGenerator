/*java script file*/

/**
 * @author Rahul Jaishankar
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
    let leetBool = document.getElementsByName("numAsLetters")[0].checked;
    let symbolBool = document.getElementsByName("addSymbols")[0].checked;
    let camelCaseBool = document.getElementsByName("useCamelCase")[0].checked;

    //testing parser functionality
    console.log(DOB);
    console.log(firstPetName);
    console.log(bestFriendsName);
    console.log(intendedWebsite);
    console.log(streetName);
    console.log("num as letters bool: " + leetBool + " num as letters: " + leet(bestFriendsName));
    console.log("add symbolsclass: " + symbolBool);
    console.log("camelCase: " + camelCaseBool );
}

/**
 * @author James Johnson
 * @param {*} a String to be converted to leet code
 */
function leet(a){
    let b;
    if (typeof a == "string"){
      for (let i = 0; i < a.length; i++){
        if(a.indexOf(i).search("i") != -1){
          b+=1;
        }else if (a.indexOf(i).search("a") != -1){
          b+=4;
        }else if (a.indexOf(i).search("e") != -1){
          b+=3;
        }else if (a.indexOf(i).search("o") != -1){
          b+=0;
        }else{
          b+=a.indexOf(i);
        }
      }
      return b;
    }else{
      return "not string";
    }
  }