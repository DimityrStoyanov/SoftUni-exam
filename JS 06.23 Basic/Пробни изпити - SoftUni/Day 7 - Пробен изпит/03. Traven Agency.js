function travelAgency(input){
let city = input[0];
let package = input[1];
let vipStatus = input[2];
let days = Number(input[3]);

let pricePerDay = 0

switch (city){
    case "Bansko": 
        if (package == "withEquipment" && vipStatus == "yes"){
            pricePerDay = 100 * 0.9
        } else if ( package == "withEquipment" && vipStatus == "no"){
            pricePerDay = 100
        } else if ( package == "noEquipment" && vipStatus == "yes"){
            pricePerDay = 80 * 0.95
        } else if ( package == "noEquipment" && vipStatus == "no"){
            pricePerDay = 80
        }
    break
    case "Borovets":
        if (package == "withEquipment" && vipStatus == "yes"){
            pricePerDay = 100 * 0.9
        } else if ( package == "withEquipment" && vipStatus == "no"){
            pricePerDay = 100
        } else if ( package == "noEquipment" && vipStatus == "yes"){
            pricePerDay = 80 * 0.95
        } else if ( package == "noEquipment" && vipStatus == "no"){
            pricePerDay = 80
        }
    break
    case "Varna":
        if (package == "withBreakfast" && vipStatus == "yes"){
            pricePerDay = 130 * 0.88
        } else if ( package == "withBreakfast" && vipStatus == "no"){
            pricePerDay = 130
        } else if ( package == "noBreakfast" && vipStatus == "yes"){
            pricePerDay = 100 * 0.93
        } else if ( package == "noBreakfast" && vipStatus == "no"){
            pricePerDay = 100
        }
    break
    case "Burgas":
        if (package == "withBreakfast" && vipStatus == "yes"){
            pricePerDay = 130 * 0.88
        } else if ( package == "withBreakfast" && vipStatus == "no"){
            pricePerDay = 130
        } else if ( package == "noBreakfast" && vipStatus == "yes"){
            pricePerDay = 100 * 0.93
        } else if ( package == "noBreakfast" && vipStatus == "no"){
            pricePerDay = 100
        }
    break;
}
let totalMoneyNeeded = pricePerDay * days
let citystatus = ""
let packagestatus = ""
let dayStatus = ""

    if ( days < 1){
        console.log("Days must be positive number!")
    } else {
        dayStatus = "ok"
    }
    if (city == "Burgas"){
        citystatus = "ok"
    } else if ( city == "Varna"){
        citystatus = "ok"
    } else if ( city == "Bansko"){
        citystatus = "ok"
    } else if (city == "Borovets"){
        citystatus = "ok"
    } else ( console.log("Invalid input!"))
    
    if (package == "noEquipment"){
        packagestatus = "ok"
    } else if ( package == "withEquipment"){
        packagestatus = "ok"
    } else if ( package == "noBreakfast"){
        packagestatus = "ok"
    } else if (package == "withBreakfast"){
        packagestatus = "ok"
    } else ( console.log("Invalid input!"))

    if (packagestatus == "ok" && citystatus == "ok" && dayStatus == "ok"){
        console.log(`The price is ${totalMoneyNeeded.toFixed(2)}lv! Have a nice time!`)
    }
       
    

}
travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])





// 1.	Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas")
// 2.	Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast")
// 3.	Притежание на VIP отстъпка - текст с възможности  "yes" или "no"
// 4.	Дни за престой - цяло число в интервала [1 … 10000]
