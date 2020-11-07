// scripts
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

   fetch(`https://geo.ipify.org/api/v1?apiKey={{IPIFY_TOKEN}}&ipAddress=${Form}`)
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
