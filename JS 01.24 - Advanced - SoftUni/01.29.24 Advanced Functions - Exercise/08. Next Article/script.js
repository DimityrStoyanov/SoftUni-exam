function getArticleGenerator(articles) {
    let arr = Array.from(articles)
    let result = document.getElementById("content")

    function asd() {
        if (arr.length <= 0) {
            return;
        }
        let currentToken = arr.shift()
        let newItem = document.createElement("article");
        newItem.textContent = currentToken
        result.appendChild(newItem)

    }
    return asd
}
