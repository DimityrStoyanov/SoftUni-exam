function extract(content) {
    //
    let string = document.getElementById("content").innerText
    let reg = /\((.*?)\)/g
    let matches = string.match(reg)
    let result = []
    for (let element of matches) {
        let asd = element.substring(1, element.length - 1);
        result.push(asd)

    }
    document.getElementById("content").innerText = result.join(`; `)
}