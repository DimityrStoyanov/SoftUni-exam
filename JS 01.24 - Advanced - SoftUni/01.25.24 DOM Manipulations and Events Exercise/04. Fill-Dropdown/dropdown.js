function addItem() {
    let newItemText = document.getElementById("newItemText");
    let newItemValue = document.getElementById("newItemValue");


    let some = Array.from(document.querySelectorAll('input[type="button"]'))

    if (newItemText.value.length == 0 && newItemValue.value.length == 0) {
        return
    } else {
        let newOption = `${newItemText.value} ${newItemValue.value}`
        let menu = document.getElementById("menu");
        let option = document.createElement("option");
        option.innerText = newOption
        menu.appendChild(option)
        document.getElementById("newItemText").value = ""
        document.getElementById("newItemValue").value = ""
    }
}