
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '009f1fc8c7msh866e3fc1e90392dp148be1jsn37247301c843',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather=(city)=>{
    cityName.innerHTML=city;
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        
    })
    .catch(err => console.log(err));

}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value)
})

getweather(" Delhi")

    