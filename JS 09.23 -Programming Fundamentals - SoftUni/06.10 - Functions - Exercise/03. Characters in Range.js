function charactersInRange(num1, num2) {
    let code1 = num1.charCodeAt();
    let code2 = num2.charCodeAt();

    let minCode = Math.min(code1, code2)
    let maxCode = Math.max(code1, code2)

    let result = ``
    for (let curCode = minCode + 1; curCode < maxCode; curCode++) {
        let curChar = String.fromCharCode(curCode)
        result += curChar + ` `;
    }
    console.log(result);
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')