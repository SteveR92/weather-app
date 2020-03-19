const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('New York');
document.getElementById('search').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    storage.setLocationData(city);

    getWeather();

})




const menuSelect = document.querySelector('.fas');
const menu = document.querySelector('.fade-menu');
menuSelect.addEventListener('click', function(){
    if(menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
    } else {
        menu.style.visibility = "visible";
    }
})





function getWeather(){
    weather.getWeather()
    .then(results => {
    ui.paint(results);
    
    })
    .catch(err => console.log(err))
    }

function getTime() {
    const today = new Date();
    
    const dayVal = new Date();
    let dayWord = dayVal.getDay();
    
    
    switch (dayWord) {
        case 0: 0;
        dayWord = 'Sunday';
        break;
        case 1: 1;
        dayWord = 'Monday';
        break;
        case 2: 2;
        dayWord = 'Tuesday';
        break;
        case 3: 3;
        dayWord = 'Wednesday';
        break;
        case 4: 4;
        dayWord = 'Thursday';
        break;
        case 5: 5;
        dayWord = 'Friday';
        break;
        case 6: 6;
        dayWord = 'Saturday';
        break;
    }
    
    const monthVal = new Date();
    let monthWord = monthVal.getMonth() + 1;
    
    switch (monthWord) {
        case 1: 1;
        monthWord = 'January';
        break;
        case 2: 2;
        monthWord = 'February';
        break;
        case 3: 3;
        monthWord = 'March';
        break;
        case 4: 4;
        monthWord = 'April';
        break;
        case 5: 5;
        monthWord = 'May';
        break;
        case 6: 6;
        monthWord = 'June';
        break;
        case 7: 7;
        monthWord = 'July';
        break;
        case 8: 8;
        monthWord = 'August';
        break;
        case 9: 9;
        monthWord = 'September';
        break;
        case 10: 10;
        monthWord = 'October';
        break;
        case 11: 11;
        monthWord = 'November';
        break;
        case 12: 12;
        monthWord = 'December';
        break;
    }
    
    
    
    const date = dayWord+" "+today.getDate()+" "+monthWord;
    
    document.getElementById('w-date').textContent = date;
    
    }

function getForecast(){
weather.getForecast()
.then(forecast => {

ui.paintForecast(forecast);
})
.catch(err => console.log(err));
    }

function getAirPollution(){
    weather.getAirPollution()
    .then(pollution => {
        console.log(pollution)
        ui.airPollution(pollution);
        
    })
    .catch(err =>console.log(err));
    }








    


getAirPollution();
getForecast();
getTime();