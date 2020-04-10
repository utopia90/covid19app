const testBtn = document.getElementById("test");
const statsBtn = document.getElementById("stats");
const symptomsBtn = document.getElementById("symptoms");
const resourcesBtn = document.getElementById("resources");
const showInfo = document.getElementById("show-info");
const description = document.getElementById('description');
const buttons = Array.from(document.getElementsByClassName('btn'));
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchStatsDiv = document.getElementById('search-stats-div');
const displayStats = document.createElement('div');
const instruction = document.getElementById('instruction');
const symptomsDiv = document.getElementById('symptoms-div');
const resourcesDiv = document.getElementById('resources-div');
const goFirstTest = document.getElementById("goFirstTest");
const goSecondTest = document.getElementById("goSecondTest");
const firstTestDiv = document.getElementById("first-test-div");
const secondTestDiv = document.getElementById("second-test-div");
const solutions1stTest = document.getElementById("showAnswers1stTest");
const solutions2ndTest = document.getElementById("showAnswers2ndTest");
const btnsDiv = document.getElementById("buttons-yesno");
const allBtns = Array.from(document.getElementsByClassName("button"));
const testsTitle = document.getElementById("tests-title");
const testsAndBtnsDiv = document.getElementById('tests-and-btns-div');
const restartTestBtn = document.getElementById('restartTestBtn');
const appTitle = document.getElementById('title');
let counter = 0;
let question = 1;
let test = 0;

    searchBtn.addEventListener('click', () => {
      displayData();
    })
    searchInput.addEventListener('click', () => {
        searchInput.style.border = '1px solid rgb(165, 165, 165)';
        searchInput.value = '';
        showInfo.innerHTML = ``;
    })

    appTitle.addEventListener('click', () => {
      searchInput.value = '';
        searchInput.classList.remove('hide');
        searchBtn.classList.remove('hide');
        searchStatsDiv.classList.remove('hide');
        testsTitle.classList.add('hide');
        statsBtn.classList.add('selected');
        testBtn.classList.remove('selected');
        symptomsBtn.classList.remove('selected');
        resourcesBtn.classList.remove('selected');
        showInfo.innerHTML = ``;
        symptomsDiv.classList.add('hide');
        resourcesDiv.classList.add('hide');
        searchInput.style.border = '1px solid rgb(165, 165, 165)';
        testsAndBtnsDiv.classList.add('hide');
        instruction.classList.remove('hide');
    })

function displayData() {
  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${searchInput.value}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "50ecc69f3bmshd318dabf46ee406p1f08e8jsn0caca47eac27"
  }
})
.then(res => res.json()
.then(data => {
  if (data.results > 0) {
    let nullDeaths = data.response[0].deaths.new;
    let nullCases = data.response[0].cases.new;
    if (nullDeaths === null) {
      nullDeaths = 0
    }
    if (nullCases === null) {
      nullCases = 0
    }
    searchInput.classList.add('hide');
    searchBtn.classList.add('hide');
    instruction.classList.add('hide');
    showInfo.innerHTML = `
    <h1 id='country-name'>Covid-19 stats from ${searchInput.value.toUpperCase()}</h1>
    <div class='gap'> ${'Date:'.bold()} ${data.response[0].day}</div>
    <div class='gap'>${'Total Cases:'.bold()} ${data.response[0].cases.total}</div>
    <div class='gap'>${'Today Cases:'.bold()} ${nullCases} </div>
    <div class='gap'>${'Total Deaths:'.bold()} ${data.response[0].deaths.total}</div>
    <div id='new-deaths' class='gap'>${'Today Deaths:'.bold()} ${nullDeaths}</div>
    <button id='search-restart'>Restart</button>
    `
  } else {
    showInfo.innerHTML = `
    <p id='error-msg'>You haven't typed any valid country. Please try again.</p>
    `
    searchInput.style.border = '1px solid red';
  }
  let restartSearch = document.getElementById('search-restart');
  restartSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.classList.remove('hide');
    searchBtn.classList.remove('hide');
    restartSearch.classList.add('hide');
    showInfo.innerHTML = ``;
    instruction.classList.remove('hide');
    searchInput.style.border = '1px solid rgb(165, 165, 165)';
  })
}))}

/*function noNull(data) {
  searchInput.classList.add('hide');
  searchBtn.classList.add('hide');
  instruction.classList.add('hide');
  showInfo.innerHTML = `
  <h1 id='country-name'>Covid-19 stats from ${searchInput.value.toUpperCase()}</h1>
  <div class='gap'> ${'Date:'.bold()} ${data.response[0].day}</div>
  <div class='gap'>${'Total Cases:'.bold()} ${String(data.response[0].cases.total)}</div>
  <div class='gap'>${'Today Cases:'.bold()} ${String(data.response[0].cases.new)} </div>
  <div class='gap'>${'Total Deaths:'.bold()} ${String(data.response[0].deaths.total)}</div>
  <div class='gap'>${'Today Deaths:'.bold()} ${String(data.response[0].deaths.new)}</div>
  <button id='search-restart'>Restart</button>
  `
}

function deathsNull(data) {
  searchInput.classList.add('hide');
  searchBtn.classList.add('hide');
  instruction.classList.add('hide');
  showInfo.innerHTML = `
  <h1 id='country-name'>Covid-19 stats from ${searchInput.value.toUpperCase()}</h1>
  <div class='gap'> ${'Date:'.bold()} ${data.response[0].day}</div>
  <div class='gap'>${'Total Cases:'.bold()} ${String(data.response[0].cases.total)}</div>
  <div class='gap'>${'Today Cases:'.bold()} ${String(data.response[0].cases.new)} </div>
  <div class='gap'>${'Total Deaths:'.bold()} ${String(data.response[0].deaths.total)}</div>
  <div class='gap'>Today Deaths: 0</div>
  <button id='search-restart'>Restart</button>
  `
}

function casesNull(data) {
  searchInput.classList.add('hide');
  searchBtn.classList.add('hide');
  instruction.classList.add('hide');
  showInfo.innerHTML = `
  <h1 id='country-name'>Covid-19 stats from ${searchInput.value.toUpperCase()}</h1>
  <div class='gap'> ${'Date:'.bold()} ${data.response[0].day}</div>
  <div class='gap'>${'Total Cases:'.bold()} ${String(data.response[0].cases.total)}</div>
  <div class='gap'>Today Cases: 0</div>
  <div class='gap'>${'Total Deaths:'.bold()} ${String(data.response[0].deaths.total)}</div>
  <div class='gap'>${'Today Deaths:'.bold()} ${String(data.response[0].deaths.new)}</div>
  <button id='search-restart'>Restart</button>
  `
}

function deathsAndCasesNull(data) {
  searchInput.classList.add('hide');
  searchBtn.classList.add('hide');
  instruction.classList.add('hide');
  showInfo.innerHTML = `
  <h1 id='country-name'>Covid-19 stats from ${searchInput.value.toUpperCase()}</h1>
  <div class='gap'> ${'Date:'.bold()} ${data.response[0].day}</div>
  <div class='gap'>${'Total Cases:'.bold()} ${String(data.response[0].cases.total)}</div>
  <div class='gap'>Today Cases: 0</div>
  <div class='gap'>${'Total Deaths:'.bold()} ${String(data.response[0].deaths.total)}</div>
  <div class='gap'>Today Deaths: 0</div>
  <button id='search-restart'>Restart</button>
  `
}*/

buttons.forEach(btn => btn.addEventListener('click', (e) => {
    if (e.target.value === 'stats') {
        searchInput.value = '';
        searchInput.classList.remove('hide');
        searchBtn.classList.remove('hide');
        searchStatsDiv.classList.remove('hide');
        testsTitle.classList.add('hide');
        statsBtn.classList.add('selected');
        testBtn.classList.remove('selected');
        symptomsBtn.classList.remove('selected');
        resourcesBtn.classList.remove('selected');
        showInfo.innerHTML = ``;
        symptomsDiv.classList.add('hide');
        resourcesDiv.classList.add('hide');
        searchInput.style.border = '1px solid rgb(165, 165, 165)';
        testsAndBtnsDiv.classList.add('hide');
        instruction.classList.remove('hide');
    } else if (e.target.value === 'test') {
        showTest();
        restartCounter();
        clearQuestions();
        btnsDiv.classList.add("hide");
        firstTestDiv.classList.add("hide");
        secondTestDiv.classList.add("hide");
        testBtn.classList.add('selected');
        statsBtn.classList.remove('selected');
        symptomsBtn.classList.remove('selected');
        resourcesBtn.classList.remove('selected');
        symptomsDiv.classList.add('hide');
        searchStatsDiv.classList.add('hide');
        resourcesDiv.classList.add('hide');
        searchInput.style.border = '1px solid rgb(165, 165, 165)';
        testsAndBtnsDiv.classList.add('hide');
        instruction.classList.remove('hide');
    } else if (e.target.value === 'symptoms') {
        symptomsDiv.classList.remove('hide');
        testsTitle.classList.add('hide');
        symptomsBtn.classList.add('selected');
        statsBtn.classList.remove('selected');
        testBtn.classList.remove('selected');
        resourcesBtn.classList.remove('selected');
        searchStatsDiv.classList.add('hide');
        resourcesDiv.classList.add('hide');
        searchInput.style.border = '1px solid rgb(165, 165, 165)';
        testsAndBtnsDiv.classList.add('hide');
        instruction.classList.remove('hide');
    } else if (e.target.value === 'resources') {
        resourcesDiv.classList.remove('hide');
        testsTitle.classList.add('hide');
        resourcesBtn.classList.add('selected')
        statsBtn.classList.remove('selected');
        testBtn.classList.remove('selected');
        symptomsBtn.classList.remove('selected');
        symptomsDiv.classList.add('hide');
        searchStatsDiv.classList.add('hide');
        searchInput.style.border = '1px solid rgb(165, 165, 165)';
        testsAndBtnsDiv.classList.add('hide');
        instruction.classList.remove('hide');
    }
}))

function restartCounter() {
  counter = 0;
}

function showTest() {
  testsTitle.classList.remove("hide");
}

goFirstTest.addEventListener("click", () => {
  testsAndBtnsDiv.classList.remove('hide');
  counter = 0;
  question = 1;
  test = 1;
  showFirstTest();
  clearQuestions();
  displayQuestion();
});

goSecondTest.addEventListener("click", () => {
  testsAndBtnsDiv.classList.remove('hide');
  counter = 0;
  question = 1;
  test = 2;
  showSecondTest();
  clearQuestions();
  displayQuestion();
});

allBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    if (btn.value == "yes") {
      counter++;
    }
    question++;
    clearQuestions();
    if (test === 1 && question === 8) {
      showResultsTestOne();
    } else if (test === 2 && question === 6) {
      displayResultsTest2();
    } else {
      displayQuestion();
    }
    console.log(counter)
  })
);

function clearQuestions() {
  Array.from(document.querySelectorAll('.question')).forEach((e) => {
    e.classList.add('hide');
  });
}

function displayQuestion() {
  document.getElementById(`question${test}-${question}`).classList.remove('hide');
}

function showFirstTest() {
  testsTitle.classList.add("hide");
  firstTestDiv.classList.remove("hide");
  btnsDiv.classList.remove("hide");
}

function showResultsTestOne() {
  btnsDiv.classList.add("hide");
  restartTestBtn.classList.remove('hide');
  if (counter <= 3) {
    solutions1stTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you have few probabilities of having COVID-19.`;
  } else if (counter > 3 && counter <= 5) {
    solutions1stTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you have moderate probabilities of having COVID-19. We recommend you to call your doctor and stay at home.`;
  } else if (counter > 5) {
    solutions1stTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you have high probabilities of having COVID-19. You must call your doctor and stay isolated.`;
  }
}

function showSecondTest() {
  testsTitle.classList.add("hide");
  secondTestDiv.classList.remove("hide");
  btnsDiv.classList.remove("hide");
}
function displayResultsTest2() {
  btnsDiv.classList.add("hide");
  restartTestBtn.classList.remove('hide');
  if (counter <=2) {
    solutions2ndTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you could do more for prevention of COVID-19.`;
  } else if (counter >= 3 && counter < 5) {
    solutions2ndTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you are doing OK, but still you could do more fore prevention of COVID-19.`;
  } else if (counter > 4) {
    solutions2ndTest.innerHTML = `You have answered ${counter} questions affirmatively. This means you are doing a good work in order to prevent COVID-19. Keep going.`;
  }
}

restartTestBtn.addEventListener('click', () => {
  restartCounter();
  solutions1stTest.innerHTML = "";
  solutions2ndTest.innerHTML = "";
  showTest();
  restartTestBtn.classList.add('hide');
  testsAndBtnsDiv.classList.add('hide');
})