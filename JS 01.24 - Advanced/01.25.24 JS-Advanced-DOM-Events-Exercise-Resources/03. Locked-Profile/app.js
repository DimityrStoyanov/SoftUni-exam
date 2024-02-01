function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));

    for (let button of buttons) {

        button.addEventListener("click", onClick);
    }

    function onClick(event) {
        let parent = Array.from(event.currentTarget.parentElement.children);
        let lock = parent[2];
        let unlock = parent[4];
        let hidenInfo = parent[9]
        let status = parent[10].innerText;

        if (lock.checked == true) {
            return
        } else if (unlock.checked == true) {
            if (status == "Hide it") {
                hidenInfo.style.display = "none"
                parent[10].innerText = "Show more"
            } else if (status == "Show more") {
                hidenInfo.style.display = "block"
                parent[10].innerText = "Hide it"
            }
        }
    }
}