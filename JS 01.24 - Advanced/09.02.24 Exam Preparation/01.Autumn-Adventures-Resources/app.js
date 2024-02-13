window.addEventListener('load', solve);

function solve() {

    let timeInput = document.getElementById(`time`)
    let dateInput = document.getElementById(`date`)
    let placeInput = document.getElementById(`place`)
    let eventNameInput = document.getElementById(`event-name`)
    let emailInput = document.getElementById(`email`)
    let addButton = document.getElementById("add-btn")
    let upcomingList = document.getElementById("upcoming-list")
    let secondField = document.getElementById("second-field")

    addButton.addEventListener("click", getInfo)

    function getInfo() {
        if (!timeInput.value || !dateInput.value || !placeInput.value || !eventNameInput.value || !emailInput.value) {
            return
        }

        let createEvent = formular(
            timeInput.value,
            dateInput.value,
            placeInput.value,
            eventNameInput.value,
            emailInput.value
        )

        upcomingList.appendChild(createEvent)

        clearAndDisableFields();

        createEvent.querySelector(`.edit-btn`).addEventListener("click", () => { edintEvent(createEvent) })
        createEvent.querySelector(`.continue-btn`).addEventListener("click", () => { continueEvent(createEvent) })
    }

    function formular(timeInput, dateInput, placeInput, eventNameInput, emailInput) {
        const listItem = document.createElement('li');
        listItem.classList.add('event-content');
        listItem.innerHTML = `
            <article>
            <p>Begins: ${dateInput} at: ${timeInput}</p>
            <p>In: ${placeInput}</p>
            <p>Event: ${eventNameInput}</p>
            <p>Contact: ${emailInput}</p>
            </article>
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        `
        return listItem
    }

    function clearAndDisableFields() {
        timeInput.value = ``
        dateInput.value = ``
        placeInput.value = ``
        eventNameInput.value = ``
        emailInput.value = ``
        addButton.disabled = true;
    }

    function edintEvent(createEvent) {

        let date = upcomingList.querySelector(`article`).children[0].textContent.split(` `)[1]
        let time = upcomingList.querySelector(`article`).children[0].textContent.split(` `)[3]
        let place = upcomingList.querySelector(`article`).children[1].textContent.split(` `)[1]
        let event = upcomingList.querySelector(`article`).children[2].textContent.split(` `)[1]
        let email = upcomingList.querySelector(`article`).children[3].textContent.split(` `)[1]

        timeInput.value = time
        dateInput.value = date
        placeInput.value = place
        eventNameInput.value = event
        emailInput.value = email

        addButton.disabled = false; // връщам бутона отново да е активен

        upcomingList.removeChild(createEvent) // нулирам листа да е празен.

    }

    function continueEvent(createEvent) {

        secondField.appendChild(createEvent)
        upcomingList.removeChild(createEvent)
        addButton.disabled = false;

        createEvent.querySelector('.edit-btn').classList.replace('edit-btn', 'confirm-btn');
        createEvent.querySelector('.continue-btn').classList.replace('continue-btn', 'cancel-btn');

        createEvent.querySelector('.confirm-btn').textContent = 'Confirm';
        createEvent.querySelector('.confirm-btn').addEventListener('click', function () {
            confirmReservation(createEvent);
        })

        createEvent.querySelector('.cancel-btn').textContent = 'Cancel';
        createEvent.querySelector('.cancel-btn').addEventListener('click', function () {
            cancelReservation(createEvent);
        });


    }

    function confirmReservation(createEvent) {
        console.log(`mitko`);
    }

    function cancelReservation(createEvent) {
        console.log(`mitko`);
    }

}





