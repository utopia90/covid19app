const testBtn = document.getElementById("test");
const statsBtn = document.getElementById("stats");
const symptomsBtn = document.getElementById("symptoms");
const contactsBtn = document.getElementById("useful-contacts");
const showInfo = document.getElementById("show-info");
const description = document.getElementById('description');
const buttons = Array.from(document.getElementsByClassName('btn'));
const submitBtn = document.getElementById('submit-btn');
const testYourself = document.getElementById('test-yourself');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchInfoDiv = document.getElementById('search-info-div');
const displayStats = document.createElement('div');

    searchBtn.addEventListener('click', () => {
        if (searchInput.value.length > 0) {
            //testYourself.classList.add('hide');
            searchInput.classList.add('hide');
            searchBtn.classList.add('hide');
            displayData();
         } 
    })
    searchInput.addEventListener("keypress", e => {
        if (e.key === "Enter" && searchInput.value.length > 0) {
            searchInput.classList.add('hide');
            searchBtn.classList.add('hide');
            displayData();
        }
    })

function displayData() {
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${searchInput.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "50ecc69f3bmshd318dabf46ee406p1f08e8jsn0caca47eac27"
    }
})
    .then(res => res.json())
    .then(data => {
        showInfo.innerHTML = `
        <h1 id='country-name'>Covid-19 stats from ${searchInput.value.toUpperCase()}</h1>
        <div class='gap'> ${'Date:'.bold()} ${data.response[0].day}</div>
        <div class='gap'>${'Total Cases:'.bold()} ${String(data.response[0].cases.total)}</div>
        <div class='gap'>${'Today Cases:'.bold()} ${String(data.response[0].cases.new)} </div>
        <div class='gap'>${'Total Deaths:'.bold()} ${String(data.response[0].deaths.total)}</div>
        <div class='gap'>${'Today Deaths:'.bold()} ${String(data.response[0].deaths.new)}</div>
        <button id='search-restart'>Restart</button>
        `
        let restartSearch = document.getElementById('search-restart');
        restartSearch.addEventListener('click', () => {
            searchInput.value = '';
            searchInput.classList.remove('hide');
            searchBtn.classList.remove('hide');
            restartSearch.classList.add('hide');
            showInfo.innerHTML = ``
        })
    })
}

function showTest() {
    searchInfoDiv.classList.add('hide');
    testYourself.classList.remove('hide');
    let goBtn = document.getElementById('go-btn');
    let questionsForm = document.getElementById('questions');
    let resultsDiv = document.getElementById('results');
    let answers = Array.from(document.getElementsByName('yesno'));
    let counter = 0;
    questionsForm.classList.add('hide');
    goBtn.classList.remove('hide');
    resultsDiv.classList.add('hide');
    goBtn.addEventListener('click', () => {
        questionsForm.classList.remove('hide');
        goBtn.classList.add('hide');
        submitBtn.classList.remove('hide');
    })
    /*answers.forEach(answ => answ.addEventListener('click', (e) => {
        if (e.target.value === 'yes') {
            counter++;
        } else if (e.target.value === 'no') {
            counter--;
        }
        console.log(counter)
    }))*/

    submitBtn.addEventListener('click', () => {
        submitBtn.classList.add('hide');
        questionsForm.classList.add('hide');
        resultsDiv.classList.remove('hide');
        /*let formInputs = Array.from(document.getElementsByClassName("label-test"));
        for (let i = 0; i < formInputs.length; i++) {
            if (formInputs[i].checked = true && formInputs[i].value === 'yes') {
                 counter++;
            }
            console.log(counter)
        }*/
        if (counter < 3) {
            resultsDiv.innerHTML = `
            <p>You have few probabilities of having Covid-19. Just stay at home.</p>
            <button id='restart-test'>Restart</button>
            `
        } else if (counter >= 3 && counter <= 5) {
            resultsDiv.innerHTML = `
            <p>You probably have Covid-19 but if the symptoms are not serious,
            just call the hospital and they will tell you how to proceed.</p>
            <button id='restart-test'>Restart</button>
            `
        } else if (counter > 5) {
            resultsDiv.innerHTML = `
            <p>You have Covid-19. Go to hospital emergency department right away to be checked out.</p>
            <button id='restart-test'>Restart</button>
            `
        }
        let restartTest = document.getElementById('restart-test');
        restartTest.addEventListener('click', () => {
            resultsDiv.classList.add('hide');
            questionsForm.classList.remove('hide');
            submitBtn.classList.remove('hide');
            let radioBtns = document.getElementsByName("yesno");
            for(let i=0; i < radioBtns.length; i++) {
                radioBtns[i].checked = false;
            }
        })
    })
}

buttons.forEach(btn => btn.addEventListener('click', (e) => {
    if (e.target.value === 'stats') {
        searchInput.value = '';
        searchInput.classList.remove('hide');
        searchBtn.classList.remove('hide');
        searchInfoDiv.classList.remove('hide');
        testYourself.classList.add('hide')
        statsBtn.classList.add('selected');
        testBtn.classList.remove('selected');
        symptomsBtn.classList.remove('selected');
        contactsBtn.classList.remove('selected');
        showInfo.innerHTML = ``;
        submitBtn.classList.add('hide');
    } else if (e.target.value === 'test') {
        showTest();
        testBtn.classList.add('selected');
        statsBtn.classList.remove('selected');
        symptomsBtn.classList.remove('selected');
        contactsBtn.classList.remove('selected');
    } else if (e.target.value === 'symptoms') {
        //Function symptoms
        symptomsBtn.classList.add('selected');
        statsBtn.classList.remove('selected');
        testBtn.classList.remove('selected');
        contactsBtn.classList.remove('selected');
    } else if (e.target.value === 'useful-contacts') {
        //Function useful contacts
        contactsBtn.classList.add('selected')
        statsBtn.classList.remove('selected');
        testBtn.classList.remove('selected');
        symptomsBtn.classList.remove('selected');
    }
}))