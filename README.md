# PasswordGenerator!

A Web based **memoryless** password generator.

### Link to Prototype Model:
Visit https://rahulnairjaishankar.github.io/PasswordGenerator/ to access the PasswordGenerator website.

## What is it?

Our web based application allows users to generate random passwords using user inputted information. This project was implemented using HTML, CSS, and JavaScript.

### *Memorylessness* = Security

Since all the data manipulation is computed in the user's web browser, **absolutely no data is stored externally**.

### Compatibility

This application is compatible with any device that has an **internet web browser**.

## Password Generation: How is it Done?

A basic rundown of the functionality of the **Password Generator**.

 - User is required to input at least a Date of Birth, intended use of password, and a street address.
  - **(optional)** User can also choose to populate other text fields but it is not required for password generation.
  - **(optional)** User has the choice to select from three check-boxes.
    - User can choose to convert the password into *leet code*.
      - For example: "leet code" will be converted to "l33t c0d3".
    - User has the choice to randomly add a Symbol to their password.
    > Adding symbols and numbers will increase the strength of the password.
    - User has the option of converting their password into ***camelCase***.
      - For Example: "ilovemusic" will be converted to  "iLoveMusic".
   - Once the user clicks the **Generate Password** button, using the data provided by the user, the following steps will be excecuted:
     - Each **word** the **user enters** is a `password element`. Multiple `elements` make up the **password**.
     - Longer `elements` are shortened to *four* letters.
     - **Data** or **words** provided by the user will be shuffled using the [**Fisher-Yates Shuffle Algorithm**](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).
```javascript
    /**
     * Shuffling elements in an array using the Fisher-Yates Shuffle algorithm.
     * @param {*} array array of elements that needs to be shuffled.
     */
      function shuffleElements(array) {
          let currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
              randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
          }
```
   - **(optional step)** A symbol `["!", "@", "#", "$", "%", '^', "&", "*"]` is randomly inserted into the password.
   - **(optional step)** Password is *camelized*. Password will be converted into *camelCase*.
   - **The password generation is now completed**.
 - Every time the user clicks the **Generate Password** button, a new password is randomly generated.

## Why use our Password Generator?

This application is compatible with various devices. It also does not store any user data. The passwords that are generated are very strong.
> A computer would take **8 billion** to **552 quadrillion** years to obtain a password through brute force. - according to: https://howsecureismypassword.net/
