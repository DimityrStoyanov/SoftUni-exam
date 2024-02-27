function attachEvents() {
    const inputRef = document.getElementById(`location`);
    const submitBtnRef = document.getElementById(`submit`);
    const forecastRef = document.getElementById(`forecast`);
    const currentRef = document.getElementById(`current`);
    const upcomingRef = document.getElementById(`upcoming`);

    submitBtnRef.addEventListener("click", searchLocation)
    const url = `http://localhost:3030/jsonstore/forecaster/locations`

    let info = {
        "code": "",
        "name": ""
    }

    async function searchLocation() {
        currentRef.innerHTML = `<div class="label">Current conditions</div>`
        try {
            const response = await fetch(url);
            const data = await response.json();
            const cityName = inputRef.value
            const foundObject = data.find(obj => obj.name === cityName);
            info.code = foundObject.code
            info.name = foundObject.name

            currentContiont();
            nextThreeDays();
        } catch (error) {
            forecastRef.style.display = "block"
            const span = document.createElement("span");
            span.innerText = `Error`
            currentRef.appendChild(span)
        }
    }



    async function currentContiont() {
        forecastRef.style.display = "block"
        let url = `http://localhost:3030/jsonstore/forecaster/today/${info.code}`
        const request = await fetch(url);
        const data = await request.json()
        let condition = data.forecast.condition
        let low = data.forecast.low
        let high = data.forecast.high
        let name = data.name
        let symbol;

        if (condition == `Sunny`) {
            symbol = `☀`;
        } else if (condition == `Partly sunny`) {
            symbol = `⛅`;
        } else if (condition == `Overcast`) {
            symbol = `☁`;
        } else if (condition == `Rain`) {
            symbol = `☂`;
        }

        let div = document.createElement("div")
        div.innerHTML = `
        <div class="forecasts">
        <span class="condition symbol">${symbol}</span>
        <span class="condition">
            <span class="forecast-data">${name}</span>
            <span class="forecast-data">${low}°/${high}°</span>
            <span class="forecast-data">${condition}</span>
            </span>
            </div>
        `
        currentRef.appendChild(div);
    }

    async function nextThreeDays() {
        upcomingRef.innerHTML = `<div class="label">Three-day forecast</div>`
        forecastRef.style.display = "block"
        let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${info.code}`
        const request = await fetch(url);
        const data = await request.json()
        let div = document.createElement("div");
        div.className = "forecast-info"
        for (let currentDay of data.forecast) {
            let condition = currentDay.condition
            let low = currentDay.low
            let high = currentDay.high
            let symbol;
            if (condition == `Sunny`) {
                symbol = `☀`;
            } else if (condition == `Partly sunny`) {
                symbol = `⛅`;
            } else if (condition == `Overcast`) {
                symbol = `☁`;
            } else if (condition == `Rain`) {
                symbol = `☂`;
            }
            let span = document.createElement("span");
            span.className = "upcoming"
            span.innerHTML = `
                <span class="symbol">${symbol}</span>
                <span class="forecast-data">${low}°/${high}°</span>
                <span class="forecast-data">${condition}</span>
            `
            div.appendChild(span)
        }

        upcomingRef.appendChild(div);

    }
}

attachEvents();