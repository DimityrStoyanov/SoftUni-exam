function trekking(input){
    let groupNmb = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;


    for ( let i = 1; i <= groupNmb; i ++){
       let n = Number(input[i])
        if (n <= 5) {
            musala = musala + n
        } else if ( n >=6 && n <=12){
            monblan = monblan + n
        } else if ( n >= 13 && n <= 25){
            kilimandjaro = kilimandjaro + n
        } else if (n >= 26 && n <= 40){
            k2 = k2 + n;
        }else {
            everest = everest + n
        }
    }
    let totalvisitors = musala + monblan + kilimandjaro + k2 + everest
    console.log(`${(musala / totalvisitors * 100).toFixed(2)}%`)
    console.log(`${(monblan / totalvisitors * 100).toFixed(2)}%`)
    console.log(`${(kilimandjaro / totalvisitors * 100).toFixed(2)}%`)
    console.log(`${(k2 / totalvisitors * 100).toFixed(2)}%`)
    console.log(`${(everest / totalvisitors * 100).toFixed(2)}%`)
    

}
trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
