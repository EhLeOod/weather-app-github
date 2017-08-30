$(document).ready(function(){
 var lat;
 var lon;
 var weather;
 var temp;
 var location;
 var api = 'https://fcc-weather-api.glitch.me/api/current?';
 
getLocation();

    var coords = document.getElementById("coords");
function getLocation() {
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            coords.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    
function showPosition(position) {
        lat = "lat=" + position.coords.latitude;
        lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
    }
    
function getWeather(lat, lon) {
  var url = api + lat + "&" + lon;
     
  $.ajax({
    method: "GET",
    url: url,
    crossDomain: 'true',
    success: function(response) {
        weather = response.weather[0].main;
        $('#weather').text(weather);
        temp = response.main.temp;
        $('#temp').text(temp + ' c');
        //what goes here??//
        location = response.name;
        $('#location').text(location);
        
        
        }
      });
     }
//start here today.
//How do you toggle functions?
//your button IS toggling now, but what is it toggling?
     $('#button').on('click', function() {
        $('#temp').toggle(convertC, convert)
      });
//add math.floor or .min or max, etc...
      function convert() {
        
        $('#temp').text(temp * 1.8 + 32 + ' f');
    }
//same
    function convertC() {
        
        $('#temp').text(temp - 32 / 1.8 + ' c');
    }

    

});

