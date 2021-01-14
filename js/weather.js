//openweather
//https://api.openweathermap.org/data/2.5/weather?q=Cardiff&appid=983533143e870dc758b970f7b3eb380b

window.addEventListener('load', ()=> {
    /*let lat = 51.4816;
    let long = -3.1791; // cardiff lat long*/
    const api = 'https://api.openweathermap.org/data/2.5/weather?q=Cardiff&units=metric&appid=983533143e870dc758b970f7b3eb380b';

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {main, name, weather} = data;
            $('.weather-city').html(`<h2>${name}</h2>`)
            $('.temperatureDegree').html(`<h3>Currently it's: ${Math.round(main.temp)}˚C and ${weather[0].description}</h3>`)
            $('.feelsLike').html(`<h3>Feels Like: ${Math.round(main.feels_like)}˚C</h3>`)
        });
});