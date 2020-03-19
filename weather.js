
class Weather {
    constructor(city) {
    this.city = city;
 }

changeLocation(city) {
    this.city = city;
}

async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=219f397b492b2907aa06bb12361b6aab&units=metric`);

    const responseData = await response.json();

    return responseData;
}

async getForecast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=219f397b492b2907aa06bb12361b6aab&units=metric`)
    
    const responseData = await response.json();
    
    return responseData;
}

async getAirPollution() {
    const response = await fetch(`https://api.waqi.info/feed/${this.city}/?token=ada6daee49cdc801445aba1ef37d36ea7cac57b5`);
    
    const responseData = await response.json();
    
    return responseData;

}




}



//ada6daee49cdc801445aba1ef37d36ea7cac57b5

