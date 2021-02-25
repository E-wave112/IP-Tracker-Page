// scripts
//leaflet scripts
// const mapBox = process.env.MAPBOX_TOKEN
// const ipify = process.env.IPIFY_TOKEN
// var mymap = L.map('mapid').setView([51.505, -0.09],13);
//  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZS13YXZlIiwiYSI6ImNraDcxdGc2ZzAyeG4ycW56Mmhqend1dXgifQ.a4ipeVagWx59FwZx3FNtKQ', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox/streets-v11',
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken:'pk.eyJ1IjoiZS13YXZlIiwiYSI6ImNraDcxdGc2ZzAyeG4ycW56Mmhqend1dXgifQ.a4ipeVagWx59FwZx3FNtKQ'
// }).addTo(mymap);


//ip address scripts
const Form = document.form.input.value;
const Btn = document.querySelector('.button');
const Ip = document.querySelector('.ipad');
const Locate = document.querySelector('.locat');
const Time = document.querySelector('.time')
const Int = document.querySelector('.internet');
const Location = document.querySelector(".location")
// Create the script tag, set the appropriate attributes

      

Btn.addEventListener('click', (e)=>{
    e.preventDefault();
     fetch(`https://geo.ipify.org/api/v1?apiKey=at_3TMbe7B2C2u3cUVsAHVTemaudvtoM&ipAddress=${Form}`)
    .then(response => response.json())
    .then(data => {
        Ip.textContent = data.ip;
        Locate.textContent = data.location.region;
        Time.textContent = 'UTC ' + data.location.timezone;
        Int.textContent = data.isp;
        Location.style.transform = "translateY(40%)";
        var script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrq-3maSN2UxKEtfjUTOi-MPSKbb-x1Kk&callback=initMap';
        script.async = true;
        let map;
        // Attach your callback function to the `window` object
            window.initMap = function() {
        // JS API is loaded and available
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: data.location.lat, lng: data.location.lng},
                zoom: 13
        });
    };
    // Append the 'script' element to 'head'
    document.head.appendChild(script);


        // Int.textContent = data.isp;
        // var mymap = L.map('mapid',{
        //     center:[data.location.lat, data.location.lng],
        //     zoom:13
        // });

    })
    .catch(err => console.error(err))
});
