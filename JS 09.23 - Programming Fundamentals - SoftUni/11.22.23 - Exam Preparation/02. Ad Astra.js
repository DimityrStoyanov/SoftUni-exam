function solve(arr) {
    let text = arr[0]
    let pattern = /(\||#)(?<product>[A-Za-z\s]+)\1(?<date>(\d{2})\/(\d{2})\/(\d{2}))\1(?<kcal>(\d+))\1/g;

    let matches = text.matchAll(pattern); //изкарва всички съвпадения от RegExp
    let totalCalories = 0
    let result = []

    if (matches == null) {
        // Избягваме варианта да няма нито един ден
    } else {
        for (let info of matches) {
            let { product, date, kcal } = info.groups; // взема всички групи в отделник променливи.
            tri = Number(kcal)
            totalCalories += Number(kcal)
            result.push({ product, date, kcal }); // вкарвам в масив обект
        }
    }
    let days = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    for (let products of result) {

        console.log(`Item: ${products[`product`]}, Best before: ${products[`date`]}, Nutrition: ${products[`kcal`]}`);
    }
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
solve(['Hello|#Invalid food#19/03/20#450|$5*(@'])