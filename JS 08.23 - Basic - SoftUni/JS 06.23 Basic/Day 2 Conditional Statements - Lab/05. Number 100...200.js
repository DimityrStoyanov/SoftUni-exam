function number100to200(input){
    let numA = Number(input[0]);

    if (numA > 200 ) {
        console.log("Greater than 200")
    } else if (numA >= 100) {
        console.log("Between 100 and 200")
    } else (
        console.log("Less than 100")
    )

}
number100to200(["2111"])

// •	под 100 отпечатайте: "Less than 100"
// •	между 100 и 200 отпечатайте: "Between 100 and 200"
// •	над 200 отпечатайте: "Greater than 200"
