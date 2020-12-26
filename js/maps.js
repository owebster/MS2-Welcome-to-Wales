// leaflet maps
var mymap = L.map('mapid', {
    scrollWheelZoom: false
}).setView([52.44, -4], 8);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3dlYnN0ZXIiLCJhIjoiY2tpeDd2ZWprM3F4cDJ5cWpzZnl5bTFtdyJ9.TkVm9dL3HOFz1F9m7fnaCA' //api key
}).addTo(mymap);

function castleMarker(){ //when user clicks on castle button, add these markers to map to show where the castles are
    var marker = L.marker([51.7696, -4.4620]).addTo(mymap); //Laugharne Castle
    var marker = L.marker([53.1391, -4.2769]).addTo(mymap); //Caernarfon Castle
    var marker = L.marker([51.7702, -2.8499]).addTo(mymap); //Raglan Castle
    var marker = L.marker([51.8766, -4.0181]).addTo(mymap); //Dinefwr Park and Castle
    var marker = L.marker([51.5931, -2.7423]).addTo(mymap); //Caldicot Castle
    var marker = L.marker([53.2801, -3.8256]).addTo(mymap); //Conwy Castle
    var marker = L.marker([52.6499, -3.1613]).addTo(mymap); //Powis Castle and Garden
    var marker = L.marker([52.9354, -3.0894]).addTo(mymap); //Chirk Castle
    var marker = L.marker([52.0572, -4.6342]).addTo(mymap); //Cilgerran Castle
    var marker = L.marker([51.5761, -3.2202]).addTo(mymap); //Caerphilly Castle
}

function mountainsMarker(){
    var marker = L.marker([53.0932, -3.8017]).addTo(mymap); //Snowdonia
    var marker = L.marker([52.4167, -3.5000]).addTo(mymap); //Cambrian Mountains
    var marker = L.marker([51.9667, -3.1167]).addTo(mymap); //Black Mountain Range
}