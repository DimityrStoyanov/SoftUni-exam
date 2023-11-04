let testObj = {};

let myArr = [`1,2,3`]
testObj[`myNumb`] = myArr
console.log(testObj[`myNumb`]);

let newArr = [`4,5,6`]
for (let num of newArr){
    testObj[`myNumb`].push(num)
}

console.log(testObj[`myNumb`]);

let value = Object.values(testObj)

for ( let num of value){
    console.log(`${num}`);
}
