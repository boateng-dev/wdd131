document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('modified').textContent = document.lastModified;

const temp = 28; // °C
const windSpeed = 5; // km/h
const windchillEl = document.getElementById('windchill');

function calculateWindChill(temp, windSpeed) {
  return 13.12 + 0.6215*temp - 11.37*(windSpeed**0.16) + 0.3965*temp*(windSpeed**0.16);
}

if (temp <= 10 && windSpeed > 4.8) {
  windchillEl.textContent = calculateWindChill(temp, windSpeed).toFixed(1) + '°C';
} else {
  windchillEl.textContent = 'N/A';
}