async function getInfo() {

    const input = document.getElementById(`stopId`);
    const stopID = input.value;

    const stopNameReff = document.getElementById(`stopName`);
    const busesReff = document.getElementById(`buses`);

    stopNameReff.value = ``;
    busesReff.innerHTML = ``;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    try {
        const request = await fetch(url);
        const data = await request.json();
        stopNameReff.textContent = data.name;        // Вземаме от обекта .name където е името на БУСА
        appendChild(Object.entries(data.buses));   //викаме функция на която даваме обекта в МАСИВ
    } catch (error) {
        stopNameReff.textContent = `Error`;
    }


    // const request = fetch(url);
    // request.then(res => {
    //     res.json().then(data => {
    //         stopNameReff.textContent = data.name;
    //         appendChild(Object.entries(data.buses));
    //     }).catch(e => {
    //         stopNameReff.textContent = `Error`
    //     })
    // }).catch(err => {
    //     stopNameReff.textContent = `Error`
    // })

    function appendChild(data) {
        for (let [bus, time] of data) {
            let li = document.createElement(`li`);
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesReff.appendChild(li);
        }
    }
}