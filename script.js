// scripts
const Form = document.form.input.value;
const Btn = document.querySelector('.button');

Btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // if (Form === ''){
    //     alert('field cannot be empty');
    // }

   const ipTrack =  fetch(`https://geo.ipify.org/api/v1?apiKey=at_IqOQwsXACnayytceHeXSz3C6JfHQf&ipAddress=${Form}`)
    .then(response => {;
        
        console.log(typeof response);

    });
    console.log(ipTrack)
});