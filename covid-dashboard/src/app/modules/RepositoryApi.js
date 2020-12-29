import {set, get} from "./storage";

const API_NAVIGATION_URL = 'en-nav';
const API_GLOBAL_CASES = 'gl-cs';
const API_COUNTRY_LIST = 'cr-lt';
const API_PREMIUM_LIST = 'pr-lt';
const API_COUNTRY_NAME_LIST = 'cr-nm-lt';
const API_CHART_LIST = 'https://disease.sh/v3/covid-19/countries';
const API_CHART_STORAGE = 'ct-st';
const API_MAP_LIST = 'https://api.covid19api.com/dayone/country/south-africa/status/confirmed';
const API_SECOND_COUNTRY_LIST = 'df-cr-lt';
const API_THIRD_COUNTRY_LIST = 'th-cr-lt';
const API_BASE_URL = 'https://api.covid19api.com';
// https://api.covid19api.com/live/country/south-africa

export default class RepositoryApi {
    // countryName;
    // countryFLag = "https://www.countryflags.io/be/" + this.countryName +"/64.png";
    // country = new Country();
    // https://api.covid19api.com/
    constructor() {

    }


    async loadCountryInformation() {
        let arr = get(API_NAVIGATION_URL);
        const res = await fetch(API_BASE_URL + arr[19]);
        const commit = await res.json();
        // console.log(commit)
        set(API_GLOBAL_CASES, Object.values(commit)[1]);
        set(API_COUNTRY_LIST, Object.values(commit)[2]);
        set(API_COUNTRY_NAME_LIST, Object.values(commit)[2].map(data => {
            return {country: data.Country}
        }));
    }


    addNavigation(navigation) {
        set(API_NAVIGATION_URL, navigation);
    }

    async loadUrlNavigation() {

        // const url = "https://api.covid19api.com/";
        const res = await fetch(API_BASE_URL);
        //     ,  {
        //     method: 'GET',
        //     mode: 'cors',
        //     cache: 'no-cache',
        //     credentials: 'same-origin',
        //     headers: {
        //         // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, " +
        //         //     "Origin, Accept, X-Requested-With, content-type, Access-Control-Request-Method," +
        //         //     "Access-Control-Request-Headers",
        //         'Content-Type': 'application/json',
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Credentials": "true",
        //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        //     },
        //     redirect: 'follow',
        //     referrerPolicy: 'no-referrer',
        //     // body: JSON.stringify(data)
        // }

        const commit = await res.json();
        const enumNavigation = [];
        Object.values(commit).forEach((currentValue, index, array) => {
            enumNavigation.push(currentValue.Path);
        });

        this.addNavigation(enumNavigation)
    }

    getCaseByCountryByDecreasingOrder() {
        let arr = Object.values(get(API_COUNTRY_LIST));

        arr.sort((a, b) => {
            if (a.TotalConfirmed > b.TotalConfirmed) {
                return -1;
            }
            if (a.TotalConfirmed < b.TotalConfirmed) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {totalConfirmed: data.TotalConfirmed, country: data.Country}
        });
    }

    getNewCaseByCountryByDecreasingOrder() {
        let arr = Object.values(get(API_COUNTRY_LIST));

        arr.sort((a, b) => {
            if (a.NewConfirmed > b.NewConfirmed) {
                return -1;
            }
            if (a.NewConfirmed < b.NewConfirmed) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {NewConfirmed: data.NewConfirmed, country: data.Country}
        });
    }

    getCaseByRegionByDecreasingOrder() {

    }

    getCaseBySovereigntyByDecreasingOrder() {

    }

    getTotalDeathCaseByCountryByDecreasingOrder() {
        let arr = Object.values(get(API_COUNTRY_LIST));
        arr.sort((a, b) => {
            if (a.TotalDeaths > b.TotalDeaths) {
                return -1;
            }
            if (a.TotalDeaths < b.TotalDeaths) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {totalConfirmed: data.TotalDeaths, country: data.Country}
        });
    }

    getNewDeathCaseByCountryByDecreasingOrder() {
        let arr = Object.values(get(API_COUNTRY_LIST));
        arr.sort((a, b) => {
            if (a.NewDeaths > b.NewDeaths) {
                return -1;
            }
            if (a.NewDeaths < b.NewDeaths) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {NewDeath: data.NewDeaths, country: data.Country}
        });
    }

    


    getTotalRecoveredByCountryByDecreasingOrder() {
        let arr = Object.values(get(API_COUNTRY_LIST));

        arr.sort((a, b) => {
            if (a.TotalRecovered > b.TotalRecovered) {
                return -1;
            }
            if (a.TotalRecovered < b.TotalRecovered) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {totalConfirmed: data.TotalRecovered, country: data.Country}
        });
    }

    getNewRecoveredByCountryByDecreasingOrder() {
        let arr = Object.values(get(API_COUNTRY_LIST));

        arr.sort((a, b) => {
            if (a.NewRecovered > b.NewRecovered) {
                return -1;
            }
            if (a.NewRecovered < b.NewRecovered) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {totalConfirmed: data.NewRecovered, country: data.Country}
        });
    }

    


    getCountryDataByName(name) {
        return Object.values(get(API_COUNTRY_LIST)).filter(data => data.Country === name)
    }

    getSummaryCountryAmountOfTotalConfirmed() {
        return get(API_GLOBAL_CASES).TotalConfirmed
    }

    getSummaryCountryAmountOfTotalRecovered() {
        return get(API_GLOBAL_CASES).TotalRecovered
    }

    getSummaryCountryAmountOfTotalDeaths() {
        return get(API_GLOBAL_CASES).TotalDeaths
    }

    getSummaryCountryAmountOfNewConfirmed() {
        return get(API_GLOBAL_CASES).NewConfirmed
    }

    getSummaryCountryAmountOfNewRecovered() {
        return get(API_GLOBAL_CASES).NewRecovered
    }

    getSummaryCountryAmountOfNewDeaths() {
        return get(API_GLOBAL_CASES).NewDeaths
    }

    async loadLiveByCountryAllStatus() {
        // let arr = get('https://disease.sh/v3/covid-19/countries');
        const res = await fetch('https://disease.sh/v3/covid-19/countries');

        const commit = await res.json();
        set(API_SECOND_COUNTRY_LIST, Object.values(commit));
        // const res = await fetch(API_BASE_URL + arr[19]);
        // const commit = await res.json();
        // set(API_GLOBAL_CASES, Object.values(commit)[1]);
        // set(API_COUNTRY_LIST, Object.values(commit)[2]);
    }

    getCountryByContinentActive(continent = 'Asia') {
        let arr = get(API_SECOND_COUNTRY_LIST);
        return arr.filter(value => value.continent === continent).map((data) => {
            return {
                active: data.active,
                activePerOneMillion: data.activePerOneMillion,
                cases: data.cases,
                casesPerOneMillion: data.casesPerOneMillion,
                population: data.population,
                continent: data.continent,
                country: data.country,
                countryInfo: {
                    id: data.countryInfo.id,
                    flag: data.countryInfo.flag,
                    iso2: data.countryInfo.iso2,
                    iso3: data.countryInfo.iso3,
                    lat: data.countryInfo.lat,
                    long: data.countryInfo.long
                }
            }
        })
    }

    getCountryByContinentDeath(continent = 'Asia') {
        let arr = get(API_SECOND_COUNTRY_LIST);
        return arr.filter(value => value.continent === continent).map((data) => {
            return {
                deaths: data.deaths,
                deathsPerOneMillion: data.deathsPerOneMillion,
                oneCasePerPeople: data.oneCasePerPeople,
                oneDeathPerPeople: data.oneDeathPerPeople,
                oneTestPerPeople: data.oneTestPerPeople,
                population: data.population,
                continent: data.continent,
                country: data.country,
                countryInfo: {
                    id: data.countryInfo.id,
                    flag: data.countryInfo.flag,
                    iso2: data.countryInfo.iso2,
                    iso3: data.countryInfo.iso3,
                    lat: data.countryInfo.lat,
                    long: data.countryInfo.long
                }
            }
        })
    }

    getCountryByContinentRecovered(continent = 'Asia') {
        let arr = get(API_SECOND_COUNTRY_LIST);
        return arr.filter(value => value.continent === continent).map((data) => {
            return {
                recovered: data.recovered,
                recoveredPerOneMillion: data.recoveredPerOneMillion,
                tests: data.tests,
                oneTestPerPeople: data.testsPerOneMillion,

                population: data.population,
                continent: data.continent,
                country: data.country,
                countryInfo: {
                    id: data.countryInfo.id,
                    flag: data.countryInfo.flag,
                    iso2: data.countryInfo.iso2,
                    iso3: data.countryInfo.iso3,
                    lat: data.countryInfo.lat,
                    long: data.countryInfo.long
                }
            }
        })
    }


    // async load() {
    //     // const res = await fetch('https://api.covid19api.com/dayone/country/south-africa/status/confirmed');
    //     // const res = await fetch('https://api.covid19api.com/dayone/country/south-africa');
    //     const res = await fetch('https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live');
    //
    //     const commit = await res.json();
    //     console.log(Object.values(commit));
    //     set(API_THIRD_COUNTRY_LIST, Object.values(commit));
    //
    // }
    //
    // async getTotalConfirmed() {
    //     let arr = get(API_COUNTRY_NAME_LIST);
    //   arr.map((data) => {
    //         let array = setTimeout(this.getDailyConfirmedByCountry(data.country),100);
    //         return array
    //     });
    //     return arr;
    // }
    async getDailyConfirmedByCountry(name) {
        const res = await fetch('https://api.covid19api.com/dayone/country/' + name +
            '/status/confirmed/live');
        const commit = await res.json();
        set(API_THIRD_COUNTRY_LIST, Object.values(commit));

        return {
            case: Object.values(commit).Cases,
            country: Object.values(commit).Country,
            countryCode: Object.values(commit).CountryCode,
            date: Object.values(commit).Date,
            status: Object.values(commit).Status,
        }
    }

    // async getDailyNewDeathByCountry() {
    //     const res = await fetch(API_CHART_LIST);
    //     const commit = await res.json();
    //     console.log(Object.values(commit));
    //
    //     return {
    //         case: Object.values(commit).Cases,
    //         country: Object.values(commit).Country,
    //         countryCode: Object.values(commit).CountryCode,
    //         date: Object.values(commit).Date,
    //         status: Object.values(commit).Status,
    //     }
    // }

    async getFullData() {
        const res = await fetch(API_CHART_LIST);
        const commit = await res.json();
        set(API_CHART_STORAGE, Object.values(commit));
        // console.log(Object.values(commit))
        return Object.values(commit);
    }


    
//Chart.js----------------------------------

    async getConfirmedByCountryByDistance(countryName, from, to) {
        const res = await fetch('https://api.covid19api.com/total/country/' +
            countryName + '/status/confirmed', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'from': from,
                'to': to
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        });
        const commit = await res.json();
        // console.log(Object.values(commit));
        setTimeout(() => {
        }, 200);
        return Object.values(commit)
    }

    // async getTotalConfirmedByDistance(from, to) {
    //     let arr = get(API_COUNTRY_NAME_LIST);
    //     // console.log(arr);
    //     arr.map((data) => {
    //         return this.getConfirmedByCountryByDistance(data.country, from, to)
    //     });
    //     console.log(arr);
    //     return arr;
    // }

    // -----------------------
    getCountrySummarize() {
        let arr = get(API_COUNTRY_LIST);
        // console.log(arr)
        return Object.values(arr)
    }

    async getSummarizeActiveCases() {//without date
        const res = await fetch(API_CHART_LIST);
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                active: data.active,
                activePerOneMillion: data.activePerOneMillion,
                continent: data.continent,
                country: data.country,
                oneCasePerPeople: data.oneCasePerPeople,
                oneTestPerPeople: data.oneTestPerPeople,
                todayCases: data.todayCases,
            }
        });
    }

    async getSummarizeCases() {//without date
        const res = await fetch(API_CHART_LIST);
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                cases: data.cases,
                casesPerOneMillion: data.casesPerOneMillion,
                continent: data.continent,
                country: data.country,
                oneCasePerPeople: data.oneCasePerPeople,
                oneTestPerPeople: data.oneTestPerPeople,
                todayDeaths: data.todayDeaths,
            }
        });
    }

    async getSummarizeRecovered() {//without date
        const res = await fetch(API_CHART_LIST);
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                critical: data.critical,
                criticalPerOneMillion: data.criticalPerOneMillion,
                continent: data.continent,
                country: data.country,
                oneTestPerPeople: data.oneTestPerPeople,
                recovered: data.recovered,
                recoveredPerOneMillion: data.recoveredPerOneMillion,
                todayRecovered: data.todayRecovered,
            }
        });
    }

    async getSummarizeTest() {//without date
        const res = await fetch(API_CHART_LIST);
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                critical: data.critical,
                criticalPerOneMillion: data.criticalPerOneMillion,
                continent: data.continent,
                country: data.country,
                oneTestPerPeople: data.oneTestPerPeople,
                tests: data.tests,
                testsPerOneMillion: data.testsPerOneMillion,
                todayRecovered: data.todayRecovered,
            }
        });
    }

    async getSummarizeToday() {//without date
        const res = await fetch(API_CHART_LIST);
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                cases: data.cases,
                casesPerOneMillion: data.casesPerOneMillion,
                deaths: data.deaths,
                deathsPerOneMillion: data.deathsPerOneMillion,
                recovered: data.recovered,
                recoveredPerOneMillion: data.recoveredPerOneMillion,
                continent: data.continent,
                country: data.country,
                todayCases: data.todayCases,
                todayDeaths: data.todayDeaths,
                todayRecovered: data.todayRecovered,
            }
        });
    }

    //-----------------------
    async getCountryName() {
        const res = await fetch('https://api.covid19api.com/countries');
        const commit = await res.json();
        return Object.values(commit)
    }

    async getCountrySlug(countryName) {
        const res = await fetch('https://api.covid19api.com/countries');
        const commit = await res.json();
        return Object.values(commit).filter(data => data.Country === countryName);
    }

    //-----------------------
    async getDistanceByCountry(countryName) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/dayone/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        console.log(Object.values(commit));
        return Object.values(commit);
    }

    async getMapData(countryName) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/dayone/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                cases: data.Cases,
                country: data.Country,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                status: data.Status,
            }
        });
    }

    async getChartData(countryName) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/dayone/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                cases: data.Cases,
                country: data.Country,
                date: data.Date,
                status: data.Status,
            }
        });
    }

    async getChartDataByDistance(countryName, from, to) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/dayone/country/' + countryName + '/status/confirmed',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'from': from,
                    'to': to
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });
        const commit = await res.json();
        // console.log(Object.values(commit));
        return Object.values(commit).map((data) => {
            return {
                cases: data.cases,
                country: data.country,
                date: data.Date,
                status: data.Status,
            }
        });
    }

    // async getDistanceByCountry(countryName) {//exists date without lat and lon
    //     const res = await fetch('https://api.covid19api.com/dayone/country/' + countryName + '/status/confirmed');
    //     const commit = await res.json();
    //     console.log(Object.values(commit));
    //     return Object.values(commit);
    // }

    //-----------------------
    async getTotalConfirmedByCountry(countryName) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalConfirmedByCountry(countryName) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }

    async getTotalDeathsByCountry(countryName) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                deaths: data.Deaths,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalDeathsByCountry(countryName) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                deaths: data.Deaths,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }

    async getTotalRecoveredByCountry(countryName) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalRecoveredByCountry(countryName) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }

    async getTotalDataByCountry(countryName) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                deaths: data.Deaths,
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalDataByCountry(countryName) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName + '/status/confirmed');
        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                deaths: data.Deaths,
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }
    //-----------------------
    async getTotalConfirmedByCountryAfterDate(countryName, date) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalConfirmedByCountryAfterDate(countryName, date) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }

    async getTotalDeathsByCountryAfterDate(countryName, date) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                deaths: data.Deaths,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalDeathsByCountryAfterDate(countryName, date) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                deaths: data.Deaths,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }

    async getTotalRecoveredByCountryAfterDate(countryName, date) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalRecoveredByCountryAfterDate(countryName, date) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }

    async getTotalDataByCountryAfterDate(countryName, date) {//exists date with lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                deaths: data.Deaths,
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                lat: data.Lat,
                lon: data.Lon,
                active: data.Active,
            }
        });
    }

    async getChartTotalDataByCountryAfterDate(countryName, date) {//exists date without lat and lon
        const res = await fetch('https://api.covid19api.com/live/country/' + countryName +
            '/status/confirmed/date/',
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'date': date,
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });        const commit = await res.json();
        // console.log(commit)
        return Object.values(commit).map((data) => {
            return {
                confirmed: data.Confirmed,
                deaths: data.Deaths,
                recovered: data.Recovered,
                country: data.Country,
                countryCode: data.CountryCode,
                date: data.Date,
                active: data.Active,
            }
        });
    }

    //---------IncidenceRiskNewConfirmedPerHundredThousand
    async loadPremiumData() {
        const res = await fetch('https://api.covid19api.com/premium/summary',
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
        const commit = await res.json();
        // console.log(commit)
        set(API_PREMIUM_LIST, Object.values(commit))
        // return Object.values(commit).map((data) => {
        //     return {
        //         confirmed: data.Confirmed,
        //         deaths: data.Deaths,
        //         recovered: data.Recovered,
        //         country: data.Country,
        //         countryCode: data.CountryCode,
        //         date: data.Date,
        //         lat: data.Lat,
        //         lon: data.Lon,
        //         active: data.Active,
        //     }
        // });
    }

    //Chart.js----------------------------------

}