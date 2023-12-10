// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
const btn = document.getElementById('go');
const search = document.getElementById('search');
const days = document.getElementById('days');
btn.addEventListener("click", makeSearch);
function makeDay(element) {
    let day = document.createElement('div');
    days.appendChild(day);
    let date = document.createElement('p');
    date.textContent = element.dt_txt;
    day.appendChild(date);
    let weather = document.createElement('p');
    weather.textContent = element.weather[0].description;
    day.appendChild(weather);
    let temp = document.createElement('p');
    temp.textContent = (element.main.temp + "  Kelvin");
    day.appendChild(temp)
    let wind = document.createElement('p');
    wind.textContent = ('wind speed(km/h): ' + element.wind.speed);
    day.appendChild(wind);
    let humid = document.createElement('p');
    humid.textContent = ('humidity: ' + element.main.humidity);
    day.appendChild(humid);
}

function makeSearch() {
    const cityName = search.value;
    const url =  (`http://api.openweathermap.org/data/2.5/forecast?q=` + cityName + `&appid=4be41e2f4ed7079b1bfec03b91bc6b39`);
    console.log(cityName);
    console.log(url);
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data)
        if (!data) {
            let p = document.createElement("p");
            today.appendChild(p);
            p.textContent = "no data"
        } else {
            for (let i = 0; i < data.list.length; i+=8) {
                const element = data.list[i];
                console.log(element);
                makeDay(element);
            }
    
        }
    })
    
}