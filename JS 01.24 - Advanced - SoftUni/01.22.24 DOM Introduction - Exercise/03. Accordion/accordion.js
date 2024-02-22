function toggle() {
    let button = document.getElementsByClassName(`button`)[0];
    if (button.innerText == "More") {
        button.textContent = "Less";
        let text = document.getElementById(`extra`)
        text.style.display = "block"
    } else if (button.innerText == "Less") {
        button.textContent = "More"
        let text = document.getElementById(`extra`)
        text.style.display = "none"
    }
}

