class Point {

    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;

        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}
let a = new Point(1, 2);
let b = new Point(4, 6);

console.log(a, b)
console.log(Point.distance(a, b))