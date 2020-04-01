const testBtn = document.getElementById("test");
const stadisticsBtn = document.getElementById("stadistics");
const synptomsBtn = document.getElementById("synptoms");
const contactsBtn = document.getElementById("usefulcontacts");
const showInfo = document.getElementById("show-info");



stadisticsBtn.addEventListener('click', ()=>{
    showstadistics();
})

function showstadistics(){
    let countryInput = document.createElement("div");
    showInfo.classList.remove("hide");
    countryInput.innerHTML = `
    From which country do you want to know statistics? <input id ="country" type="text">
    <button id="stadisticsBtn"> Search </button>` 
    countryInput.setAttribute("class", "countryClass")
    showInfo.appendChild(countryInput);
 
    const activateBtn = document.getElementById("stadisticsBtn");
    activateBtn.addEventListener("click", () => {
        countryInput.classList.add("hide");
        displayData()

    })

    function displayData() {
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "50ecc69f3bmshd318dabf46ee406p1f08e8jsn0caca47eac27"
	}
})
    .then(res => res.json())
    .then(data => {
        let displayStadistics = document.createElement("div")
        displayStadistics.innerHTML = ` <h1> Actual Stadistics Of Covid-19 for ${country.value}</h1><br>
                                         <div id="cases">Total Cases: ${data.response[0].cases.total}</div><br>
                                         <div id="new-cases"> Today New Cases:  ${data.response[0].cases.new} </div>
                                         <div id="deaths"> Total Deaths: ${data.response[0].deaths.total}</div><br>
                                         <div id="new-deaths"> Today New Deaths: ${data.response[0].deaths.new}</div>
                                         <div id="day"> Day: ${data.response[0].day}</div><br>
                                         <div id="time"> Time: ${data.response[0].time}</div> `
        showInfo.appendChild(displayStadistics)
    })}}