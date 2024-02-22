function validate() {
    let input = document.getElementById("email");
    input.addEventListener('change', onChange)


    function onChange(event) {
        let email = event.target.value;
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/
        if (pattern.test(email)) {
            event.target.className = '';
        } else {
            event.target.className = 'error';
        }
    }
}