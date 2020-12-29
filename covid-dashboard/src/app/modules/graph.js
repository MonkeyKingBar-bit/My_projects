import { covidApiAllCoutry,covidApiForCountry} from  "../modules/modulesAPI";
const apiAllWorld = `https://covid19-api.org/api/timeline`;

let date = [];
let cases= [];
let deaths = [];
let recovereds = [];

const countryProm = covidApiForCountry();
countryProm.then(data => {
    for (let i = 0; i < data.length; i++) {
        date.push(data[i].updated);
        cases.push(data[i].cases);
        deaths.push(data[i].deaths);
        recovereds.push(data[i].recovered);
        console.log(recovereds)
    }
});

async function countryJSON (dataJson){
  dataJson.then(dataJson => {
    date = dataJson.last_update;
    dataLabel = dataJson.new_cases;
    addDotToChart(date, dataLabel);
  });
}

async function covidApiAllWorld(){
        let response = await fetch(apiAllWorld);
        let dataJson = await response.json();
        return dataJson
    }

let allWorldProm = covidApiAllWorld();
allWorldProm.then(data => {
    for (let i = 0; i < data.length; i++) {
        date.push(data[i].last_update)
        cases.push(data[i].total_cases)
        deaths.push(data[i].total_deaths)
        recovereds.push(data[i].total_recovered)
    }
});

async function worldJSON (dataJson){
  dataJson.then(dataJson => {
    date = dataJson.last_update;
    dataLabel = dataJson.total_cases;
    addDotToChart(date, dataLabel);
  });
}

window.onload = () => {
  // ---------- DRAW GRAPHICS ------------ //
    const ctx = document.querySelector('#chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [{
            label: 'Daily Cases',
            data: cases,
            backgroundColor: 'rgba(128, 128, 0, 0.5)',
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
              display: false
          }] 
        }
      }
    })
  }

      const death = document.querySelector('#chart1').getContext('2d');
      new Chart(death, {
        type: 'bar',
        data: {
          labels: date,
          datasets: [{
              label: 'Daily Deaths',
              data: deaths,
              backgroundColor: 'rgb(255, 255, 255, 0.5)',
          }]
        },
        options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }],
              xAxes: [{
                display: false
            }] 
          }
        }
      })
  
      const recover = document.querySelector('#chart2').getContext('2d');
      new Chart(recover, {
      type: 'bar',
      data: {
        labels: date,
        datasets: [{
            label: 'Recovered',
            data: recovereds,
            backgroundColor: 'rgba(0, 128, 128)',
            
        }]
      },
      options: {
        borderWidth: 0,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
              display: false
          }] 
        },
      }
      })