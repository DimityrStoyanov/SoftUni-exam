function newSet(arr){
    let uniq = new Set(arr)
    for ( let item of uniq){
        console.log(item);
    }

}
newSet([4,5,6,7,8,9,4,8,5,2])