function sumTable() {
    let table = document.querySelectorAll("tbody tr")
    let sum = 0;

    for (let element of table) {
        let info = element.children
        let num = Number(info[1].innerText)
        if (isNaN(num)) {
        } else {
            sum += num
        }
    }
    document.getElementById("sum").innerText = sum;

}
