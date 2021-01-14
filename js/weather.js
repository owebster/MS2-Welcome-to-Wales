// http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff
// darksky api https://api.darksky.net/forecast/5d55e2e606650c0ef689fa5fd436c424/51.4816,-3.1791

//openweather
//https://api.openweathermap.org/data/2.5/weather?q=Cardiff&appid=983533143e870dc758b970f7b3eb380b

window.addEventListener('load', ()=> {
    /*let lat = 51.4816;
    let long = -3.1791; // cardiff lat long*/
    let temperatureDegree = document.querySelector('.temperatureDegree')
    let currentDescription = document.querySelector('.currentDescription')
    //let weatherIcon = document.querySelector('.weatherIcon')
    const api = 'https://api.openweathermap.org/data/2.5/weather?q=Cardiff&units=metric&appid=983533143e870dc758b970f7b3eb380b';

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {main} = data;
            temperatureDegree.textContent = Math.round(main.temp);
            //currentDescription.textContent = ;
            //weatherIcon.src = weather_icons;
        });
});