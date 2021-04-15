/* eslint-disable new-cap */
/* eslint-disable no-undef */
// import "../../style/map/styleMap.scss";
import {MapClick} from "../modules/global-death-table";

export default class Map {
  constructor(flag) {
    this.flag = flag;
    this.worldMap = document.getElementById("map");
      // button Legend
      this.btnLegend = document.createElement('div');
      this.listLegend = document.createElement('div');
      this.btnLegend.style.backgroundImage = "url(./img/list.png)";
      this.btnLegend.classList.add("btnLegend");
      this.worldMap.appendChild(this.btnLegend);
      this.worldMap.appendChild(this.listLegend);
      this.btnLegend.addEventListener('click',()=>{ 
        this.legend();
        this.listLegend.classList.toggle('listLegend');
      })
      this.listLegend.addEventListener('click',()=>{ 
        this.legend();
        this.listLegend.classList.toggle('listLegend');
      })
    this.worldMap.style.width = '100%';
    this.worldMap.style.height = `457px`;
    this.worldMapOptions = {
      center: [50, 20],
      zoom: 2,
    };
    this.worldMap = new L.map(this.worldMap, this.worldMapOptions);
    this.layer = L.tileLayer('https://api.mapbox.com/styles/v1/kakadu/ckiyt1s0871gn19s3d39w3mh8/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoia2FrYWR1IiwiYSI6ImNraXlzcXl1ZjQ2NjcyeHFqbGR5ejB0NzgifQ.dQ9wL7MxL6bH0ZnsJXqO0Q',
    });
    this.worldMap.addLayer(this.layer);

  }

  imgMarker(){
    if(this.flag === false){
      return './img/blue-circle.svg'
    } else {
      return  './img/red-circle.svg'
    }
  }
  // listLegend
  legend(){
    if(document.querySelector('.listLegend')){
      this.listLegend.firstChild.remove();
    } else{
      let ul = document.createElement('ul');
      let size = 0
      let numb = " > 10000000"
      for(let i = 0; i < 4; i++){
        numb = numb.slice(0, -1)
        let li = document.createElement('li');
        let ico = document.createElement('img');
        ico.src = this.imgMarker();
        ico.style.height = `${20 - size}px`
        ico.style.width = `${20 - size}px`
        size += 5
        li.append(ico);
        li.append(numb)
        ul.appendChild(li);
      }
    this.listLegend.appendChild(ul)
    }
  }

// not ready
  sizeMarker(dataJson){
  let option = dataJson
    if(this.flag === false){
    option = dataJson.recovered;
    } else {
    option = dataJson.cases;
    }
    if(option > 1000000){
    return 20
    } else if(option < 1000000 && option > 500000 ) {
    return 15
    } else if(option < 500000 && option > 100000 ) {
    return 10
    } else if(option < 100000 && option > 10000 ) {
    return 5
    } else if(option < 10000 && option > 1000 ) {
    return 2
    } else {
    return 1
    }
  }
// ---
  async markerMap(data){
    data.then(dataJson => {
      for (let key in dataJson) {

        // Icon options
        let size = `${this.sizeMarker(dataJson[key])}`
        let icon = `${this.imgMarker()}`
        let iconOptions = {
          iconUrl: icon,
          iconSize: [
          size,
          size
          ],
        }
        let customIcon = L.icon(iconOptions);
        let markerOptions = {
          title: "MyLocation",
          clickable: true,
          draggable: true,
          icon: customIcon
        }
        // -----------

        let marker = new L.Marker([dataJson[key].countryInfo.lat,dataJson[key].countryInfo.long],markerOptions);
        marker.addEventListener("click", () => {this.markerClick(dataJson[key])})
        marker.bindPopup(
          `${dataJson[key].country} <br/>
          recovered: ${dataJson[key].recovered} <br/>
          cases: ${dataJson[key].cases} <br/>
          death: ${dataJson[key].deaths}`
        );
        marker.addTo(this.worldMap);
      } 
    })
  }
  async markerClick(dataJson){
    MapClick(dataJson);
  }
}