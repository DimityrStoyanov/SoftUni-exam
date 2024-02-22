window.addEventListener('load', solve);

function solve() {

    let inputButton = document.getElementById("next-btn")
    inputButton.addEventListener("click", onNextClick);

    //Когато се взема селектор по клас се слага с точка.
    let infoList = document.querySelector(`.info-list`)
    let confirmList = document.querySelector(`.confirm-list`)

    let input = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        dateIn: document.getElementById("date-in"),
        dateOut: document.getElementById("date-out"),
        peopleCount: document.getElementById("people-count")
    }

    function onNextClick(event) {
        event.preventDefault();


        //Първо се валидират всички входни данни. В сличая ако е празен стринг, просто return-ва.
        // Може да се позлва и !input.firstName.value и т.н. , защото тогава ще е false. 
        if (
            input.firstName.value == `` ||
            input.lastName.value == `` ||
            input.dateIn.value == `` ||
            input.dateOut.value == `` ||
            input.peopleCount.value == ``
        ) {
            return
        }

        //Вземат се стойностите от обекта с input.
        let firstName = input.firstName.value;
        let lastName = input.lastName.value;
        let dateIn = input.dateIn.value;
        let dateOut = input.dateOut.value;
        let peopleCount = Number(input.peopleCount.value);

        // Проверка за това дали датата на нанасяне е след датата на изнасяне.
        if ((new Date(dateIn)).getTime() >= (new Date(dateOut)).getTime()) {
            console.log(`Датата.`)
            return;

        }
        // сега се ресетват стойностите в инпут полетата, след като всичко е въведено правилно ,да се зануляват.
        input.firstName.value = ``;
        input.lastName.value = ``;
        input.dateIn.value = ``;
        input.dateOut.value = ``;
        input.peopleCount.value = ``;

        // втория вариант е да се вземе цялата форма или с ID или с Parent и да се ползва form reset.
        // inputButton.parentElement.reset;
        inputButton.disabled = true;

        let result = createPreview(firstName, lastName, dateIn, dateOut, peopleCount)
        infoList.appendChild(result)
        //След като се извика функцията и се запазва в променливата "result", се закача към селектора за резултат.
        // InfoList е създаден в началото, за да вземе сектора в който ще се изпълни "result".
        // В result има функция, която създава елементи с информация от input-a/
    }

    function createInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
        let element = e("li");
        element.className = "reservation-content"
        // Създаваме първия Li, който е най- отвън на дървото.

        let article = e("article")
        article.appendChild(e(`h3`, `Name: ${firstName} ${lastName}`));
        article.appendChild(e(`p`, `From date: ${dateIn}`));
        article.appendChild(e(`p`, `To date: ${dateOut}`));
        article.appendChild(e(`p`, `For ${peopleCount} people`));
        element.appendChild(article);

        return element
    }
    function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {

        let element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);
        let btnEdit = e(`button`, `Edit`)
        btnEdit.className = `edit-btn`
        btnEdit.addEventListener("click", () => onEditClick(firstName, lastName, dateIn, dateOut, peopleCount))

        let btnContinue = e(`button`, `Continue`)
        btnContinue.className = `continue-btn`
        btnContinue.addEventListener("click", onContinueClick.bind(null, firstName, lastName, dateIn, dateOut, peopleCount))

        element.appendChild(btnEdit);
        element.appendChild(btnContinue);

        return element;
    }

    function onEditClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        input.firstName.value = firstName
        input.lastName.value = lastName
        input.dateIn.value = dateIn
        input.dateOut.value = dateOut
        input.peopleCount.value = peopleCount

        inputButton.disabled = false;
        infoList.replaceChildren();
    }

    function onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount) {

        let result = createConformation(firstName, lastName, dateIn, dateOut, peopleCount)
        confirmList.appendChild(result)
        infoList.replaceChildren();
    }

    function createConformation(firstName, lastName, dateIn, dateOut, peopleCount) {
        let element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        let confirm = e(`button`, `confirm`)
        confirm.className = `confirm-btn`
        let cancel = e(`button`, `cancel`)
        btnContinue.className = `cancel-btn`
        confirm.addEventListener("click", () => onEditClick(firstName, lastName, dateIn, dateOut, peopleCount))

        element.appendChild(confirm);
        element.appendChild(cancel);

        return element;
    }

    function e(type, content) {
        let element = document.createElement(type)

        if (content) {
            element.textContent = content;
        }

        return element;
    }
}





