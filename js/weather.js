// http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff
const baseUrl = "http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff";

function getData(type, cb){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseUrl + type + "/")
    xhr.send();
    
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        };
    };
}

function writeToDocument(type){
    getData(type, function(data){
        document.getElementById("weatherData").innerHTML = data;
    })
}