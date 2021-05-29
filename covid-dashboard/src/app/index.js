// scss
import '../style/style.scss';

// ---- Katya
// import Chart from 'chart.js';
import graph from './modules/graph';
import pagination from './component/pagination';
import fullScreen from './component/fullScreen';
// ---- /Katya

// ---- scss
import "../style/style.scss";
// ---- api
import globalDeathandCasesTable from './modules/global-death-table.js'
import RepositoryApi from './modules/RepositoryApi.js'
import PremiumRepositoryApi from "./modules/PremiumRepositoryApi.js";
 import {addFlags} from '../app/modules/global-death-table'

async function letsStart() {
    let api = new RepositoryApi();
    let premiumApi = new PremiumRepositoryApi();
    await api.loadUrlNavigation();
    await api.loadCountryInformation();
    await api.loadLiveByCountryAllStatus();
    await api.loadPremiumData();
    await premiumApi.loadCovidInfo();
    globalDeathandCasesTable();
    let date = document.querySelector('#date');
    date.textContent = JSON.parse(localStorage.getItem('cr-lt'))[0].Date
    // await parseFlags(loadCountryISO());
    // addFlags(api.getFullData())
    addFlags(); 
}
letsStart()

import { covidApi } from  "./modules/modulesAPI.js";

// ---- map
// ---- map Fedya
// переключатель или синий или красный маркер на карте
export let flag = false;
// ---
import { covidApiAllCoutry, allWorld,covidApiForCountry} from  "./modules/modulesAPI.js"; /*api  return Promis*/ 
import Map from "./modules/map.js"
export const map = new Map(flag);
// make map & marker создание маркера на карте
map.markerMap(covidApiAllCoutry())
// --- / map Fedya

// --- result api на всякий случай) 
// для всего мира  allWorld [cases 0: {…}, deaths 1: {…}, recovered 2: {…}]
// console.log('allWorld [cases 0: {…}, deaths 1: {…}, recovered 2: {…}]')
// console.log(allWorld)
// console.log('для одной страны')
// console.log(covidApiForCountry("Afghanistan"))