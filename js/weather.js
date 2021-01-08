// http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://api.weatherstack.com/current?access_key=be6ea8e1d22896aa92288375aa53cb4f&query=Cardiff")

xhr.send();

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
    }
};