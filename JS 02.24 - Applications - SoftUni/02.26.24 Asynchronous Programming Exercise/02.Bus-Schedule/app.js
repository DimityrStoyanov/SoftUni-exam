function solve() {

    const departBtnRef = document.getElementById(`depart`);
    const arriveBtnRef = document.getElementById(`arrive`);
    const spanResultRef = document.querySelector(`.info`);

    const url = `http://localhost:3030/jsonstore/bus/schedule/`

    const stops = {
        currentStop: ``,
        nextStop: `depot`
    }


    async function depart() {
        let response = await fetch(url + stops.nextStop);
        let data = await response.json();
        
        stops.currentStop = data.name
        stops.nextStop = data.next

        spanResultRef.textContent = `Next stop ${stops.currentStop}`
        departBtnRef.disabled = true;
        arriveBtnRef.disabled = false;
    }

    function arrive() {
        spanResultRef.textContent = `Arriving at ${stops.currentStop}`
        departBtnRef.disabled = false;
        arriveBtnRef.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();