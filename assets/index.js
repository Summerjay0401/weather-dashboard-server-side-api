// When I open the weather dashboard
// Then I am presented with the kast searched city forecast
$(document).ready(function() {
    let searchHistoryArr = JSON.parse(localStorage.getItem("city"));

    if(searchHistoryArr !== null) {
        let lastSearchedIndex = searchHistoryArr.length-1;
        let lastSearchedCity = searchHistoryArr[lastSearchedIndex];
        currentCondition(lastSearchedCity);
        console.log('Last Searched city: ${lastSearchedCity');
    }
});