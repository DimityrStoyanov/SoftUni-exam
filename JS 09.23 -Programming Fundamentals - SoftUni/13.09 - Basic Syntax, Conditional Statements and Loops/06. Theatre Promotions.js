function theatrePromotions(day, age) {
    ;
    let price = 0;
    switch (day) {
        case `Weekday`:
            if (age >= 0 && age <= 18) {
                price = `12$`
            } else if (age <= 64 && age > 18) {
                price = `18$`
            } else if (age > 64 && age <= 122) {
                price = `12$`
            } else {
                price = `Error!`
            }
            ; break;
        case `Weekend`:
            if (age >= 0 && age <= 18) {
                price = `15$`
            } else if (age <= 64 && age > 18) {
                price = `20$`
            } else if (age > 64 && age <= 122) {
                price = `15$`
            } else {
                price = `Error!`
            }
            ; break;
        case `Holiday`:
            if (age >= 0 && age <= 18) {
                price = '5$'
            } else if (age <= 64 && age > 18) {
                price = '12$'
            } else if (age > 64 && age <= 122) {
                price = '10$'
            } else {
                price = `Error!`
            }
            ; break;
    }
    console.log(price)
}
theatrePromotions('Weekday',
    42
)