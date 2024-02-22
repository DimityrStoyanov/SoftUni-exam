window.addEventListener('load', solve);

function solve() {

    const containerTextReff = document.querySelector(`form`);
    const containerTicketPreviewReff = document.querySelector(`.ticket-info-list`)
    const containerConfirmReff = document.querySelector(`.confirm-ticket`)
    const firstNameReff = document.getElementById("first-name");
    const lastNameReff = document.getElementById("last-name");
    const peopleCountReff = document.getElementById("people-count");
    const forDateReff = document.getElementById("from-date");
    const daysCountReff = document.getElementById("days-count");
    const nextBtnReff = document.getElementById("next-btn")
    const boddy = document.getElementById("body")


    nextBtnReff.addEventListener("click", nextBtn)


    function nextBtn(e) {
        e.preventDefault()

        let firstName = firstNameReff.value;
        let lastName = lastNameReff.value;
        let peopleCount = peopleCountReff.value;
        let forDate = forDateReff.value;
        let daysCount = daysCountReff.value;

        if (!firstName || !lastName || !peopleCount || !forDate || !daysCount) {
            return
        }

        let tokenReff = infoList(firstName, lastName, peopleCount, forDate, daysCount)
        containerTicketPreviewReff.appendChild(tokenReff);
    }


    function infoList(firstName, lastName, peopleCount, forDate, daysCount) {
        let li = document.createElement("li");
        li.className = "ticket"
        li.innerHTML =
            `<article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${forDate}</p>
        <p>For ${daysCount} days</p>
        <p>For ${peopleCount} people</p>
        </article>`

        nextBtnReff.disabled = true;
        containerTextReff.reset()

        let editBtn = document.createElement("button");
        editBtn.className = "edit-btn"
        editBtn.innerText = "Edit"

        let continueBtn = document.createElement("button");
        continueBtn.className = "continue-btn"
        continueBtn.innerText = "Continue"

        li.appendChild(editBtn);
        editBtn.addEventListener("click", editInfo);
        li.appendChild(continueBtn);
        continueBtn.addEventListener("click", continueInfo);

        //ДА се сложат бутони edit and continue
        return li
    }

    function editInfo(e) {
        let tokenPreview = e.currentTarget.parentElement.children[0]
        let infoPreview = tokenPreview.children
        let firstNameEdit = infoPreview[0].innerText.split(` `)[1]
        let lastNameEdit = infoPreview[0].innerText.split(` `)[2]
        let forDateEdit = infoPreview[1].innerText.split(` `)[2];
        let peopleCountEdit = infoPreview[2].innerText.split(` `)[1];
        let daysCountEdit = infoPreview[3].innerText.split(` `)[1];

        firstNameReff.value = firstNameEdit;
        lastNameReff.value = lastNameEdit;
        forDateReff.value = forDateEdit;
        peopleCountReff.value = peopleCountEdit;
        daysCountReff.value = daysCountEdit;

        nextBtnReff.disabled = false;

        containerTicketPreviewReff.innerHTML = ""

    }
    function continueInfo(e) {
        let tokenPreview = e.currentTarget.parentElement.children[0]
        let infoPreview = tokenPreview.children

        let li = document.createElement("li");
        li.className = "ticket-content"
        li.appendChild(tokenPreview);
        containerConfirmReff.appendChild(li)

        //TODO BUTTONS
        let confirmBtn = document.createElement("button");
        li.appendChild(confirmBtn);
        confirmBtn.className = "confirm-btn"
        confirmBtn.innerText = "Confirm"
        confirmBtn.addEventListener("click", confirmInfo)

        let cancelBtn = document.createElement("button");
        li.appendChild(cancelBtn)
        cancelBtn.className = "cancel-btn";
        cancelBtn.innerText = "Cancel"
        cancelBtn.addEventListener("click", cancelInfo)

        containerTicketPreviewReff.innerHTML = ""


    }

    function cancelInfo(e) {


        containerTicketPreviewReff.innerHTML = ""
        containerConfirmReff.innerHTML = ""
        nextBtnReff.disabled = false;


    }

    function confirmInfo(e) {
        boddy.innerHTML =
            `<h1 id="thank-you">Thank you, have a nice day!</h1>
            <button id="back-btn">Back</button>`

        let backbtn = document.getElementById("back-btn");
        backbtn.addEventListener("click", refreshPage)

    }

    function refreshPage(e) {
        location.reload()
    }

}




