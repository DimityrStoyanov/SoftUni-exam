function maxNumber(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = true
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                currentNum = false
            } else {
            }
        }
        if (currentNum == true) {
            arr2.push(arr[i])
        }
    }
    console.log(arr2.join(` `));
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])