$(document).ready(function(){
 var lat;
 var lon;
 var weather;
 var temp;
 var tempC ="C";
 var tempF = "F";
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
        temp = Math.round(response.main.temp);
        $('#temp').text(temp + tempC);
        location = response.name;
        $('#location').text(location);
        
        
        }
      });
     }

     $('#button').on('click', function() {
            convert();
        }
      );

      function convert() {
       if (temp === false) {
        $('#temp').text(Math.round(temp - 32 / 1.8) + tempC);
       
        temp === true;
       } else {
        $('#temp').text(Math.round(temp * 1.8 + 32) + tempF);
        temp === false;
       }
       
    }
//same
    function convertC() {
        
        $('#temp').text(Math.round(temp - 32 / 1.8) + tempC);
    }

    

});

