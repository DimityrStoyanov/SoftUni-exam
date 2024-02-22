function solve(text) {
    let half = text.length / 2
    let firstHalf =[]
    let secondHalf =[]
    let arr = text.split(``)
    for (let i = 0; i < half; i++) {
        firstHalf.push(arr[i])
        secondHalf.push(arr[i+ half])
    }
    console.log(firstHalf.reverse().join(``));
    console.log(secondHalf.reverse().join(``));
}

solve(`tluciffiDsIsihTgnizamAoSsIsihT`)
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')