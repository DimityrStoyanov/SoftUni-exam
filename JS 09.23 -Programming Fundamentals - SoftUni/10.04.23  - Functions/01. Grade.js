function printHeader(){
    console.log(`-------@-------`)
    console.log(`--Crtificate--`)
    console.log(`---- --@--- ---`)
}

function formatGrade(grade){
if ( grade  < 3){
    console.log(`Fail (2)`)
} else if ( grade >= 3 && grade < 3.50){
    console.log(`Poor (${grade.toFixed(2)})`)
}else if ( grade >= 3.5 && grade < 4.50){
    console.log(`Good (${grade.toFixed(2)})`)
}else if ( grade >= 4.5 && grade < 5.50){
    console.log(`Very good (${grade.toFixed(2)})`)
}else if ( grade >= 5.5 && grade <= 6){
    console.log(`Excellent (${grade.toFixed(2)})`)
}

}


function readName(first, second){
    console.log(first + " " + second)
}

function printCertificate(num, arr){
    if (num < 3){
        return console.log(`Student does not qualify.`)
    }
    printHeader();
    readName(arr[0],arr[1])
    formatGrade(num)
}

printCertificate(2,["Dimitar", "Stoyanov"])