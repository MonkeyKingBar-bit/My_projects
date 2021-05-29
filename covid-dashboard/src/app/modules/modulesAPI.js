const apiAllCoutry = "https://disease.sh/v3/covid-19/countries";
// const apiCountry = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;
const apiAllWorld = `https://disease.sh/v3/covid-19/historical/all?lastdays=366`;

async function covidApiAllCoutry(){
    let response = await fetch(apiAllCoutry);
    let dataJson = await response.json();
    return dataJson
};

// --- all world
async function covidApiAllWorld(){
    const arrWorld = []
    let response = await fetch(apiAllWorld);
    let dataJson = await response.json();
    return dataJson
}

const allWorld = []
let allWorldProm = covidApiAllWorld();
allWorldProm.then(data => {
    for (let key in data){
        allWorld.push(data[key])
    }
})
// /-----

async function covidApiForCountry(country){
    const apiCountry = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;
    let response = await fetch(apiCountry);
    let dataJson = await response.json();
    return dataJson
}

export {covidApiAllCoutry, covidApiAllWorld, covidApiForCountry};
