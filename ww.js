// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const API_KEY = '2048a8bb5744b1577b53124b2ca901a6';

async function getWeather() {
  const cityInput = document.getElementById('cityInput').value;
  const weatherInfoDiv = document.getElementById('weatherInfo');
  const hrl=document.getElementById('hrline');

  if (!cityInput) {
    weatherInfoDiv.textContent = '*Please enter city name';
    hrl.style.display="none";
    weatherInfoDiv.style.color='red';
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    
    

    if (response.ok) {
      
      
      const temperature = data.main.temp;
      const humidity=data.main.humidity;
      const WindSpeed=data.wind.speed;
      const cityName=data.name;
      hrl.style.display="block";

      
      
      weatherInfoDiv.innerHTML = `<font color="#252A34"><h1 class="mhm">Weather Details:-</h1></font>
                                  <div>
                                    <font color="#0F52BA"><h1 class="cnc">- ${cityName}</h1></font>
                                    <font color="#FFD523"> <h1 class="cnc">- Temperature: ${temperature} °C</h1></font>
                                    <font color="#FFCCCC"><h1 class="cnc">- WindSpeed: ${WindSpeed} km/hr</h1></font>
                                    <font color="#FF9966"><h1 class="cnc">- humidity: ${humidity}</h1></font>
                                  </div>
                                  `;
    } else {
      weatherInfoDiv.textContent = `Error: ${data.message}`;
    }
  } catch (error) {
    weatherInfoDiv.textContent = '*City not found';
    hrl.style.display="none";
    weatherInfoDiv.style.color='pink';
  }
}
