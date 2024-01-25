function search() {
   let town = Array.from(document.querySelectorAll('#towns li'));
   let search = document.getElementById(`searchText`).value;
   let result = document.getElementById(`result`)
   let counter = 0;

   town.forEach(element => {
      if (element.innerText.includes(search)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++
      } else {
         element.style.fontWeight = '';
         element.style.textDecoration = '';
      }
   });
   result.textContent = `${counter} matches found`
}
