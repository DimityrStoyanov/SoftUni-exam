function solve(arr){
    let sortArr = arr.sort();

    for (let i = 0; i < sortArr.length; i++){
        console.log(`${i+1}.${sortArr[i]}`)

    }
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
solve(['Watermelon', 'Banana', 'Apples'])
