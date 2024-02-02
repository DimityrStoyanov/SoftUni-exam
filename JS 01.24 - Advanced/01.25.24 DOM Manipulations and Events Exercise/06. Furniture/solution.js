function solve() {

  let tableWithProduct = document.querySelector("tbody")
  let input = document.querySelector('#exercise textarea');

  let buttons = Array.from(document.querySelectorAll("button"));
  let generateButton = buttons[0]
  let buyButton = buttons[1]
  generateButton.addEventListener("click", takeInfo);
  buyButton.addEventListener("click", takeResult);

  function takeInfo(event) {
    let json = input.value;
    let arr = JSON.parse(json);

    for (let product of arr) {
      let tr = document.createElement('tr')
      let td = document.createElement('td')
      let image = document.createElement('img');

      image.src = product.img

      td.appendChild(image)
      tr.appendChild(td)
      tableWithProduct.appendChild(tr)

    }


  }

  function takeResult(event) {

  }


}

//[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]