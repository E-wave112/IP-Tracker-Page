// scripts
//leaflet scripts
const dotenv = require('dotenv');
dotenv.config();
const mapBox = process.env.MAPBOX_TOKEN
const ipify = process.env.IPIFY_TOKEN
var mymap = L.map('mapid').setView([51.505, -0.09],13);
 L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken:mapBox
}).addTo(mymap);


//ip address scripts

const Form = document.form.input.value;
const Btn = document.querySelector('.button');
const Ip = document.querySelector('.ipad');
const Locate = document.querySelector('.locat');
const Time = document.querySelector('.time')
const Int = document.querySelector('.internet');


Btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // if (Form === ''){
    //     alert('field cannot be empty');
    // }
   fetch(`https://geo.ipify.org/api/v1?apiKey=${{ipify}}&ipAddress=${Form}`)
   .then(function(response){
    return response.json()})
.then(function(data){
    console.log(data.location);
    console.log(data.location.timezone);
    Ip.textContent = Form;
    Locate.textContent = data.location.region;
    Time.textContent = 'UTC ' + data.location.timezone;
    Int.textContent = data.isp;
    });
    
});
