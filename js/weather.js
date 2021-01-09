// http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff
// darksky api https://api.darksky.net/forecast/5d55e2e606650c0ef689fa5fd436c424/51.4816,-3.1791

window.addEventListener('load', ()=> {

    let lat = 51.4816;
    let long = -3.1791; // cardiff lat long
    let weatherIcon = document.querySelector('.weatherIcon');
    let temperatureDegree = document.querySelector('.temperatureDegree')
    let currentDescription = document.querySelector('.currentDescription')
    let locationTimezone = document.querySelector('.locationTimezone')

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/5d55e2e606650c0ef689fa5fd436c424/${lat},${long}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temperature, summary} = data.currently;
            temperatureDegree.textContent = temperature;
            currentDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;
        });
});