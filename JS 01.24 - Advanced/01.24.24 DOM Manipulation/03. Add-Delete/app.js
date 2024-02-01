
function addItem() {

    let input = document.getElementById("newItemText")
    if (input.value.length == 0) {
        return;
    }

    const liElement = document.createElement(`li`)
    liElement.textContent = input.value

    const delButton = document.createElement(`a`);
    delButton.textContent = "[Delete]";
    delButton.href = `#`;
    delButton.addEventListener(`click`, onDelete);
    liElement.appendChild(delButton)

    const items = document.getElementById("items");
    items.appendChild(liElement)

    function onDelete(event) {
        let delButton = event.target;
        let liElement = delButton.parentElement;
        liElement.remove()

    }

    input.value = ``

}