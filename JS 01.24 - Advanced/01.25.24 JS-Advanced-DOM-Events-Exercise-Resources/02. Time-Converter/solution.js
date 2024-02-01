function attachEventsListeners() {

    const buttons = Array.from(document.querySelectorAll("input[type='button']"))

    for (let button of buttons) {
        button.addEventListener("click", convert)
    }

    function convert(event) {
        let value = event.currentTarget.parentElement.children[1];
        let input = Number(value.value)
        let unit = value.id

        switch (unit) {
            case "days": newValue(input); break
            case "hours": newValue(input / 24); break
            case "minutes": newValue(input / 24 / 60); break
            case "seconds": newValue(input / 24 / 60 / 60); break
        }

        function newValue(days) {
            inputs = document.querySelectorAll("input[type='text']")
            inputs[0].value = days
            inputs[1].value = days * 24
            inputs[2].value = days * 24 * 60
            inputs[3].value = days * 24 * 60 * 60
        }
    }

    console.log('TODO:..');
}