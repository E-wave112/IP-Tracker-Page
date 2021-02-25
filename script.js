//ip address scripts
const Form = document.form.input.value;
const Btn = document.querySelector('.button');
const Ip = document.querySelector('.ipad');
const Locate = document.querySelector('.locat');
const Time = document.querySelector('.time')
const Int = document.querySelector('.internet');
const Location = document.querySelector('.location')
const mapId = document.getElementById('map')
const img = document.querySelector('.no-image');
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
        img.classList.toggle('image');
        var script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrq-3maSN2UxKEtfjUTOi-MPSKbb-x1Kk&callback=initMap';
        script.async = true;
        let map;
        // Attach your callback function to the `window` object
            window.initMap = function() {
        // JS API is loaded and available
            map = new google.maps.Map(mapId, {
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
