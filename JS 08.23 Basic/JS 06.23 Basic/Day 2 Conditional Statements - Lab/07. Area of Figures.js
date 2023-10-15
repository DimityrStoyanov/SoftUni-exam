function areOfFigures(input){
 let figures = input[0];
 
 if (figures == "square"){
    let side = Number(input[1])
    let result = side * side
    console.log(result)
 } else if ( figures == "rectangle") {
    let sideA = Number(input[1])
    let sideB = Number(input[2])
    let result = sideA * sideB
    console.log(result)
 } else if ( figures == "circle") {
    let r = Number(input[1])
    result = Math.PI * r * r
    console.log(result)
 } else if (figures == "triangle") {
    let 
 }

}

areOfFigures(["rectangle",
"7",
"2.5"])

// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
