inputElmt = document.querySelector('.cityInput')
btnElmt = document.querySelector('#fetchWeatherBtn');
resultElmt = document.querySelector('#showInfo')

btnElmt.addEventListener('click',()=>{
    citYName = inputElmt.value
    fetchWeatherAPI(citYName)
})

function renderInfo(data) {
    console.log(data)
     resultElmt.innerHTML = `
    <div class="d-flex justify-content-center my-4">
  <div class="card shadow-lg border-0 rounded-4" style="max-width: 30rem; width: 100%;">
    <div class="card-body text-center">
      <h3 class="card-title fw-bold text-primary">${data.name}, <span class="text-muted fs-5">${data.sys.country}</span></h3>
      <p class="text-dark fs-3 mb-2">${data.weather[0].main}</p>
      <img class="mb-3" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" 
           alt="${data.weather[0].description}" />
      <h4 class="fw-bold text-dark mb-3">${data.main.temp}°C</h4>
    </div>

    <ul class="list-group list-group-flush text-center">
      <li class="list-group-item fs-6"><strong>🌡 Temp:</strong> ${data.main.temp} °C</li>
      <li class="list-group-item fs-6"><strong>💨 Wind:</strong> ${data.wind.speed} m/s</li>
      <li class="list-group-item fs-6"><strong>🌥 Condition:</strong> ${data.weather[0].description}</li>
    </ul>

    <div class="card-footer text-center bg-primary text-white fw-semibold ">
      Updated just now ⏳
    </div>
  </div>
</div>

    
    
    
    
                    
    `

}

function fetchWeatherAPI(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
    .then(response => response.json())
    .then(data => renderInfo(data))
    .catch(error => console.log(error))
}

