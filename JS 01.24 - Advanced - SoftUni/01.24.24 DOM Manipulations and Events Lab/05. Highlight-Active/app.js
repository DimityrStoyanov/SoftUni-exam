function focused() {
    let input = document.querySelectorAll("input");

    for (let asd of input) {
        asd.addEventListener("focus", onFocus)

    }
    function onFocus(event) {
        let currentInput = event.target
        let parrent = currentInput.parentElement
        parrent.classList.add('focused')
        return
        
    }


}