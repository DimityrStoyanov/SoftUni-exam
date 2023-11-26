function solve(arr) {
    let text = arr[0]
    let pattern = /(\||#)[A-Za-z\s]+\1(\d{2})\/(\d{2})\/(\d{2})\1(\d+)\1/g;

    let matches = text.match(pattern);
    let totalCalories = 0
    let result = {}

    if (matches == null) {
        // Избягваме варианта да няма нито един ден
    } else {
        for (let info of matches) {
            let startSymbol = info[0]
            let tokens = info.split(startSymbol)
            let food = tokens[1];
            let date = tokens[2];
            let calories = Number(tokens[3]);
            totalCalories += calories
            let dateAndCalories = { [date]: calories }
            result[food] = dateAndCalories
        }
    }
    let days = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    let entries = Object.entries(result);

    if (entries.length > 0) {
        for (let items of entries) {
            console.log(`Item: ${items[0]}, Best before: ${Object.keys(items[1])}, Nutrition: ${Object.values(items[1])}`)
        }
    }
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
solve(['Hello|#Invalid food#19/03/20#450|$5*(@'])