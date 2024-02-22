window.addEventListener("load", solve);

function solve() {


  const inputForm = document.querySelector(".snowman");
  const inputPreview = document.querySelector(".snowman-preview ");
  const inputSnowList = document.querySelector(".snow-list");
  const inputMain = document.querySelector(".body")
  const lastImg = document.getElementById("back-img")

  const inputNameReff = document.getElementById("snowman-name");
  const inputHeightReff = document.getElementById("snowman-height");
  const inputLocationReff = document.getElementById("location");
  const inputCreatorNameReff = document.getElementById("creator-name");
  const inputSpecialReff = document.getElementById("special-attribute");

  const addButtonReff = document.querySelector(".add-btn");
  addButtonReff.addEventListener("click", addButton)

  function addButton(e) {
    e.preventDefault()
    let inputName = inputNameReff.value;
    let inputHeight = inputHeightReff.value;
    let inputLocation = inputLocationReff.value;
    let inputCreatorName = inputCreatorNameReff.value;
    let inputSpecial = inputSpecialReff.value;

    if (!inputName || !inputHeight || !inputLocation || !inputCreatorName || !inputSpecial) {
      return
    }

    let tokenReff = infoList(inputName, inputHeight, inputLocation, inputCreatorName, inputSpecial)
    inputPreview.appendChild(tokenReff);

  }

  function infoList(inputName, inputHeight, inputLocation, inputCreatorName, inputSpecial) {
    let li = document.createElement("li");
    li.className = "snowman-info"
    li.innerHTML =
      `<article>
    <p>Name: ${inputName}</p>
    <p>Height: ${inputHeight}</p>
    <p>Location: ${inputLocation}</p>
    <p>Creator: ${inputCreatorName}</p>
    <p>Attribute: ${inputSpecial}</p>
    </article>`

    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn"
    editBtn.innerText = "Edit"
    editBtn.addEventListener("click", editInfo);


    let nextBtn = document.createElement("button");
    nextBtn.className = "next-btn"
    nextBtn.innerText = "Next"
    nextBtn.addEventListener("click", nextClickButton);


    let div = document.createElement("div");
    div.className = "btn-container"

    div.appendChild(editBtn);
    div.appendChild(nextBtn);

    li.appendChild(div);

    addButtonReff.disabled = true;
    inputForm.reset()


    return li;
  }

  function editInfo(e) {
    let tokenPreview = e.currentTarget.parentElement.parentElement.children[0]
    let infoPreview = tokenPreview.children

    let inputName = infoPreview[0].innerText.split(`: `)[1]
    let inputHeight = infoPreview[1].innerText.split(`: `)[1]
    let inputLocation = infoPreview[2].innerText.split(`: `)[1];
    let inputCreatorName = infoPreview[3].innerText.split(`: `)[1];
    let inputSpecial = infoPreview[4].innerText.split(`: `)[1];

    inputNameReff.value = inputName
    inputHeightReff.value = inputHeight
    inputLocationReff.value = inputLocation
    inputCreatorNameReff.value = inputCreatorName
    inputSpecialReff.value = inputSpecial

    addButtonReff.disabled = false;

    inputPreview.innerHTML = ""
  }

  function nextClickButton(e) {
    let tokenPreview = e.currentTarget.parentElement.parentElement.children[0]
    let infoPreview = tokenPreview.children

    let inputName = infoPreview[0].innerText.split(`: `)[1]
    let inputHeight = infoPreview[1].innerText.split(`: `)[1]
    let inputLocation = infoPreview[2].innerText.split(`: `)[1];
    let inputCreatorName = infoPreview[3].innerText.split(`: `)[1];
    let inputSpecial = infoPreview[4].innerText.split(`: `)[1];

    let li = document.createElement("li");
    li.className = "snowman-content"
    li.innerHTML =
      `<article>
    <p>Name: ${inputName}</p>
    <p>Height: ${inputHeight}</p>
    <p>Location: ${inputLocation}</p>
    <p>Creator: ${inputCreatorName}</p>
    <p>Attribute: ${inputSpecial}</p>
    <button class="send-btn">Send</button>
    </article>`

    inputPreview.innerHTML = ""

    inputSnowList.appendChild(li);
    let send = document.querySelector(".send-btn")
    send.addEventListener("click", sendBtn)
  }

  function sendBtn(e) {
    inputMain.innerHTML = " "
    lastImg.style.display = "block"
    inputMain.innerHTML =
      `<h1>Snow Showdown</h1>
    <script src="app.js"></script>
    <img id=back-img" src="./style/images/back-Snowman.png" alt>
    <button class="back-btn">Back</button>`

    toNewpage = document.querySelector(".back-btn")
    toNewpage.addEventListener("click", refreshPage)
  }

  function refreshPage(e) {
    location.reload()

  }
}
