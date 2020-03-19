class UI {
    constructor(){ 

        //Current Weather

        this.location = document.getElementById('w-location');

        this.desc = document.getElementById('w-desc');

        this.string = document.getElementById('w-string');

        this.details = document.getElementById('w-details');

        this.icon = document.getElementById('w-icon');

        this.humidity = document.getElementById('w-humidity');

        this.feelsLike = document.getElementById('w-feels-like');

        this.dewPoint = document.getElementById('w-dewpoint');

        this.location = document.getElementById('w-location');

        this.wind = document.getElementById('w-wind');

        this.weatherInfo = document.querySelector('.weather-info')

        //Cards and Forecast
        
        this.cardBody = document.querySelector('.card-body');

        this.card1 = document.getElementById('card1');

        this.card2 = document.getElementById('card2');

        this.card3 = document.getElementById('card3');

        this.forecastImage1 = document.getElementById('forecast1');

        this.forecastImage2 = document.getElementById('forecast2');

        this.forecastImage3 = document.getElementById('forecast3');

        this.cardTime1 = document.getElementById('card-time1')
        
        this.cardTime2 = document.getElementById('card-time2')
        
        this.cardTime3 = document.getElementById('card-time3')

        this.cardText1 = document.querySelector('.card-text1')
        
        this.cardText2 = document.querySelector('.card-text2')
        
        this.cardText3 = document.querySelector('.card-text3')

        this.cardTemp1 = document.querySelector('.card-temp1')

        this.cardTemp2 = document.querySelector('.card-temp2')

        this.cardTemp3 = document.querySelector('.card-temp3')
        //Left Column Image

        this.updateImage = document.querySelector('.left-col');

        //Right Column Color
        
        this.updateColor = document.querySelector('.weather-now');
        
        //Photography Menu

        this.menuSelect = document.querySelector('.fas');

        this.menuInfo = document.querySelector('.fade-menu');

        this.menuBackground = document.querySelector('.menu-background');

        this.rainRating = document.getElementById('rain-rating');

        this.goldenHour = document.getElementById('golden-hour');

        this.airQuality = document.getElementById('air-quality');

        //Search Bar

        this.inputValue = document.getElementById('input-value');

        this.search = document.getElementById('search');




        this.h1 = document.getElementsByTagName('h1');

    
        
    }



paint(weather) {
    const black = 'black';  
    const white = 'white';


 

    let header = this.h1;
    let headerValue = Object.values(header).value;
    
    this.location.textContent = weather.name;
    let desc = this.desc = weather.weather[0].main;
    let string = this.string.textContent = Math.floor(weather.main.temp) + '°C';
    

    let descString = this.desc;
    let iconImg = this.icon;
    let locationName = this.location.textContent;
  
    this.weatherInfo.textContent = `${desc} ${string}`;
 


    

    
    //weather icons
    if(weather.weather[0].description === "light rain" || weather.weather[0].description === "moderate rain" || weather.weather[0].description === "freezing rain" || weather.weather[0].description === "light intensity shower rain" || weather.weather[0].description === "shower rain") {
        this.icon.setAttribute('src', './images/whitelight.png');
        let imgIcon = this.icon;
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
        this.updateImage.style.backgroundImage = "url('./images/pic2.jpg')";
    } else if (weather.weather[0].description === "heavy intensity rain" || weather.weather[0].description === "very heavy rain" || weather.weather[0].description === "extreme rain" || weather.weather[0].description === "heavy intensity shower rain" || weather.weather[0].description === "ragged shower rain"){
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
        this.icon.setAttribute('src', './images/whiterain.png');
        this.updateImage.style.backgroundImage = "url('./images/pic2.jpg')";
    } else if (weather.weather[0].description === "clear sky"){
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
        this.updateImage.style.backgroundImage = "url('./images/pic3.jpg')";
        this.icon.setAttribute('src', './images/whitesun.png');
    } else if (weather.weather[0].main === "Clouds"){
        this.icon.setAttribute('src', './images/whitecloud.png');
        let imgIcon = this.icon;
        imgIcon.style.marginRight = "10px";
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
        this.updateImage.style.backgroundImage = "url('./images/pic8.jpg')"
    } else if (weather.weather[0].main === "Thunderstorm"){
        this.updateImage.style.backgroundImage = "url('./images/pic6.jpg')";
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
        this.icon.setAttribute('src', './images/whitestorm.png');
    } else if (weather.weather[0].main === "Drizzle"){
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
        this.updateImage.style.backgroundImage = "url('./images/pic2.jpg')";
        this.icon.setAttribute('src', './images/whiterain.png');
    } else if (weather.weather[0].main === "Snow"){
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
        this.icon.setAttribute('src', './images/whitesnow.png');
        this.updateImage.style.backgroundImage = "url('./images/pic5.jpg')";
    } else if (weather.weather[0].main === "Mist" || weather.weather[0].main === "Smoke" || weather.weather[0].main ===  "Haze" || weather.weather[0].main ===  "Sand" || weather.weather[0].main ===  "Fog" || weather.weather[0].main ===  "Dust" || weather.weather[0].main ===  "Squall" || weather.weather[0].main ===  "Tornado" ){
        this.icon.setAttribute('src', './images/whitefog.png');
        let menuIcon = this.icon;
        menuIcon.style.width = "100px";
        menuIcon.style.marginRight = '10px';
        this.updateImage.style.backgroundImage = "url('./images/pic4.jpg')";
        this.updateColor.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
        this.menuBackground.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
    }
    
    /*
    if(this.icon.src === 'http://127.0.0.1:5500/whitelight.png') {
        this.icon.style.transform = "translateY(20%)";
       // this.icon.style.marginRight = "3px";
    }
    */


    //this.time.textContent = weather.list[8].dt_txt.split(' ')[1].slice(0, -3); 

    //Time Function
    const now = new Date();
  
    const hrsNum = document.querySelector('.hrs').innerText = now.getHours();
    const minNum = document.querySelector('.mins').innerText = now.getMinutes();

    if (minNum < 10) {
        document.querySelector('.colon1').innerText = ':0';
      } else if (minNum >= 10) {
        document.querySelector('.colon1').innerText = ':';
      };

    if(weather.rain){
    let value = weather.rain;
    let rainValue = parseFloat(Object.values(value));
   
    if(rainValue < 2.5) {
        this.rainRating.innerText = "1/5";
    } else if (rainValue > 2.5 && rainValue < 3) {
        this.rainRating.innerText = "2/5";
    } else if (rainValue > 3 && rainValue < 3.5) {
        this.rainRating.innerText = "3/5";
    } else if (rainValue > 4 && rainValue < 5) {
        this.rainRating.innerText = "4/5";
    } else if (rainValue > 6) {
        this.rainRating.innerText = "5/5";
    }
    } else {
        this.rainRating.innerText = "0/5";
    }


    const unixTime = weather.sys.sunset;

    const date = new Date(unixTime);

    const sunsetHours = date.getHours() + 2;

    const sunriseHours = date.getHours() - 3;
     

    if(hrsNum >= 7 && hrsNum < 19 ){
    this.goldenHour.innerText = `Around ${sunsetHours}:00`;
    } else {
    this.goldenHour.innerText = `Around ${sunriseHours} a.m.`;
    }
}

//Forecast
paintForecast(weather){
    if(weather.list[3].weather[0].main === "Clear") {
        this.forecastImage1.setAttribute('src', './images/blacksun.png');
    } else if (weather.list[3].weather[0].main === "Drizzle" || weather.list[3].weather[0].main === "Rain") {
        this.forecastImage1.setAttribute('src', './images/blackrain.png');
    } else if (weather.list[3].weather[0].main === "Thunderstorm") {
        this.forecastImage1.setAttribute('src', './images/blackstorm.png');
    } else if (weather.list[3].weather[0].main === "Snow") {
        this.forecastImage1.setAttribute('src', './images/blacksnow.png');
    } else if (weather.list[3].weather[0].main === "Clouds") {
        this.forecastImage1.setAttribute('src', './images/blackcloud.png');
    } else if (weather.list[3].weather[0].main === "Mist" || weather.list[3].weather[0].main === "Smoke" || weather.list[3].weather[0].main ===  "Haze" || weather.list[3].weather[0].main ===  "sand/ dust whirls" || weather.list[3].weather[0].main ===  "fog" || weather.list[3].weather[0].main ===  "sand" || weather.list[3].weather[0].main ===  "dust" || weather.list[3].weather[0].main ===  "volcanic ash" || weather.list[3].weather[0].main ===  "squalls" || weather.list[3].weather[0].main ===  "tornado" ){

        this.forecastImage1.setAttribute('src', './images/blackfog.png');
    };

    if(weather.list[4].weather[0].main === "Clear") {
        this.forecastImage2.setAttribute('src', './images/blacksun.png');
    } else if (weather.list[4].weather[0].main === "Drizzle" || weather.list[4].weather[0].main === "Rain") {
        this.forecastImage2.setAttribute('src', './images/blackrain.png');
    } else if (weather.list[4].weather[0].main === "Thunderstorm") {
        this.forecastImage2.setAttribute('src', './images/blackstorm.png');
    } else if (weather.list[4].weather[0].main === "Snow") {
        this.forecastImage2.setAttribute('src', './images/blacksnow.png');
    } else if (weather.list[4].weather[0].main === "Clouds") {
        this.forecastImage2.setAttribute('src', './images/blackcloud.png');
    } else if (weather.list[4].weather[0].main === "mist" || weather.list[4].weather[0].main === "Smoke" || weather.list[4].weather[0].main ===  "Haze" || weather.list[4].weather[0].main ===  "sand/ dust whirls" || weather.list[4].weather[0].main ===  "fog" || weather.list[4].weather[0].main ===  "sand" || weather.list[4].weather[0].main ===  "dust" || weather.list[4].weather[0].main ===  "volcanic ash" || weather.list[4].weather[0].main ===  "squalls" || weather.list[4].weather[0].main ===  "tornado" ){
        this.forecastImage2.setAttribute('src', './images/blackfog.png');
    };

    if(weather.list[5].weather[0].main === "Clear") {
        this.forecastImage3.setAttribute('src', './images/blacksun.png');
    } else if (weather.list[5].weather[0].main === "Drizzle" || weather.list[5].weather[0].main === "Rain") {
        this.forecastImage3.setAttribute('src', './images/blackrain.png');
    } else if (weather.list[5].weather[0].main === "Thunderstorm") {
        this.forecastImage3.setAttribute('src', './images/blackstorm.png');
    } else if (weather.list[5].weather[0].main === "Snow") {
        this.forecastImage3.setAttribute('src', './images/blacksnow.png');
    } else if (weather.list[5].weather[0].main === "Clouds") {
        this.forecastImage3.setAttribute('src', './images/blackcloud.png');
    } else if (weather.list[5].weather[0].main === "mist" || weather.list[5].weather[0].main === "Smoke" || weather.list[5].weather[0].main ===  "Haze" || weather.list[5].weather[0].main ===  "sand/ dust whirls" || weather.list[5].weather[0].main ===  "fog" || weather.list[5].weather[0].main ===  "sand" || weather.list[5].weather[0].main ===  "dust" || weather.list[5].weather[0].main ===  "volcanic ash" || weather.list[5].weather[0].main ===  "squalls" || weather.list[5].weather[0].main ===  "tornado" ){
        this.forecastImage3.setAttribute('src', './images/blackfog.png');
    };


    //card times
    const card1Time = weather.list[3].dt_txt.split(' ')[1].slice(0, -3);
    this.cardTime1.innerText = card1Time;


    const card2Time = weather.list[4].dt_txt.split(' ')[1].slice(0, -3);
    this.cardTime2.innerText = card2Time;

    const card3Time = weather.list[5].dt_txt.split(' ')[1].slice(0, -3);
    this.cardTime3.innerText = card3Time;

    //card weather text
    this.cardText1.innerText = weather.list[3].weather[0].main;
    let updateWeather1 = this.cardText1.innerText;
    this.cardText2.innerText = weather.list[4].weather[0].main;
    let updateWeather2 = this.cardText2.innerText;
    this.cardText3.innerText = weather.list[5].weather[0].main;
    let updateWeather3 = this.cardText3.innerText;

    //card temp text
    let updateTemp1 = this.cardTemp1.innerText = Math.floor(weather.list[3].main.temp) + '°C';
    let updateTemp2 = this.cardTemp2.innerText = Math.floor(weather.list[4].main.temp) + '°C';
    let updateTemp3 = this.cardTemp3.innerText = Math.floor(weather.list[5].main.temp) + '°C';

    let rainRate = this.rainRating;
    let minNum = document.querySelector('.mins');
    let hrsNum = document.querySelector('.hrs');
    let colon = document.querySelector('.colon1');
    let weatherIcon = this.icon;
    const white = "white";

    //card images

    let cardImg1 = this.forecastImage1.getAttribute('src').split('k').pop();
    const finalImg1 = white + cardImg1;

       
    let cardImg2 = this.forecastImage2.getAttribute('src').split('k').pop();
    const finalImg2 = white + cardImg2;

       
    let cardImg3 = this.forecastImage3.getAttribute('src').split('k').pop();
    const finalImg3 = white + cardImg3;

    let updateWeather = this.weatherInfo;

    //color
    let menuColor = this.menuBackground;
    let mainColor = this.updateColor;
    let updateImage = this.updateImage;


    //update main info card with forecast
    this.card1.addEventListener('click', function(){
       
        hrsNum.innerText = card1Time;
        minNum.innerText = "";
        colon.innerText = "";
        weatherIcon.setAttribute('src', finalImg1);
        updateWeather.innerText = `${updateWeather1} ${updateTemp1}`;
        if(weather.list[4].rain){
            let value = weather.list[4].rain;
            let rainValue = parseFloat(Object.values(value));
           
           
            if(rainValue < 2.5) {
                rainRate.innerText = "1/5";
            } else if (rainValue > 2.5 && rainValue < 3) {
                rainRate.innerText = "2/5";
            } else if (rainValue > 3 && rainValue < 3.5) {
                rainRate.innerText = "3/5";
            } else if (rainValue > 4 && rainValue < 5) {
                rainRate.innerText = "4/5";
            } else if (rainValue > 6) {
                rainRate.innerText = "5/5";
            }
            } else {
                rainRate.innerText = "0/5";
            }

            if(weather.list[3].weather[0].main === "Clear") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
                updateImage.style.backgroundImage = "url('./images/pic3.jpg')"
            } else if (weather.list[3].weather[0].main === "Drizzle" || weather.list[3].weather[0].main === "Rain") {
                menuColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
                mainColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
                updateImage.style.backgroundImage = "url('./images/pic2.jpg')";
            } else if (weather.list[3].weather[0].main === "Thunderstorm") {
                updateImage.style.backgroundImage = "url('./images/pic6.jpg')";
                menuColor.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
                mainColor.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
            } else if (weather.list[3].weather[0].main === "Snow") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
                updateImage.style.backgroundImage = "url('./images/pic5.jpg')";
            } else if (weather.list[3].weather[0].main === "Clouds") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
                updateImage.style.backgroundImage = "url('./images/pic8.jpg')";
            } else if (weather.list[3].weather[0].main === "Mist" || weather.list[3].weather[0].main === "Smoke" || weather.list[3].weather[0].main ===  "Haze" || weather.list[3].weather[0].main ===  "sand/ dust whirls" || weather.list[3].weather[0].main ===  "fog" || weather.list[3].weather[0].main ===  "sand" || weather.list[3].weather[0].main ===  "dust" || weather.list[3].weather[0].main ===  "volcanic ash" || weather.list[3].weather[0].main ===  "squalls" || weather.list[3].weather[0].main ===  "tornado" ){
                mainColor.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
                updateImage.style.backgroundImage = "url('./images/pic4.jpg')";
            };
    
       
    })
    //update main info card with forecast
    this.card2.addEventListener('click', function(){
        hrsNum.innerText = card2Time;
        minNum.innerText = "";
        colon.innerText = "";
        weatherIcon.setAttribute('src', finalImg2);
        updateWeather.innerText = `${updateWeather2} ${updateTemp2}`;

        if(weather.list[4].rain){
            let value = weather.list[4].rain;
            let rainValue = parseFloat(Object.values(value));
            if(rainValue < 2.5) {
                rainRate.innerText = "1/5";
            } else if (rainValue > 2.5 && rainValue < 3) {
                rainRate.innerText = "2/5";
            } else if (rainValue > 3 && rainValue < 3.5) {
                rainRate.innerText = "3/5";
            } else if (rainValue > 4 && rainValue < 5) {
                rainRate.innerText = "4/5";
            } else if (rainValue > 6) {
                rainRate.innerText = "5/5";
            }
            } else {
                rainRate.innerText = "0/5";
            };

            if(weather.list[4].weather[0].main === "Clear") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
                updateImage.style.backgroundImage = "url('./images/pic3.jpg')"
            } else if (weather.list[4].weather[0].main === "Drizzle" || weather.list[4].weather[0].main === "Rain") {
                menuColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
                mainColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
                updateImage.style.backgroundImage = "url('./images/pic2.jpg')";
            } else if (weather.list[4].weather[0].main === "Thunderstorm") {
                updateImage.style.backgroundImage = "url('./images/pic6.jpg')";
                menuColor.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
                mainColor.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
            } else if (weather.list[4].weather[0].main === "Snow") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
                updateImage.style.backgroundImage = "url('./images/pic5.jpg')";
            } else if (weather.list[4].weather[0].main === "Clouds") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
                updateImage.style.backgroundImage = "url('./images/pic8.jpg')";
            } else if (weather.list[4].weather[0].main === "Mist" || weather.list[4].weather[0].main === "Smoke" || weather.list[4].weather[0].main ===  "Haze" || weather.list[4].weather[0].main ===  "sand/ dust whirls" || weather.list[4].weather[0].main ===  "fog" || weather.list[4].weather[0].main ===  "sand" || weather.list[4].weather[0].main ===  "dust" || weather.list[4].weather[0].main ===  "volcanic ash" || weather.list[4].weather[0].main ===  "squalls" || weather.list[4].weather[0].main ===  "tornado" ){
                mainColor.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
                updateImage.style.backgroundImage = "url('./images/pic4.jpg')";
            };
    
       
    })
    //update main info card with forecast
      this.card3.addEventListener('click', function(){
            hrsNum.innerText = card3Time;
               minNum.innerText = "";
        colon.innerText = "";
        weatherIcon.setAttribute('src', finalImg3);
        updateWeather.innerText = `${updateWeather3} ${updateTemp3}`;

        if(weather.list[5].rain){
            let value = weather.list[5].rain;
            let rainValue = parseFloat(Object.values(value));
      
           
            if(rainValue < 2.5) {
                rainRate.innerText = "1/5";
            } else if (rainValue > 2.5 && rainValue < 3) {
                rainRate.innerText = "2/5";
            } else if (rainValue > 3 && rainValue < 3.5) {
                rainRate.innerText = "3/5";
            } else if (rainValue > 4 && rainValue < 5) {
                rainRate.innerText = "4/5";
            } else if (rainValue > 6) {
                rainRate.innerText = "5/5";
            }
            } else {
                rainRate.innerText = "0/5";
            }

            if(weather.list[5].weather[0].main === "Clear") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #6441A5, #C779D0)";
                updateImage.style.backgroundImage = "url('./images/pic3.jpg')"
            } else if (weather.list[5].weather[0].main === "Drizzle" || weather.list[5].weather[0].main === "Rain") {
                menuColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
                mainColor.style.background="-webkit-linear-gradient(210deg, #fc00ff,  #00dbde)";
                updateImage.style.backgroundImage = "url('./images/pic2.jpg')";
            } else if (weather.list[5].weather[0].main === "Thunderstorm") {
                updateImage.style.backgroundImage = "url('./images/pic6.jpg')";
                menuColor.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
                mainColor.style.background="-webkit-linear-gradient(210deg, #485563,  #0b8793)";
            } else if (weather.list[5].weather[0].main === "Snow") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #8e9eab,  #eef2f3)";
                updateImage.style.backgroundImage = "url('./images/pic5.jpg')";
            } else if (weather.list[5].weather[0].main === "Clouds") {
                mainColor.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #d7d2cc,  #304352)";
                updateImage.style.backgroundImage = "url('./images/pic8.jpg')";
            } else if (weather.list[5].weather[0].main === "Mist" || weather.list[5].weather[0].main === "Smoke" || weather.list[5].weather[0].main ===  "Haze" || weather.list[5].weather[0].main ===  "sand/ dust whirls" || weather.list[5].weather[0].main ===  "fog" || weather.list[5].weather[0].main ===  "sand" || weather.list[5].weather[0].main ===  "dust" || weather.list[5].weather[0].main ===  "volcanic ash" || weather.list[5].weather[0].main ===  "squalls" || weather.list[5].weather[0].main ===  "tornado" ){
                mainColor.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
                menuColor.style.background="-webkit-linear-gradient(210deg, #e6dada,  #274046)";
                updateImage.style.backgroundImage = "url('./images/pic4.jpg')";
            };
    
       
    })
    
    
}

//air pollution API
airPollution(weather){
    

    if(weather.data.iaqi.pm10){
        const pollutionObject10 = weather.data.iaqi.pm10;
        const pollutionValue = parseFloat(Object.values(pollutionObject10));
           
    if (pollutionValue <= 50) {
        this.airQuality.innerText = "Good";
        this.airQuality.style.color = "Green";
    } else if (pollutionValue > 51 && pollutionValue < 101) {
        this.airQuality.innerText = "Moderate";
        this.airQuality.style.color = "rgb(250, 223, 89)";
    } else if (pollutionValue > 101 && pollutionValue < 150) {
        this.airQuality.innerText = "Unhealthy";
        this.airQuality.style.color = "Orange";
    } else if (pollutionValue > 151 && pollutionValue < 200) {
        this.airQuality.innerText = "Unhealthy";
        this.airQuality.style.color = "Red";
    } else if (pollutionValue > 201 && pollutionValue < 300) {
        this.airQuality.innerText = "Very Unhealthy";
        this.airQuality.style.color = "Purple";
    } else if (pollutionValue > 300) {
        this.airQuality.innerText = "Hazardous";
        this.airQuality.style.color = "rgb(116, 20, 37)";
    }
    } else if (weather.data.iaqi.pm25) {
        const pollutionObject25 = weather.data.iaqi.pm25;
        const pm25 = parseFloat(Object.values(pollutionObject25));
        if (pm25 <= 50) {
            this.airQuality.innerText = "Good";
            this.airQuality.style.color = "Green";
        } else if (pm25 > 51 && pm25 < 101) {
            this.airQuality.innerText = "Moderate";
            this.airQuality.style.color = "rgb(250, 223, 89)";
        } else if (pm25 > 101 && pm25 < 150) {
            this.airQuality.innerText = "Unhealthy";
            this.airQuality.style.color = "Orange";
        } else if (pm25 > 151 && pm25 < 200) {
            this.airQuality.innerText = "Unhealthy";
            this.airQuality.style.color = "Red";
        } else if (pm25 > 201 && pm25 < 300) {
            this.airQuality.innerText = "Very Unhealthy";
            this.airQuality.style.color = "Purple";
        } else if (pm25 > 300) {
            this.airQuality.innerText = "Hazardous";
            this.airQuality.style.color = "rgb(116, 20, 37)";
        }
    } 

    
}

}


//Time
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

getTime();

