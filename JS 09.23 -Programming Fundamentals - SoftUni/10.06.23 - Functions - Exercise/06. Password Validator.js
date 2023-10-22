function passwordValidator(pass) {
    function ckeckLength(input) {
        let status = false
        if (input.length >= 6 && input.length <= 10) {
            status = true
        } else {
            status = false
        }
        return status
    }
    function checkOnlyLetterAndDigits(str) {
        return /^[A-Za-z0-9]*$/.test(str);
    }
    function moreThenTwoDigit(theNum) {
        let numCounter = 0;
        for (let i = 0; i < theNum.length; i++) {
            let symbol = theNum[i]
            if (Number(symbol) >= 0 && Number(symbol) <= 9) {
                numCounter++
            } else { }
        }
        if (numCounter >= 2) {
            return true
        } else {
            return false
        }
    }
    if (ckeckLength(pass) == false) {
        console.log("Password must be between 6 and 10 characters")
    }
    if (checkOnlyLetterAndDigits(pass) == false) {
        console.log("Password must consist only of letters and digits");
    }
    if (moreThenTwoDigit(pass) == false) {
        console.log("Password must have at least 2 digits");
    }

    if ( moreThenTwoDigit(pass) == true && checkOnlyLetterAndDigits(pass)  == true && ckeckLength(pass)  == true ){
        console.log("Password is valid");
    }
}
// passwordValidator('logIn')
// passwordValidator('MyPass123')
passwordValidator('Pa$s$s')

// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
