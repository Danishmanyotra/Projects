const apiKey="6GJKLE9YB99ME6HLGXVSU9QXF";
const apiUrl= "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
// console.log(apiUrl);

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(`${apiUrl}/${city}?unitGroup=metric&key=${apiKey}&contentType=json`);


    if(response.status==400) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.resolvedAddress;
        document.querySelector(".temp").innerHTML = Math.round(data.currentConditions.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.currentConditions.humidity + "%";
        document.querySelector(".wind").innerHTML = data.currentConditions.windspeed + " km/h";
        
        const condition=data.currentConditions.conditions;
    
        if(condition.includes("Cloud")) {
            WeatherIcon.src="images/clouds.png";
        }
        else if(condition.includes("Clear")) {
            WeatherIcon.src="images/clear.png";
        }
        else if(condition.includes("Rain")) {
            WeatherIcon.src="images/rain.png";
        }
        else if(condition.includes("Drizzle")){
            WeatherIcon.src="images/drizzle.png";
        }
        else if(condition.includes("Mist")) {
            WeatherIcon.src="images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
   
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
