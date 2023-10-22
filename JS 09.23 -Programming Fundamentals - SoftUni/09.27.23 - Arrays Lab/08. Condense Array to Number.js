function condense(arr) {
    if (arr.length == 1) {
        console.log(`${arr[0]} is already condensed to number`)
    } else {
        while (arr.length > 1) {
            let condensed = []

            for (let i = 0; i < arr.length - 1; i++) {
                let current = Number(arr[i]) + Number(arr[i + 1])
                condensed.push(current)

            }
            arr = condensed

        }
        console.log(arr.join());
    }

}
condense([2, 10, 3])
condense([5, 0, 4, 1, 2])
condense([1])