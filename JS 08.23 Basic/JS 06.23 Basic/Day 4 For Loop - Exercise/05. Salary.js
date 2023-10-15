function salary(input){
    let totalTabs = Number(input[0]);
    let salaryOfEmploy = Number(input[1]);

    let page = 0
    let punishment = 0
    for ( let i = 2; i <= totalTabs; i ++ ){
        page = input[i]
        if ( page == `Facebook`){
            punishment += 150
        } else if ( page == `Instagram`){
            punishment += 100
        } else if ( page == `Reddit`){
            punishment += 50
        } else {}
    }
    
    if (punishment > salaryOfEmploy){
        console.log(`You have lost your salary.`)
    } else {
        console.log(`${salaryOfEmploy - punishment}`)
    }
    
}
salary(["15",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
