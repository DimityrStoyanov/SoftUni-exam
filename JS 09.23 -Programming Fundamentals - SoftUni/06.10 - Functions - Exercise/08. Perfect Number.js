function perferctNum(num) {

    let checkPerfectNumber = (num = 1) => {
        if (num === 1) {
            return false;
        };
        let sum = 1;
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                sum = sum + i + num / i; if (sum > num) {
                    return false;
                }
            };
        };
        return sum === num;
    };

   
    if ( checkPerfectNumber(num) == true ){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perferctNum(6)
perferctNum(28)
perferctNum(1236498)