let arr = [];
for (let i = 1; i < 5; i++) {
    arr.push(i)
}
console.log(arr);

arr.forEach(num => {
    let myNum = -1;
    num += myNum
    console.log(num);
})

let champions = {
    realMadrid: 14,
    millan: 7,
    liverpool: 6
}
champions.bayern = 6;
champions.others = {
    cska: 1,
    levski: 0,
    slavia: 0
}
// След това сортираме, като започваме от отборите с най- малко титли.
// Взема се първи индекс, тъй като там се намира броя в цифри.
let sorted = Object.entries(champions).sort((a, b) => a[1] - b[1])

// след това принтирам масивите от масива:
// и търсим дали има цска:
let lookingTeam = `cska`
sorted.forEach(team => {
    if (champions.others.hasOwnProperty(lookingTeam)) {
        console.log(`Само ЦСКА!`);

        champions.others = champions.others.cska
    }
})
console.log(champions);

