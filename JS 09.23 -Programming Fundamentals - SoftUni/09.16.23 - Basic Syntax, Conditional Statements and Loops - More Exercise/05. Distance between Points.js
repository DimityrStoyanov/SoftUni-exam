function distanceBetweenPts(x1, y1, x2, y2){
// let result = Math.hypot(x2-x1, y2-y1)
// console.log(result);

let distance = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1))
console.log(distance)
}
distanceBetweenPts(2, 4, 5, 0 )