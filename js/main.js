$(document).ready(function(){
 var lat;
 var lon;
 var weather;
 var temp;
 var tempC = "C";
 var tempF = "F";
 var location;
 var api = 'https://fcc-weather-api.glitch.me/api/current?';
 
getLocation();


function getLocation() {
    var coords = document.getElementById("weather");
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
        $('#btn').text(temp + tempC);
        location = response.name;
        $('#location').text(location);
        convert();
        
        
        }
      });
     }
    //  var myBool = true;
    //  $('.like').on('click', function() {
    //    if (myBool) {
    //      //function 1 here
    //    }
    //    else {
    //      //function 2 here
    //    }
    //    myBool = !myBool;
    //  });
    // ||

    // $('.like').on('click', function() {
    //     if $(this).hasClass("liked") {
    //       //do unlike
    //       $(this).removeClass("liked");
    //     }
    //     else {
    //       //do like
    //       $(this).addClass("liked");
    //     }
    //   });

    // function like( el,val ){
    //     $(el).text(++val);
    //   }
      
    //   function dislike( el,val ){
    //     $(el).text(--val);
    //   }
      
    //   $('.like').click(function(){
    //     var val = $(this).text();
    //     $(this).toggleClass('userLikes');
    //     return $(this).hasClass('userLikes') ? like(this,val) : dislike(this,val);
    //   });

    $('#btn').click(function() {   
        
        $(this).toggleClass('btn');
        
        return $(this).hasClass('btn') ? convert(this) : convertC(this);

        
        });

      function convert() {
      
        $('#btn').text(Math.round(temp * 1.8 + 32) + tempF); 
       
    }

    function convertC() {
        
        $('#btn').text(Math.round(temp - 32 / 1.8) + Math.round(32 / 1.8) +  tempC);
    }

    

});

