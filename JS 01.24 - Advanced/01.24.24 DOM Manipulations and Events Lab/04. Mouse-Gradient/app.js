function attachGradientEvents() {

    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", mouseMove);
    let output = document.getElementById("result");

    function mouseMove(event) {
        let num = event.offsetX // The X coordinate of the mouse pointer
        let secondNum = event.target.clientWidth // Дължината на елемента 
        let result = Math.trunc((num / secondNum) * 100)
        output.innerText = `${(result)}%`
    }

}