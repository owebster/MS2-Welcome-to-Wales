// leaflet maps

//custom marker icon
var welshFlag = L.icon({
    iconUrl: 'assets/images/welsh-flag-pole.png',

    iconSize:     [40, 70], // size of the icon
});

var mymap = L.map('mapid', {
    scrollWheelZoom: false
}).setView([52.44, -4], 7.4);
var marker = L.marker([52.44, -3.6], {icon: welshFlag}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3dlYnN0ZXIiLCJhIjoiY2tpeDd2ZWprM3F4cDJ5cWpzZnl5bTFtdyJ9.TkVm9dL3HOFz1F9m7fnaCA' //api key
}).addTo(mymap);

