async function getWeather(){

  const city = document.getElementById("cityName").value;

  const apiKey = "a60bf5f09a5f38b94900e7713ad5d66b";

  const url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  if(data.cod == "404"){
    alert("City not found");
    return;
  }

  document.getElementById("weatherBox")
  .classList.remove("d-none");

  document.getElementById("homeBtn")
  .classList.remove("d-none");

  document.getElementById("body").style.backgroundImage =
  "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1600&auto=format&fit=crop')";

  document.getElementById("city").innerText =
  data.name;

  document.getElementById("temperature").innerText =
  Math.round(data.main.temp) + "°C";

  document.getElementById("condition").innerText =
  data.weather[0].main;

  document.getElementById("humidity").innerText =
  data.main.humidity;

  document.getElementById("wind").innerText =
  data.wind.speed;

  document.getElementById("feelsLike").innerText =
  Math.round(data.main.feels_like);

  document.getElementById("visibility").innerText =
  data.visibility / 1000;

  document.getElementById("pressure").innerText =
  data.main.pressure;
}

function goHome(){

  document.getElementById("weatherBox")
  .classList.add("d-none");

  document.getElementById("homeBtn")
  .classList.add("d-none");

  document.getElementById("cityName").value = "";

  document.getElementById("body").style.backgroundImage =
  "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1600&auto=format&fit=crop')";
}