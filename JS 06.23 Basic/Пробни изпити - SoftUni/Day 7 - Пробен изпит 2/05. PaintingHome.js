function paintingHome(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let percenteNotForPaint = Number(input[2]);

    let area = Math.ceil((height * width)* 4) * ((100 - percenteNotForPaint)/100);
    let job = 0;

    for ( let i = 3; i < input.length; i++){
        if ( input[i] == "Tired!") {
            console.log(`${area - job} quadratic m left.`)
            break;
        }
        let currentJob = Number(input[i]);
        job += currentJob
        
    }
    if ( job > area){
        console.log(`All walls are painted and you have ${job - area} l paint left!`)
    } else if ( job == area) {
        console.log(`All walls are painted! Great job, Pesho!`)
    }
    
    
}
paintingHome(["2",
"3",
"25",
"6",
"7",
"8"])


// 1. Височина на стената - цяло число [0… 100]
// 2. Ширина на стената - цяло число [0… 100]
// 3. Процент от общата площ на стените, който няма да бъде боядисан - цяло число [5… 95]
// На следващите редове до получаване на командата "Tired!" или докато не бъдат
// боядисани всички стени, се чете по едно число:
// • Литри боя – цяло число [0…100]:
// Забележка: Площта за боядисване да бъде закръглена нагоре до най-близкото цяло число.