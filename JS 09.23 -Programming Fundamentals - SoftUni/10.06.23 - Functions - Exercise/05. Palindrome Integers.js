function palindromeIntegers(arr) {
    let currentNum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i]
        let asString = String(currentNum)
        let palindromeArr = asString.split("")
        let reverseArray = palindromeArr.reverse()
        let reverseNum = Number(reverseArray.join(""))

        function palindromeOrNot(newNumber) {
            if (currentNum == reverseNum) {
                console.log(true)
            } else {
                console.log(false)
            }
        }
        palindromeOrNot(reverseNum)
    }

}
palindromeIntegers([123, 323, 421, 121])
// palindromeIntegers([32, 2, 232, 1010])
