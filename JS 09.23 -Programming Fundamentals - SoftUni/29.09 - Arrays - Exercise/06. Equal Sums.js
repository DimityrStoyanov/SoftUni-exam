function equalSums(arr) {
    let status = false
    for (let i = 0; i < arr.length; i++) {
        let sumInRight = 0;
        let sumInLeft = 0;
        for (let j = i + 1; j < arr.length; j++) {
            sumInRight += arr[j]
        }
        for (let k = i - 1; k >= 0; k--) {
            sumInLeft += arr[k]
        }

        if (sumInRight == sumInLeft && sumInLeft !== 0 && sumInRight !== 0) {
            console.log(i)
            status = true
        } else if (sumInRight == 0 && sumInLeft == 0) {
            console.log(0)
            status = true
        }

    }
    if (status == false) {
        console.log(`no`)
    }

}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])