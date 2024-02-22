function encodeAndDecodeMessages() {

    let allArea = Array.from(document.querySelectorAll('main'))

    let firstTextArea;
    let firstButton;

    let secondTextArea;
    let secondButton;


    for (let token of allArea) {
        firstTextArea = token.children[0].children[1];
        firstButton = token.children[0].children[2];

        secondTextArea = token.children[1].children[1];
        secondButton = token.children[1].children[2];

        firstButton.addEventListener("click", codeText);
        secondButton.addEventListener("click", decodeText);


    }
    function codeText(event) {
        let text = firstTextArea.value
        let result = ''
        for (let i = 0; i < text.length; i++) {
            let convertor = Number(text.charCodeAt(i)) + 1;
            let charCode = String.fromCharCode(convertor)
            result += charCode

        }
        secondTextArea.value = result
        firstTextArea.value = ''

    }

    function decodeText(event) {
        let text = secondTextArea.value
        let result = ''
        for (let i = 0; i < text.length; i++) {
            let convertor = Number(text.charCodeAt(i)) - 1;
            let charCode = String.fromCharCode(convertor)
            result += charCode

        }
        secondTextArea.value = result
    }


}