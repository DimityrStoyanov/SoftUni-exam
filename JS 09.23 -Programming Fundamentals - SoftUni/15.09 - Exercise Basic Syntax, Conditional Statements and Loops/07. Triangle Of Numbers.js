function triangle(num) {

    for (let i = 1; i <= num; i++) {
        let result = ``
        for (let b = 1; b <= i; b++) {
            result += i + ` `


        }
        console.log(result)
    }


}
triangle(6)