const testBtn = document.getElementById("test");
const stadisticsBtn = document.getElementById("stadistics");
const symptomsBtn = document.getElementById("symptoms");
const symptomsDiv = document.getElementById("symptomsdiv");
const resourcesBtn = document.getElementById("resources-btn");
const showStadisticsDiv = document.getElementById("showstadistics");
const resourcesDiv = document.getElementById("resources-Div");
const testsTitle = document.getElementById("tests-title");
const goFirstTest = document.getElementById("goFirstTest");
const goSecondTest = document.getElementById("goSecondTest");
const firstTestDiv = document.getElementById("1sttest-div");
const secondTestDiv = document.getElementById("2ndtest-div");
const solutions1stTest = document.getElementById("showAnswers1stTest");
const solutions2ndTest = document.getElementById("showAnswers2ndTest");
const question11 = document.getElementById("question1-1");
const question12 = document.getElementById("question1-2");
const question13 = document.getElementById("question1-3");
const question14 = document.getElementById("question1-4");
const question15 = document.getElementById("question1-5");
const question16 = document.getElementById("question1-6");
const question17 = document.getElementById("question1-7");
const question21 = document.getElementById("question2-1");
const question22 = document.getElementById("question2-2");
const question23 = document.getElementById("question2-3");
const question24 = document.getElementById("question2-4");
const question25 = document.getElementById("question2-5");
const yesBtn = document.getElementsByClassName("yesBtn");
const noBtn = document.getElementsByClassName("noBtn");
const btnsDiv = document.getElementById("buttons");
const allBtns = Array.from(document.getElementsByClassName("btn"));
const restartBtn = document.getElementById("restartTestBtn");
let counter = 0;


stadisticsBtn.addEventListener('click', ()=>{
    restartCounter()
    restartBtn.classList.add("hide")
    symptomsDiv.classList.add("hide");
    firstTestDiv.classList.add("hide");
    testsTitle.classList.add("hide");
    resourcesDiv.classList.add("hide");
    showstadistics();
})

testBtn.addEventListener('click',()=>{
    restartCounter()
    symptomsDiv.classList.add("hide");
    resourcesDiv.classList.add("hide");
    showStadisticsDiv.classList.add("hide");
    showTests();
})
restartBtn.addEventListener("click", () => {
    restartTest();
})

symptomsBtn.addEventListener("click", () => {
    restartCounter()
    showStadisticsDiv.classList.add("hide");
    testsTitle.classList.add("hide");
    symptomsDiv.classList.remove("hide");
    resourcesDiv.classList.add("hide");

    restartBtn.classList.remove("hide");
})
resourcesBtn.addEventListener("click", () => {
    restartCounter()
    showStadisticsDiv.classList.add("hide");
    testsTitle.classList.add("hide");
    symptomsDiv.classList.add("hide");
    resourcesDiv.classList.remove("hide");
    restartBtn.classList.remove("hide");

})
function restartCounter() {
    counter = 0;
}
function showTests(){
    restartBtn.classList.add("hide");
    testsTitle.classList.remove("hide");
    goFirstTest.addEventListener("click", ()=>{
       if (counter > 7) {
           counter = 0;
       }
    
       showFirstTest();
    })
    goSecondTest.addEventListener("click", () => {
        if (counter > 5) {
            counter = 0;
        }
        showSecondTest();
    })

function showFirstTest(){
    testsTitle.classList.add("hide");
    firstTestDiv.classList.remove("hide");
    btnsDiv.classList.remove("hide");
    question11.classList.remove("hide");
    allBtns.forEach(btn => btn.addEventListener("click", ()=> {
        if (btn.value == "yes"){
            counter++;
        }else if (counter > 7) {
            counter = 0;
        }
    displaySecondQuestion()
}))
    
    function displaySecondQuestion(){
        question11.classList.add("hide");
        question12.classList.remove("hide");
        allBtns.forEach(btn => btn.addEventListener("click",()=>{

            displayThridQuestion()
        }))
    function displayThridQuestion(){
        question12.classList.add("hide");
        question13.classList.remove("hide");
        allBtns.forEach(btn => btn.addEventListener("click",()=>{
            displayFourQuestion()
        }))}
    function displayFourQuestion(){
        question13.classList.add("hide");
        question14.classList.remove("hide");
        allBtns.forEach(btn => btn.addEventListener("click",()=>{
            displayFiveQuestion();
        }))}
    function displayFiveQuestion(){
        question14.classList.add("hide");
        question15.classList.remove("hide");
        allBtns.forEach(btn => btn.addEventListener("click",()=>{
            displaySixQuestion();
        }))}
     function displaySixQuestion(){
        question15.classList.add("hide");
        question16.classList.remove("hide");
        allBtns.forEach(btn => btn.addEventListener("click",()=>{
            displaySevenQuestion();
        }))}
    function displaySevenQuestion(){
        question16.classList.add("hide");
        question17.classList.remove("hide");
        allBtns.forEach(btn => btn.addEventListener("click",()=>{
            showResultsTestOne()
            }))

    function showResultsTestOne() {
        question17.classList.add("hide")
        btnsDiv.classList.add("hide")
        if (counter <= 3 ) {
            solutions1stTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you have few probabilities of having COVID-19.`
        }else if (counter > 3 && counter <= 5) {
            solutions1stTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you have moderate probabilities of having COVID-19. We recommend you to call to doctor and stay at home`
    
        }else if (counter > 5) {
            solutions1stTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you have high probabilities of having COVID-19. You must call to doctor and stay isolated`
        }
        setTimeout(() =>{
            solutions1stTest.innerHTML=``;
            restartCounter();
        },4000);
        restartBtn.classList.remove("hide");
        
        }
    
}}}
function showSecondTest(){
    testsTitle.classList.add("hide");
    secondTestDiv.classList.remove("hide");
    btnsDiv.classList.remove("hide");
    question21.classList.remove("hide");
    allBtns.forEach(btn => btn.addEventListener("click", ()=> {
        if (btn.value == "yes"){
            counter++;
        }else if ( counter > 5 ) {
            counter = 0;
        }
        displaySecondQuestion2()

    }))}
function displaySecondQuestion2() {
    question21.classList.add("hide")
    question22.classList.remove("hide")
    allBtns.forEach(btn => btn.addEventListener("click",()=>{

        displayThridQuestion3()
    }))
function displayThridQuestion3(){
    question22.classList.add("hide");
    question23.classList.remove("hide");
    allBtns.forEach(btn => btn.addEventListener("click",()=>{
        displayFourQuestion4()
    }))}
function displayFourQuestion4(){
    question23.classList.add("hide");
    question24.classList.remove("hide");
    allBtns.forEach(btn => btn.addEventListener("click",()=>{
        displayFiveQuestion5();
    }))}
function displayFiveQuestion5(){
    question24.classList.add("hide");
    question25.classList.remove("hide");
    allBtns.forEach(btn => btn.addEventListener("click",()=>{
        displayResultsTest2()
}))
}}
function displayResultsTest2() {
    question25.classList.add("hide")
    btnsDiv.classList.add("hide")

    if (counter <= 3 ) {
        solutions2ndTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you could do more for prevention of COVID-19.`
    }else if (counter > 3 && counter <= 5) {
        solutions2ndTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you are doing OK, but still you could do more fore prevention of COVID-19.`

    }else if (counter > 5) {
        solutions2ndTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you are doing a good work in order to prevent COVID-19. Keep going`
    }
    setTimeout(() =>{
        solutions2ndTest.innerHTML=``;
        restartCounter();
    },4000);
    restartBtn.classList.remove("hide");
    
    }
}

function restartTest(){
restartCounter()
restartBtn.classList.add("hide")
solutions1stTest.innerHTML='';
solutions2ndTest.innerHTML='';
location.reload();
}



function showstadistics(){
    showStadisticsDiv.classList.remove("hide");
    if(showStadisticsDiv.children.length <=0) {
    let countryInput = document.createElement("div");
    showStadisticsDiv.classList.remove("hide");
    countryInput.innerHTML = `
    From which country do you want to know statistics? <input id ="country" type="text">
    <button id="searchBtn"> Search </button>` 
    countryInput.setAttribute("class", "countryClass")
    showStadisticsDiv.appendChild(countryInput);
 
    let activateBtn = document.getElementById("searchBtn");
    activateBtn.addEventListener("click", () => {
        countryInput.classList.add("hide");
        displayData();
    })
}

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
        showStadisticsDiv.appendChild(displayStadistics)
        restartBtn.classList.remove("hide");
    })}}

