function notify(message) {
  let theplace = document.getElementById("notification")
  theplace.textContent = message
  theplace.style.display = "block";
  theplace.addEventListener("click", () => {
    theplace.style.display = "none";
  })


}