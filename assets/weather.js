const apiKey = "d1e2d0763204896fd894698f5c6e27ee";
const today = moment().format('L');
let searchHistoryList = [];

// function for current condition
function currentCondition(city) {

    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(cityWeatherResponse) {
        console.log(cityWeatherResponse);
        
        $("#weatherContent").css("display", "block");
        $("#cityDetail").empty();
        
        var iconCode = cityWeatherResponse.weather[0].icon;
        var iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;


}