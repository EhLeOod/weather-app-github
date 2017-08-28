$(document).ready(function(){

    var getLo = document.getElementById("demo");

    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        getLo.innerHTML = "Geolocation is not supported by this browser.";
    }
};

function showPosition(position) {
    getLo.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

});