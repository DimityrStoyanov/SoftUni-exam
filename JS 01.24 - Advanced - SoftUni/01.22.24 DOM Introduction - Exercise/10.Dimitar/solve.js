function buton1() {

    let info = (document.querySelectorAll("div p"));
    let result = [];
    for (let tokens of info) {
        result.push(tokens.textContent);
    }

    let text = result[0]
    document.getElementById("textArea").value = text

}

function buton2() {

    let info = (document.querySelectorAll("div p"));
    let result = [];
    for (let tokens of info) {
        result.push(tokens.textContent);
    }

    let text = result[1]
    document.getElementById("textArea").value = text

}
function buton3() {

    let info = (document.querySelectorAll("div p"));
    let result = [];
    for (let tokens of info) {
        result.push(tokens.textContent);
    }

    let text = result[2]
    document.getElementById("textArea").value = text

}


