function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById(`searchField`);
      let searchBtn = document.getElementById(`searchBtn`)
      let table = Array.from(document.querySelectorAll(`tbody tr`));

      for (let element of table) {
         let row = Array.from(element.querySelectorAll("td"))
         for (let data of row) {
            if (data.textContent.includes(searchField.value)) {
               element.classList.add("select")
               break;
            } else {
               element.classList.remove("select")
            }
         }
      }
      searchField.value = ``
   }
}