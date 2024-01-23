function solve() {
  const text = document.getElementById(`text`).value;
  const name = document.getElementById(`naming-convention`).value;
  let result = ``

  if (name === "Camel Case") {
    let lowerText = text.toLowerCase();
    let token = lowerText.split(` `);
    result = token.shift()
    for ( let element of token){
      let firstSymb = (element[0]).toUpperCase()
      let lastSymbs = (element.substring(1)).toLowerCase()
      result += firstSymb + lastSymbs
    };


  } else if (name == `Pascal Case`) {
    let lowerText = text.toLowerCase();
    let token = lowerText.split(` `);
    for ( let element of token){
      let firstSymb = (element[0]).toUpperCase()
      let lastSymbs = (element.substring(1)).toLowerCase()
      result += firstSymb + lastSymbs
    };
  } else {
    result = `Error!`
  }
  document.getElementById(`result`).textContent = result

}