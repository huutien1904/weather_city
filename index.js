const inputElement = document.querySelector('#seach-input')
const APP_API = '8e4352972abe8bd8c4f7617a5ad35876'
const namecity = document.querySelector('.namecity')
const weatherdiscription = document.querySelector('.weather-state') 
const temperature = document.querySelector('.temperature') 
const sunrise = document.querySelector('.sunrise') 
const sundown = document.querySelector('.sundown') 
const humidity = document.querySelector('.humidity') 
const Dios = document.querySelector('.dios') 
const weathericon = document.querySelector('.weather-icon') 

inputElement.addEventListener('change',(e) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_API}&lang=vi&units=metric`)
    .then( async res =>{
        const data = await res.json();
        console.log(data)
        namecity.innerHTML =  data.name || DEFAULT_VALUE
        weatherdiscription.innerHTML =  data.weather[0].description || DEFAULT_VALUE
        temperature.innerHTML =Math.ceil(data.main.temp )  || DEFAULT_VALUE
        humidity.innerHTML =  data.main.humidity || DEFAULT_VALUE
        Dios.innerHTML =  data.wind.speed || DEFAULT_VALUE

        sunrise.innerHTML =  moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE
        sundown.innerHTML =  moment.unix(data.sys.sundown).format('H:mm') || DEFAULT_VALUE
        
        weathericon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    })
    e.target.value = ''
})