function addItem() {
    console.log('TODO:..');
    let items = document.getElementById("items");
    let input = document.getElementById("newItemText").value;
    let inputValue = input
    let liElement = document.createElement(`li`)
    items.appendChild(liElement).innerText = inputValue
    document.getElementById("newItemText").value = ``
     

}