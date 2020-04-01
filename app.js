const testBtn = document.getElementById("test");
const statisticsBtn = document.getElementById("statistics");
const synptomsBtn = document.getElementById("synptoms");
const contactsBtn = document.getElementById("usefulcontacts");
const showInfo = document.getElementById("show-info");
const description = document.getElementById('description');

statisticsBtn.addEventListener('click', () => {
    showStatistics();
    statisticsBtn.classList.add('selected');
})

function showStatistics() {
    if (showInfo.children.length <= 0) {
        description.classList.add('hide');
        let countryInput = document.createElement("div");
        showInfo.classList.remove("hide");
        countryInput.innerHTML = `
        Search Stats
        <input id ="search-input" type="text" placeholder='Country Name...'>
        <button id="searchBtn"> Search </button>
        ` 
        countryInput.setAttribute("class", "countryClass")
        showInfo.appendChild(countryInput);
 
        let activateBtn = document.getElementById("searchBtn");
        activateBtn.addEventListener("click", () => {
            countryInput.classList.add("hide");
            displayData();
        });
        document.getElementById('search-input').addEventListener("keypress", e => {
            if (e.key === "Enter") {
                countryInput.classList.add("hide");
                displayData();
            }
        });
    }

function displayData() {
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${document.getElementById('search-input').value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "50ecc69f3bmshd318dabf46ee406p1f08e8jsn0caca47eac27"
	}
})
    .then(res => res.json())
    .then(data => {
        let displayStatistics = document.createElement("div")
        displayStatistics.innerHTML = `
        <div class='api-info'>
            <h1 id='country-name'>Covid-19 stats from ${document.getElementById('search-input').value.toUpperCase()}</h1>
            <div class='gap'> ${'Date:'.bold()} ${data.response[0].day}</div>
            <div class='gap'>${'Total Cases:'.bold()} ${String(data.response[0].cases.total)}</div>
            <div class='gap'>${'Today Cases:'.bold()} ${String(data.response[0].cases.new)} </div>
            <div class='gap'>${'Total Deaths:'.bold()} ${String(data.response[0].deaths.total)}</div>
            <div class='gap'>${'Today Deaths:'.bold()} ${String(data.response[0].deaths.new)}</div>
        </div>
        `
        showInfo.appendChild(displayStatistics)
})}}