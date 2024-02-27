async function loadRepos() {
	const search = document.getElementById(`username`).value;
	const url = `https://api.github.com/users/${search}/repos`

	const repos = await fetch(url)
	console.log(repos)
}