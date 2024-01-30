function solve() {
  let textArea = document.getElementById("input").value;
  let output = document.getElementById("output")

  let sentences = textArea.split(`.`);
  let counter = 0;
  let paragraph = [];
  let result = [];
  for (let num of sentences) {
    paragraph.push(num)
    counter++
    if (counter % 3 === 0 || counter == sentences.length) {
      result.push(paragraph)
      paragraph = [];
    }
  }

  let finalResult = [];
  for (let asd of result) {
    if (asd.length < 3) {
      let mitko = `<p>${asd.join(`.`)}</p>`
      finalResult.push(mitko)
    } else {
      let mitko = `<p>${asd.join(`.`)}.</p>`
      finalResult.push(mitko)
    }
  }
  output.innerHTML = finalResult.join(``)
}