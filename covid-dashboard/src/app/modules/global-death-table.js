import RepositoryApi from './RepositoryApi'
import PremiumRepositoryApi from "./PremiumRepositoryApi";

import { covidApiAllCoutry, allWorld,covidApiForCountry} from  "../modules/modulesAPI"; /*api  return Promis*/ 
import {map,flag} from "../index";


// import testData from '../../assets/img/test.json';

/*ТАБЛИЦА СМЕРТЕЙ */

//основной статический контейнер для смертей(бутстрап)
const parentDeath = document.querySelector('#global_deaths_main');

//статический контейнер для общего колличества смертей
const globalDeathNumber = document.querySelector('#global_deaths');

//динамический контейнер для записей таблицы по смертям
const globalDeathTableContainer = document.createElement('div');
globalDeathTableContainer.classList.add('table-container');

/*ТАБЛИЦА СЛУЧАЕВ */

//основной статический контейнер для случаев (бутстрап)
const parentCases = document.querySelector('#global_cases_main');

//статический контейнер для общего колличества случаев
const globalCasesNumber = document.querySelector('#global_cases');


//динамический контейнер для записей таблицы по случаям
const globalCasesTableContainer = document.createElement('div');
globalCasesTableContainer.classList.add('table-container');

/*ТАБЛИЦА ВЫЗДОРОВЕВШИХ */

//основной статический контейнер для выздоровевших (бутстрап)
const parentRecovered = document.querySelector('#global_recovered_main');

//статический контейнер для общего колличества выздоровевших
const globalRecoveredNumber = document.querySelector('#global_recovered');

//динамический контейнер для записей таблицы по выздоровевшим
const globalRecoveredTableContainer = document.createElement('div');
globalRecoveredTableContainer.classList.add('table-container');




//функция парсинга JSON
function globalDeathandCasesTable() {
  const summarizedData = new RepositoryApi().getCountrySummarize();
  const TotalDeaths = summarizedData.reduce((acc, el) => acc + el.TotalDeaths, 0);
  const TotalConfirmed = summarizedData.reduce((acc, el) => acc + el.TotalConfirmed, 0);
  const TotalRecovered = summarizedData.reduce((acc, el) => acc + el.TotalRecovered, 0);


  //Общее число смертей
  globalDeathNumber.textContent = TotalDeaths;
  globalCasesNumber.textContent = TotalConfirmed;
  globalRecoveredNumber.textContent = TotalRecovered;

  const sortedDeathData = new RepositoryApi().getTotalDeathCaseByCountryByDecreasingOrder();
  const sortedCasesData = new RepositoryApi().getCaseByCountryByDecreasingOrder();
  const sortedRecoveredData = new RepositoryApi().getTotalRecoveredByCountryByDecreasingOrder();


  for (const country of sortedDeathData) {
    //название страны
    let globalDeathTableCountry = document.createElement('p');
    globalDeathTableCountry.classList.add('table-country');
    globalDeathTableCountry.textContent = country.country;
    globalDeathTableContainer.appendChild(globalDeathTableCountry);


    //количество смертей
    let globalDeathTableNumber = document.createElement('p');
    globalDeathTableNumber.classList.add('table-number');
    globalDeathTableNumber.textContent = country.totalConfirmed;
    globalDeathTableContainer.appendChild(globalDeathTableNumber);
  }

  for (const country of sortedCasesData) {
    //название страны
    let globalCasesTableCountry = document.createElement('p');
    globalCasesTableCountry.classList.add('table-country');
    globalCasesTableCountry.textContent = country.country;
    globalCasesTableContainer.appendChild(globalCasesTableCountry);

    //количество случаев
    let globalCasesTableNumber = document.createElement('p');
    globalCasesTableNumber.classList.add('table-number');
    globalCasesTableNumber.textContent = country.totalConfirmed;
    globalCasesTableContainer.appendChild(globalCasesTableNumber);
  }

  for (const country of sortedRecoveredData) {
    //название страны
    let globalRecoveredTableCountry = document.createElement('p');
    globalRecoveredTableCountry.classList.add('table-country');
    globalRecoveredTableCountry.textContent = country.country;
    globalRecoveredTableContainer.appendChild(globalRecoveredTableCountry);

    //количество выздоровеших
    let globalRecoveredTableNumber = document.createElement('p');
    globalRecoveredTableNumber.classList.add('table-number');
    globalRecoveredTableNumber.textContent = country.totalConfirmed;
    globalRecoveredTableContainer.appendChild(globalRecoveredTableNumber);
  }



  //добавляем контейнер с параграфами сформированными из JSON к статическому контйнеру (смерти)
  parentDeath.appendChild(globalDeathTableContainer);

  //добавляем контейнер с параграфами сформированными из JSON к статическому контйнеру (случаи)
  parentCases.appendChild(globalCasesTableContainer);

  //добавляем контейнер с параграфами сформированными из JSON к статическому контйнеру (выздоровевшие)
  parentRecovered.appendChild(globalRecoveredTableContainer);


  //создаем и добавляем пагинацию для таблиц

  //контейнер пагинации таблицы по смертям
  const globalDeathTablePagination = document.createElement('div');
  globalDeathTablePagination.classList.add('table-pagination');
  //левая кнопкa пагинации
  const globalDeathTablePaginationButtonLeft = document.createElement('button');
  globalDeathTablePaginationButtonLeft.textContent = '<';


  globalDeathTablePagination.appendChild(globalDeathTablePaginationButtonLeft);
  //текстовое поле
  const globalDeathTablePaginationParagragh = document.createElement('p');
  globalDeathTablePaginationParagragh.classList.add('death-pagination');
  globalDeathTablePaginationParagragh.textContent = 'Total Deaths'
  globalDeathTablePagination.appendChild(globalDeathTablePaginationParagragh)
  //правая кнопкa пагинации
  const globalDeathTablePaginationButtonRight = document.createElement('button');
  globalDeathTablePaginationButtonRight.textContent = '>';
  globalDeathTablePagination.appendChild(globalDeathTablePaginationButtonRight);
  //добавляем блок пагинации в контейнер
  parentDeath.appendChild(globalDeathTablePagination)

  //контейнер пагинации таблицы по случаям
  const globalCaseTablePagination = document.createElement('div');
  globalCaseTablePagination.classList.add('table-pagination');
  //левая кнопкa пагинации
  const globalCaseTablePaginationButtonLeft = document.createElement('button');
  globalCaseTablePaginationButtonLeft.textContent = '<';


  globalCaseTablePagination.appendChild(globalCaseTablePaginationButtonLeft);
  //текстовое поле
  const globalCaseTablePaginationParagragh = document.createElement('p');
  globalCaseTablePaginationParagragh.classList.add('case-pagination');
  globalCaseTablePaginationParagragh.textContent = 'Total Cases'
  globalCaseTablePagination.appendChild(globalCaseTablePaginationParagragh)
  //правая кнопкa пагинации
  const globalCaseTablePaginationButtonRight = document.createElement('button');
  globalCaseTablePaginationButtonRight.textContent = '>';
  globalCaseTablePagination.appendChild(globalCaseTablePaginationButtonRight);
  //добавляем блок пагинации в контейнер
  parentCases.appendChild(globalCaseTablePagination)

  //контейнер пагинации таблицы по выздоровевшим
  const globalRecoveredTablePagination = document.createElement('div');
  globalRecoveredTablePagination.classList.add('table-pagination');
  //левая кнопкa пагинации
  const globalRecoveredTablePaginationButtonLeft = document.createElement('button');
  globalRecoveredTablePaginationButtonLeft.textContent = '<';


  globalRecoveredTablePagination.appendChild(globalRecoveredTablePaginationButtonLeft);
  //текстовое поле
  const globalRecoveredTablePaginationParagraph = document.createElement('p');
  globalRecoveredTablePaginationParagraph.classList.add('recovered-pagination');
  globalRecoveredTablePaginationParagraph.textContent = 'Total Recovered'
  globalRecoveredTablePagination.appendChild(globalRecoveredTablePaginationParagraph)
  //правая кнопкa пагинации
  const globalRecoveredTablePaginationButtonRight = document.createElement('button');
  globalRecoveredTablePaginationButtonRight.textContent = '>';
  globalRecoveredTablePagination.appendChild(globalRecoveredTablePaginationButtonRight);
  //добавляем блок пагинации в контейнер
  parentRecovered.appendChild(globalRecoveredTablePagination)
}


//event delegation
//обработка клика по кнокам смены информации в таблице
parentDeath.addEventListener('click', (el) => {
  //информационные разделы
  const keys = ['Total Deaths', 'Deaths for today', 'Total deaths per 100k', 'Today deaths per 100k']
  //объект с массивами данных необходимых для построения таблицы соответсвующего информационного раздела в формате [{"статистическое поле": значение, "страна": название},{...}]
  const infoBlocks = {
    'Total Deaths': new RepositoryApi().getTotalDeathCaseByCountryByDecreasingOrder(),
    'Deaths for today': new RepositoryApi().getNewDeathCaseByCountryByDecreasingOrder(),
    'Total deaths per 100k': new PremiumRepositoryApi().getTotalDeathPerOneHundredThousandByDecreasingOrder(),
    'Today deaths per 100k': new PremiumRepositoryApi().getTodayDeathPerOneHundredThousandByDecreasingOrder()
  };

  if (el.target.textContent === '>') {
    const infoBlock = keys[(keys.indexOf(el.path[0].previousSibling.textContent) + 1) % 4];//перебираем информационные разделы по клику
    const arr = infoBlocks[infoBlock]; // формируем необходимый массив, в зависимости от выбранного информационного раздела
    let objkey = Object.keys(arr[0])[0] // вытягиваем из первого объекта в массиве название статистического поля название 
    toggleGlobalDeathTable(el, arr, objkey, infoBlock);
  }

  if (el.target.textContent === '<') {
    const infoBlock = keys[(keys.indexOf(el.path[0].nextSibling.textContent) + 3) % 4];
    const arr = infoBlocks[infoBlock];
    let objkey = Object.keys(arr[0])[0]
    toggleGlobalDeathTable(el, arr, objkey, infoBlock);
  }

  if (el.target.classList.contains('table-country')) {

    let infoBlock = document.querySelector('#global_deaths_main').lastChild.childNodes[1].textContent;

    async function getCountryData(country) {
      let response = await fetch(`https://api.covid19api.com/premium/country/${country}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        });

      let dataJson = await response.json();
      return dataJson
    }
    async function parseDataJson(elem) {
      let arr = [];
      elem.then(data => {
        data.map((elem, i) => {
          if (i === data.length - 1) {
            if (infoBlock === 'Total Deaths') {
              arr.push({ TotalDeaths: elem.TotalDeaths, country: elem.Country });
            }

            if (infoBlock === 'Deaths for today') {
              arr.push({ DeathsForToday: elem.NewDeaths, country: elem.Country });
            }

            if (infoBlock === 'Total deaths per 100k') {
              arr.push({ TotalDeathsPer100k: Math.round(elem.IncidenceRiskDeathsPerHundredThousand), country: elem.Country });
            }

            if (infoBlock === 'Today deaths per 100k') {
              arr.push({ TodayDeathsPer100k: Math.round(elem.NewDeathsPerMillion / 10), country: elem.Country });
            }
            toggleGlobalDeathTableToOneCountry(arr)
          }
        });
      })
    }

    parseDataJson(getCountryData(el.target.textContent))
    // flag = true;
    // map = new Map(flag);
    // map.markerMap(covidApiAllCoutry());
  }

});

parentCases.addEventListener('click', (el) => {
  const keys = ['Total Cases', 'Cases for today', 'Total cases per 100k', 'Today cases per 100k']
  const infoBlocks = {
    'Total Cases': new RepositoryApi().getCaseByCountryByDecreasingOrder(),
    'Cases for today': new RepositoryApi().getNewCaseByCountryByDecreasingOrder(),
    'Total cases per 100k': new PremiumRepositoryApi().getTotalCasesPerOneHundredThousandByDecreasingOrder(),
    'Today cases per 100k': new PremiumRepositoryApi().getTodayCasesPerOneHundredThousandByDecreasingOrder()
  };

  if (el.target.textContent === '>') {
    const infoBlock = keys[(keys.indexOf(el.path[0].previousSibling.textContent) + 1) % 4];
    const arr = infoBlocks[infoBlock];
    let objkey = Object.keys(arr[0])[0]
    toggleGlobalCaseTable(el, arr, objkey, infoBlock);
  }

  if (el.target.textContent === '<') {
    const infoBlock = keys[(keys.indexOf(el.path[0].nextSibling.textContent) + 3) % 4];
    const arr = infoBlocks[infoBlock];
    let objkey = Object.keys(arr[0])[0]
    toggleGlobalCaseTable(el, arr, objkey, infoBlock);
  }

  if (el.target.classList.contains('table-country')) {

    let infoBlock = document.querySelector('#global_cases_main').lastChild.childNodes[1].textContent;

    async function getCountryData(country) {
      let response = await fetch(`https://api.covid19api.com/premium/country/${country}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        });

      let dataJson = await response.json();
      return dataJson
    }
    async function parseDataJson(elem) {
      let arr = [];
      elem.then(data => {
        data.map((elem, i) => {
          if (i === data.length - 1) {
            if (infoBlock === 'Total Cases') {
              arr.push({ TotalCases: elem.TotalCases, country: elem.Country });
            }

            if (infoBlock === 'Cases for today') {
              arr.push({ CasesForToday: elem.NewCases, country: elem.Country });
            }

            if (infoBlock === 'Total cases per 100k') {
              arr.push({ TotalCasesPer100k: Math.round(elem.IncidenceRiskConfirmedPerHundredThousand), country: elem.Country });
            }

            if (infoBlock === 'Today cases per 100k') {
              arr.push({ TodayCasesPer100k: Math.round(elem.IncidenceRiskNewConfirmedPerHundredThousand), country: elem.Country });
            }
            toggleGlobalCaseTableToOneCountry(arr)
          }
        });
      })
    }

    parseDataJson(getCountryData(el.target.textContent))

  }
});

//формируем массив данных по выздоровевшим на 100к
let TotalRecoveredPer100k = []
async function getTotalRecoveredPer100k(el) {
  el.then(el => {
    return el.map((data) => {
      TotalRecoveredPer100k.push({ TotalRecoveredPer100k: Math.round(data.recoveredPerOneMillion / 10), country: data.country })
      TotalRecoveredPer100k.sort((a, b) => {
        if (a.TotalRecoveredPer100k > b.TotalRecoveredPer100k) {
          return -1;
        }
        if (a.TotalRecoveredPer100k < b.TotalRecoveredPer100k) {
          return 1;
        }
        return 0;
      });
    });;
  });
}


//формируем массив данных по выздоровевшим за сегодня на 100к
let TodayRecoveredPer100k = [];
async function getTodayRecoveredPer100k(el) {
  el.then(el => {
    return el.map((data) => {
      TodayRecoveredPer100k.push({
        TodayRecoveredper100k: Math.round(data.todayRecovered /
          data.population ? (data.population / 100000) : (data.population + 0.01) / 100000), country: data.country
      })
      TodayRecoveredPer100k.sort((a, b) => {
        if (a.TodayRecoveredper100k > b.TodayRecoveredper100k) {
          return -1;
        }
        if (a.TodayRecoveredper100k < b.TodayRecoveredper100k) {
          return 1;
        }
        return 0;
      });
    });;
  });
}


let api = new RepositoryApi();
getTotalRecoveredPer100k(api.getSummarizeRecovered());
getTodayRecoveredPer100k(api.getFullData());


parentRecovered.addEventListener('click', (el) => {
  const keys = ['Total Recovered', 'Recovered for today', 'Total recovered per 100k', 'Today recovered per 100k']
  const infoBlocks = {
    'Total Recovered': api.getTotalRecoveredByCountryByDecreasingOrder(),
    'Recovered for today': api.getNewRecoveredByCountryByDecreasingOrder(),
    'Total recovered per 100k': TotalRecoveredPer100k,
    'Today recovered per 100k': TodayRecoveredPer100k
  }

  if (el.target.textContent === '>') {
    const infoBlock = keys[(keys.indexOf(el.path[0].previousSibling.textContent) + 1) % 4];
    const arr = infoBlocks[infoBlock];
    let objkey = Object.keys(arr[0])[0]
    toggleGlobalRecoveredTable(el, arr, objkey, infoBlock);
  }

  if (el.target.textContent === '<') {
    const infoBlock = keys[(keys.indexOf(el.path[0].nextSibling.textContent) + 3) % 4];
    const arr = infoBlocks[infoBlock];
    let objkey = Object.keys(arr[0])[0]
    toggleGlobalRecoveredTable(el, arr, objkey, infoBlock);
  }

  if (el.target.classList.contains('table-country')) {

    let infoBlock = document.querySelector('#global_recovered_main').lastChild.childNodes[1].textContent;

    async function parseDataJson(elem) {
      let arr = [];
      let arr2 = JSON.parse(localStorage.getItem('cr-lt'));
      elem.then(data => {
        data.map((elem) => {
          
          if (elem.country === el.target.textContent) {
            
            if (infoBlock === 'Total Recovered') {
              arr.push({ TotalRecovered: elem.recovered, country: elem.country });
            }

            if (infoBlock === 'Recovered for today') {
              arr.push({ RecoveredForToday: arr2.find(elem => elem.Country === el.target.textContent).NewRecovered, country: el.target.textContent });
            }

            if (infoBlock === 'Total recovered per 100k') {
              arr.push({ TotalRecoveredPer100k: Math.round(elem.recoveredPerOneMillion / 10), country: elem.country });
            }

            if (infoBlock === 'Today recovered per 100k') {
              arr.push({ TodayRecoveredPer100k: Math.round(elem.todayRecovered / elem.population ? (elem.population / 100000) : (elem.population + 0.01) / 100000), country: elem.country });
            }

            toggleGlobalRecoveredTableToOneCountry(arr)
          }
        });
      })
    }

    parseDataJson(api.getFullData())
    // flag = false;
    // map = new Map(flag);
    // map.markerMap(covidApiAllCoutry());
  }
});



//функции смены содержимого таблиц

function toggleGlobalDeathTable(el, arr, objkey, string) {
  const paginationParagraph = el.path[0].previousSibling || el.path[0].nextSibling; //выбираем блок р в div пагинации для смены текстового содержимого
  paginationParagraph.textContent = string;//меняем текстовое содержимое
  globalDeathNumber.textContent = arr.reduce((acc, el) => acc + el[objkey], 0); //суммируем статистическое значение и меняем его в общем поле соответсвующей таблицы(общее значение)
  while (globalDeathTableContainer.firstChild) {
    globalDeathTableContainer.removeChild(globalDeathTableContainer.firstChild);//удаляем старые данные из таблицы
  }

  for (const el of arr) { //добавляем новые данные в таблицу
    //название страны
    let globalDeathTableCountry = document.createElement('p');
    globalDeathTableCountry.classList.add('table-country');
    globalDeathTableCountry.textContent = el.country;
    globalDeathTableContainer.appendChild(globalDeathTableCountry);

    //количество новых смертей
    let globalDeathTableNumber = document.createElement('p');
    globalDeathTableNumber.classList.add('table-number');
    globalDeathTableNumber.textContent = el[objkey];
    globalDeathTableContainer.appendChild(globalDeathTableNumber);
  }
}

function toggleGlobalCaseTable(el, arr, objkey, string) {
  const paginationParagraph = el.path[0].previousSibling || el.path[0].nextSibling;
  paginationParagraph.textContent = string;
  // parentDeath.textContent = string;
  // globalCasesNumber.textContent = arr.reduce((acc,el)=> acc+el[objkey],0);
  while (globalCasesTableContainer.firstChild) {
    globalCasesTableContainer.removeChild(globalCasesTableContainer.firstChild);
  }

  for (const el of arr) {
    //название страны
    let globalCaseTableCountry = document.createElement('p');
    globalCaseTableCountry.classList.add('table-country');
    globalCaseTableCountry.textContent = el.country;
    globalCasesTableContainer.appendChild(globalCaseTableCountry);

    //количество новых смертей
    let globalCaseTableNumber = document.createElement('p');
    globalCaseTableNumber.classList.add('table-number');
    globalCaseTableNumber.textContent = el[objkey];
    globalCasesTableContainer.appendChild(globalCaseTableNumber);
  }
}

function toggleGlobalRecoveredTable(el, arr, objkey, string) {
  const paginationParagraph = el.path[0].previousSibling || el.path[0].nextSibling;
  paginationParagraph.textContent = string;
  globalRecoveredNumber.textContent = arr.reduce((acc, el) => acc + el[objkey], 0);
  while (globalRecoveredTableContainer.firstChild) {
    globalRecoveredTableContainer.removeChild(globalRecoveredTableContainer.firstChild);
  }

  for (const el of arr) {
    //название страны
    let globalRecoveredTableCountry = document.createElement('p');
    globalRecoveredTableCountry.classList.add('table-country');
    globalRecoveredTableCountry.textContent = el.country;
    globalRecoveredTableContainer.appendChild(globalRecoveredTableCountry);

    //количество новых смертей
    let globalRecoveredTableNumber = document.createElement('p');
    globalRecoveredTableNumber.classList.add('table-number');
    globalRecoveredTableNumber.textContent = el[objkey];
    globalRecoveredTableContainer.appendChild(globalRecoveredTableNumber);
  }
}

function toggleGlobalDeathTableToOneCountry(arr) {
  let objkey = Object.keys(arr[0])[0];
  globalDeathNumber.textContent = arr.reduce((acc, el) => acc + el[objkey], 0); //суммируем статистическое значение и меняем его в общем поле соответсвующей таблицы(общее значение)
  while (globalDeathTableContainer.firstChild) {
    globalDeathTableContainer.removeChild(globalDeathTableContainer.firstChild);//удаляем старые данные из таблицы
  }

  for (const el of arr) { //добавляем новые данные в таблицу
    //название страны
    let globalDeathTableCountry = document.createElement('p');
    globalDeathTableCountry.classList.add('table-country');
    globalDeathTableCountry.textContent = el.country;
    globalDeathTableContainer.appendChild(globalDeathTableCountry);

    //количество  смертей
    let globalDeathTableNumber = document.createElement('p');
    globalDeathTableNumber.classList.add('table-number');
    globalDeathTableNumber.textContent = el[objkey];
    globalDeathTableContainer.appendChild(globalDeathTableNumber);
  }
}

function toggleGlobalCaseTableToOneCountry(arr) {
  let objkey = Object.keys(arr[0])[0];
  // parentDeath.textContent = string;
  // globalCasesNumber.textContent = arr.reduce((acc,el)=> acc+el[objkey],0);
  while (globalCasesTableContainer.firstChild) {
    globalCasesTableContainer.removeChild(globalCasesTableContainer.firstChild);
  }

  for (const el of arr) {
    //название страны
    let globalCaseTableCountry = document.createElement('p');
    globalCaseTableCountry.classList.add('table-country');
    globalCaseTableCountry.textContent = el.country;
    globalCasesTableContainer.appendChild(globalCaseTableCountry);

    //количество новых смертей
    let globalCaseTableNumber = document.createElement('p');
    globalCaseTableNumber.classList.add('table-number');
    globalCaseTableNumber.textContent = el[objkey];
    globalCasesTableContainer.appendChild(globalCaseTableNumber);
  }
}

function toggleGlobalRecoveredTableToOneCountry(arr) {
  let objkey = Object.keys(arr[0])[0];
  globalRecoveredNumber.textContent = arr.reduce((acc, el) => acc + el[objkey], 0);
  while (globalRecoveredTableContainer.firstChild) {
    globalRecoveredTableContainer.removeChild(globalRecoveredTableContainer.firstChild);
  }

  for (const el of arr) {
    //название страны
    let globalRecoveredTableCountry = document.createElement('p');
    globalRecoveredTableCountry.classList.add('table-country');
    globalRecoveredTableCountry.textContent = el.country;
    globalRecoveredTableContainer.appendChild(globalRecoveredTableCountry);

    //количество новых смертей
    let globalRecoveredTableNumber = document.createElement('p');
    globalRecoveredTableNumber.classList.add('table-number');
    globalRecoveredTableNumber.textContent = el[objkey];
    globalRecoveredTableContainer.appendChild(globalRecoveredTableNumber);
  }
}

//функция отрисовки данных по клику на карте

export function MapClick(el) {
  document.querySelector('.death-pagination').textContent = 'Total Deaths';
  document.querySelector('.case-pagination').textContent = 'Total Cases';
  document.querySelector('.recovered-pagination').textContent = 'Total Recovered';

  while (globalDeathTableContainer.firstChild) {
    globalDeathTableContainer.removeChild(globalDeathTableContainer.firstChild);//удаляем старые данные из таблицы
  }

  while (globalCasesTableContainer.firstChild) {
    globalCasesTableContainer.removeChild(globalCasesTableContainer.firstChild);
  }

  while (globalRecoveredTableContainer.firstChild) {
    globalRecoveredTableContainer.removeChild(globalRecoveredTableContainer.firstChild);
  }

  let globalDeathTableCountry = document.createElement('p');
  globalDeathTableCountry.classList.add('table-country');
  globalDeathTableCountry.textContent = el.country;
  globalDeathTableContainer.appendChild(globalDeathTableCountry);

  //количество  смертей
  let globalDeathTableNumber = document.createElement('p');
  globalDeathTableNumber.classList.add('table-number');
  globalDeathTableNumber.textContent = el.deaths;
  globalDeathTableContainer.appendChild(globalDeathTableNumber);

  let globalCaseTableCountry = document.createElement('p');
  globalCaseTableCountry.classList.add('table-country');
  globalCaseTableCountry.textContent = el.country;
  globalCasesTableContainer.appendChild(globalCaseTableCountry);

  //количество новых cases
  let globalCaseTableNumber = document.createElement('p');
  globalCaseTableNumber.classList.add('table-number');
  globalCaseTableNumber.textContent = el.cases;
  globalCasesTableContainer.appendChild(globalCaseTableNumber);

  let globalRecoveredTableCountry = document.createElement('p');
  globalRecoveredTableCountry.classList.add('table-country');
  globalRecoveredTableCountry.textContent = el.country;
  globalRecoveredTableContainer.appendChild(globalRecoveredTableCountry);

  //количество новых recovered
  let globalRecoveredTableNumber = document.createElement('p');
  globalRecoveredTableNumber.classList.add('table-number');
  globalRecoveredTableNumber.textContent = el.recovered;
  globalRecoveredTableContainer.appendChild(globalRecoveredTableNumber);

}

//функция добавления флагок
export function addFlags() {
  let arrForFlags = parentCases.querySelectorAll('.table-country');
  let arrWithCodes = JSON.parse(localStorage.getItem('cr-lt'));
  let arrWithFlags2 = JSON.parse(localStorage.getItem('df-cr-lt'));
  console.log(arrWithCodes)
  for (const el of arrForFlags) {
          let x = arrWithCodes.find(elem=>elem.Country===el.textContent).CountryCode;
          let flagSpan = document.createElement('img');
          flagSpan.classList.add('flag');
          el.appendChild(flagSpan);
          flagSpan.setAttribute('src', arrWithFlags2.find(elem=>elem.countryInfo.iso2 === x).countryInfo.flag);   
}
}
// export async function loadCountryISO(){
//   let response = await fetch('https://api.covid19api.com/countries');
//   let dataJson = await response.json();
//   return dataJson;
// }

// let arrISO = []
// export async function parseFlags(dataJson) {
//     dataJson.then(dataJson => {
//       console.log(dataJson)
//     arrISO = dataJson.map(el=>{
//       return {country:el.Country, iso2: el.ISO2}
//     })
    

//   })
// }
// export async function addFlags(data) {
//   data.then(data => {
//     console.log(arrISO)
//     let arrForFlags = parentCases.querySelectorAll('.table-country');
//     let arrWithFlags = data.map(elem=>{return {iso2:elem.countryInfo.iso2, Flag:elem.countryInfo.flag}})
    
//     for (const el of arrForFlags) {
//       let flagSpan = document.createElement('img');
//       flagSpan.classList.add('flag');
//       el.appendChild(flagSpan);
//       console.log(el.textContent)
//       el.textContent = arrISO.find(elem=>(elem.Country===el.textContent).iso2);
//       console.log(el.textContent)  
//       flagSpan.setAttribute('src', arrWithFlags.find(elem=>elem.iso2===el.textContent).Flag)
//     }
//   })
// }



export  default globalDeathandCasesTable;