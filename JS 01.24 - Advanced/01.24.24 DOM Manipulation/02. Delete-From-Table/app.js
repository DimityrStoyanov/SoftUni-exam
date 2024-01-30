function deleteByEmail() {
    console.log('TODO:..');
    let input = document.querySelector(`input[name="email"]`);
    let result = document.querySelector(`#result`)
    let rows = document.querySelectorAll(`#customers tbody tr`);

    for (let row of rows) {
        let colums = row.children[1];
        if (colums.innerText == input.value) {
            row.remove();
            input.value = ``
            result.innerText = `Deleted.`
        }  else {
            result.innerText = "Not found." 
        }
    }

}