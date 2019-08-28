let weatherRequest = new XMLHttpRequest ();
let apiURLstring ='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=00b6e80ee1c4c75bcf82365f49ad8f5f';
weatherRequest.open ('GET', apiURLstring, true);
weatherRequest.send ();
 weatherRequest.onload = function () {
 let weatherData = JSON.parse (weatherRequest.responseText);
 console.log (weatherData);
 document.getElementById ('cc-temp'). innerHTML = weatherData.main.temp;
 }