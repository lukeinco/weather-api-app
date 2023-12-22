const btn = document.getElementById('go');
const search = document.getElementById('search');
const days = document.getElementById('days');
btn.addEventListener("click", makeSearch);
// creates every part of the day card and appends to html
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
// takes in user input and inserts into api url. Then fetches with api url
function makeSearch() {
    const cityName = search.value;
    const url =  (`https://api.openweathermap.org/data/2.5/forecast?q=` + cityName + `&appid=4be41e2f4ed7079b1bfec03b91bc6b39`);
    console.log(cityName);
    console.log(url);
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data)
        if (data.message === "city not found") {
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