function create(words) {

   for (let word of words) {
      let divElement = document.createElement(`div`);
      let divContent = document.getElementById("content");
      divContent.appendChild(divElement);
      let pElement = document.createElement("p");
      divElement.appendChild(pElement);
      divElement.addEventListener("click", content)
      pElement.innerText = word
      pElement.style.display = "none"
      function content(event) {
         pElement.style.display = "block"
         return;
      }
   }
}