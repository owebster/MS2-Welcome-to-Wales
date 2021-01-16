//openweather api: https://api.openweathermap.org/data/2.5/weather?q=Cardiff&appid=983533143e870dc758b970f7b3eb380b
let southWales = 'Cardiff';
let northWales = 'Holyhead';

window.addEventListener('load', function() { //south wales api call
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${southWales}&units=metric&appid=983533143e870dc758b970f7b3eb380b`;
    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            const {main, name, weather} = data;
            $('#weather-city').html(`<h3>${name}</h3>`).css("color", "#D50130");
            $('#temperatureDegree').html(`<h4>Currently it's: ${Math.round(main.temp)}˚C with a low of ${Math.round(main.temp_min)}˚C </h4>`);
            $('#feelsLike').html(`<h4>Feels Like: ${Math.round(main.feels_like)}˚C with ${weather[0].description}</h4>`);
        });
});

window.addEventListener('load', function() { //north wales api call
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${northWales}&units=metric&appid=983533143e870dc758b970f7b3eb380b`;
    fetch(api)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            const {main, name, weather} = data;
            $('#northWalesCity').html(`<h3>${name}</h3>`).css("color", "#D50130");
            $('#northWalesTemp').html(`<h4>Currently it's: ${Math.round(main.temp)}˚C with a low of ${Math.round(main.temp_min)}˚C </h4>`);
            $('#northWalesFeelsLike').html(`<h4>Feels Like: ${Math.round(main.feels_like)}˚C with ${weather[0].description}</h4>`);
        })
})