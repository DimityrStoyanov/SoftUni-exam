function bonusScore(input) {
    let numA = Number(input[0]);
    let bonus = 0.0

        if (numA <= 100) {
            bonus = 5
        } else if (numA > 1000) {
            bonus = numA * 0.1
        } else 
        bonus = numA * 0.2
    
        if (numA % 10 == 5) {
            bonus += 2
        }
        
        if (numA % 2 == 0) {
            bonus += 1
        }

console.log(bonus)
console.log(`${numA + bonus}`)
}
bonusScore(["20"])

// •	Ако числото е до 100 включително, бонус точките са 5.
// •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
// •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

// •	Допълнителни бонус точки (начисляват се отделно от предходните):
// o	За четно число  + 1 т.
// o	За число, което завършва на 5  + 2 т.
