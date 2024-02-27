async function loadRepos() {

   const div = document.getElementById("res");

   const url = "https://api.github.com/users/testnakov/repos"
   const response = await fetch(url);
   const repos = await response.text();

   div.textContent = repos
}