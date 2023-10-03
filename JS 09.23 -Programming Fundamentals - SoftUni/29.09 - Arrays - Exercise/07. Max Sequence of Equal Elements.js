function maxSeq(arr) {
    let bestSeq = 0
    let currentBest = 0
    let result = 0
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                currentBest++
            } else {
                break;

            }
        }
        if (currentBest > bestSeq){
            bestSeq = currentBest
            currentBest = 0
            result = arr[i]
            arr2.push(result)
        }

    }
    console.log(arr2);
  


}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSeq([1, 1, 1, 2, 3, 1, 3, 3])
maxSeq([4, 4, 4, 4])
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])