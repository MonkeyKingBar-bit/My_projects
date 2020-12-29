import {set, get} from "./storage";

const API_SUMMARIZE_PREMIUM_LIST = 'https://api.covid19api.com/premium/summary';
const STORAGE_SUMMARIZE_PREMIUM_LIST = 'st-sz-pr-lt';
const API_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY = 'https://api.covid19api.com/premium/country/';
const STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY = 'st-sz-pr-lt-се';
const STATIC_PER_ONE_HUNDRED_THOUSAND = 100000;
const STATIC_COUNTRY_LIST = 'pr-st-ct-lt';
export default class PremiumRepositoryApi {

    getMatchesCountryList(value) {//seacher

        let array = get(STATIC_COUNTRY_LIST);
    
        const englishKeyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'z', 'x', 'c', 'v', 'b', 'n', 'm',];
        let arr = [];
        array.forEach((currentValue, index, array) => {
    
            if (currentValue.toUpperCase().match(value.toUpperCase())) {
                arr.push(currentValue)
            }
        });
    
        return arr;
    }
    
    async loadCovidInfo() {
        const response = await fetch(API_SUMMARIZE_PREMIUM_LIST,
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
        const array = await response.json();

        set(STORAGE_SUMMARIZE_PREMIUM_LIST, Object.values(array)[1])
    }

    async loadCovidInfoByCountry(countryName) {
        const response = await fetch(API_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY + countryName,
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
        const array = await response.json();

        // console.log(Object.values(array))
        set(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY, Object.values(array))
    }

    getTotalCases() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.TotalCases);
        });
        return buf
    }

    getTotalDeath() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.TotalDeaths);
        });
        return buf
    }

    getTotalRecovered() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        // console.log(array);
        return null;
    }

    getTotalNewCases() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.NewCases);
        });
        return buf
    }

    getTotalNewDeaths() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.NewDeaths);
        });
        return buf
    }

    getSlugOfCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        return array.map((data) => {
            return {
                country: data.Country,
                countryISO: data.CountryISO,
                continent: data.Continent,
                caseFatalityRatio: data.CaseFatalityRatio,
            }
        })
    }

    getSlugOfCountryByName(countryName) {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        return array.filter(data => data.Country === countryName)
            .map((data) => {
                return {
                    country: data.Country,
                    countryISO: data.CountryISO,
                    continent: data.Continent,
                    caseFatalityRatio: data.CaseFatalityRatio,
                }
            })
    }

    //--------------------
    getTotalCasesByCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].TotalCases
    }

    getTotalDeathByCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].TotalDeaths
    }

    getTotalRecoveredByCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return null;
    }

    getTotalNewCasesByCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].NewCases
    }

    getTotalNewDeathsByCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].NewDeaths
    }

    //----------------------------
    getDailyIncidenceConfirmedCases() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyIncidenceConfirmedCases
    }

    getDailyIncidenceConfirmedDeaths() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyIncidenceConfirmedCases
    }

    getDailyIncidenceConfirmedCasesPerMillion() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyIncidenceConfirmedCasesPerMillion
    }

    getDailyIncidenceConfirmedDeathsPerMillion() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyIncidenceConfirmedDeathsPerMillion
    }

//    ---------------------------------
    getDailyRiskIncidenceConfirmedCases() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyRiskIncidenceConfirmedCases
    }

    getDailyRiskIncidenceConfirmedDeaths() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyRiskIncidenceConfirmedCases
    }

    getDailyRiskIncidenceConfirmedCasesPerMillion() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyRiskIncidenceConfirmedCasesPerMillion
    }

    getDailyRiskIncidenceConfirmedDeathsPerMillion() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].DailyRiskIncidenceConfirmedDeathsPerMillion
    }

//    ---------------------------------------
    getNewCasesPerMillionByCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].NewCasesPerMillion
    }

    getNewDeathsPerMillionByCountry() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].NewDeathsPerMillion
    }

    getTotalCasesPerMillion() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].TotalCasesPerMillion
    }

    getTotalDeathsPerMillion() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
        return Object.values(array)[array.length - 1].TotalDeathsPerMillion
    }

//    -------------------------------------------
    getTotalCasesPerOneHundredThousand() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.TotalCases);
        });
        return Math.round(buf / STATIC_PER_ONE_HUNDRED_THOUSAND)
    }

    getTotalDeathPerOneHundredThousand() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.TotalDeaths);
        });
        return Math.round(buf / STATIC_PER_ONE_HUNDRED_THOUSAND)
    }

    getTotalDeathPerOneHundredThousandByDecreasingOrder() {
        let arr = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        arr.sort((a, b) => {
            if (a.IncidenceRiskDeathsPerHundredThousand > b.IncidenceRiskDeathsPerHundredThousand) {
                return -1;
            }
            if (a.IncidenceRiskDeathsPerHundredThousand < b.IncidenceRiskDeathsPerHundredThousand) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {IncidenceRiskDeathsPerHundredThousand: Math.round(data.IncidenceRiskDeathsPerHundredThousand), country: data.Country}
        });
    }

    getTodayDeathPerOneHundredThousandByDecreasingOrder() {
        let arr = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        arr.sort((a, b) => {
            if (a.NewDeathsPerMillion/10 > b.NewDeathsPerMillion/10) {
                return -1;
            }
            if (a.NewDeathsPerMillion/10 < b.NewDeathsPerMillion/10) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {NewDeathsPerMillion: Math.round(data.NewDeathsPerMillion/10), country: data.Country}
        });
    }

    getTotalCasesPerOneHundredThousandByDecreasingOrder() {
        let arr = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        arr.sort((a, b) => {
            if (a.IncidenceRiskConfirmedPerHundredThousand > b.IncidenceRiskConfirmedPerHundredThousand) {
                return -1;
            }
            if (a.IncidenceRiskConfirmedPerHundredThousand < b.IncidenceRiskConfirmedPerHundredThousand) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {IncidenceRiskConfirmedPerHundredThousand: Math.round(data.IncidenceRiskConfirmedPerHundredThousand), country: data.Country}
        });
    }

    getTodayCasesPerOneHundredThousandByDecreasingOrder() {
        let arr = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        arr.sort((a, b) => {
            if (a.IncidenceRiskNewConfirmedPerHundredThousand > b.IncidenceRiskNewConfirmedPerHundredThousand) {
                return -1;
            }
            if (a.IncidenceRiskNewConfirmedPerHundredThousand < b.IncidenceRiskNewConfirmedPerHundredThousand) {
                return 1;
            }
            return 0;
        });
        return arr.map((data) => {
            return {IncidenceRiskNewConfirmedPerHundredThousand: Math.round(data.IncidenceRiskNewConfirmedPerHundredThousand), country: data.Country}
        });
    }


    getPremiumData() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        return array;
    }

//    -----------------------------------------------
    getNewCasesPerOneHundredThousand() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.NewCases);
        });
        return Math.round(buf / STATIC_PER_ONE_HUNDRED_THOUSAND)
    }

    getNewDeathPerOneHundredThousand() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        let buf = 0;
        array.forEach((element, index, array) => {
            // console.log(element.TotalCases)
            buf += Number.parseInt(element.NewDeaths);
        });
        return Math.round(buf / STATIC_PER_ONE_HUNDRED_THOUSAND)
    }

//    -----------------------------------------------
    getCountryByContinent(continent) {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        return Object.values(array).filter(data => data.Continent === continent)
    }

//    -----------------------------------------------
//     get() {
//         let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY);
//         return array
//     }

    getTotalCasesByOrder() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        array.sort((a, b) => {
            if (a.TotalCases > b.TotalCases) {
                return -1;
            }
            if (a.TotalCases < b.TotalCases) {
                return 1;
            }
            return 0;
        });
        return array
            .map((data) => {
                return {
                    country: data.Country,
                    countryISO: data.CountryISO,
                    continent: data.Continent,
                    totalCases: data.TotalCases
                }
            })
    }

    getTotalDeathsByOrder() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);
        array.sort((a, b) => {
            if (a.TotalDeaths > b.TotalDeaths) {
                return -1;
            }
            if (a.TotalDeaths < b.TotalDeaths) {
                return 1;
            }
            return 0;
        });
        return array
            .map((data) => {
                return {
                    country: data.Country,
                    countryISO: data.CountryISO,
                    continent: data.Continent,
                    totalDeaths: data.TotalDeaths
                }
            })
    }

//    -----------------------------------------------
    getCountryList() {
        let array = get(STORAGE_SUMMARIZE_PREMIUM_LIST);

        set(STATIC_COUNTRY_LIST,
            array
                .map((data) => {
                    return data.Country
                }).map(data => data.split(' ').join('-')));
        console.log(array.map((data) => {
            return data.Country
        }).map(data => data.replace('%20', ' ')))
    }

    async getDailyCasesByCountryDistance(countryName) {
        const response = await fetch(API_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY + countryName,
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
        const array = await response.json();

        return Object.values(array).map((data) => {
            return {
                country: data.Country,
                countryISO: data.CountryISO,
                continent: data.Continent,
                date: data.Date,
                totalCases: data.TotalCases,
                newCases: data.NewCases,
                newCasesPerMillion: data.NewCasesPerMillion
            }
        })
    }

    async getDailyDeathsByCountryDistance(countryName) {
        const response = await fetch(API_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY + countryName,
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
        const array = await response.json();

        return Object.values(array).map((data) => {
            return {
                country: data.Country,
                countryISO: data.CountryISO,
                continent: data.Continent,
                date: data.Date,
                totalDeaths: data.TotalDeaths,
                newDeaths: data.NewDeaths,
                newDeathsPerMillion: data.NewDeathsPerMillion
            }
        })
    }

    //The below code doesn't work!I need any idea!
    async getTotalCasesByDistance() {


        let array = get(STATIC_COUNTRY_LIST);

        array.forEach((currentValue, index, array) => {
            // setInterval(() => {
            //     this.getCountryCasesDistance(currentValue);
            // }, 10000)
            setTimeout(this.getCountryCasesDistance(currentValue), 1000)
        })
        // console.log(Object.values(array))
        // set(STORAGE_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY, Object.values(array))
    }

    async getCountryCasesDistance(countryName) {
        const response = await fetch(API_SUMMARIZE_PREMIUM_LIST_BY_COUNTRY + countryName,
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
        const array = await response.json();

        return Object.values(array)
    }
}