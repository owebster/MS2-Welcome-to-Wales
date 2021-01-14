// http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff
// darksky api https://api.darksky.net/forecast/5d55e2e606650c0ef689fa5fd436c424/51.4816,-3.1791

window.addEventListener('load', ()=> {
    /*let lat = 51.4816;
    let long = -3.1791; // cardiff lat long*/
    let temperatureDegree = document.querySelector('.temperatureDegree')
    let currentDescription = document.querySelector('.currentDescription')
    let weatherIcon = document.querySelector('.weatherIcon')
    const api = 'http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff';

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temperature, weather_descriptions, weather_icons} = data.current;
            temperatureDegree.textContent = temperature;
            currentDescription.textContent = weather_descriptions;
            //weatherIcon.src = weather_icons;
        });
});