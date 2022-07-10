// add on click event listener
$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    let city = $("#enterCity").val().trim();
    currentCondition(city);
    if (!searchHistoryList.includes(city)) {
        searchHistoryList.push(city);
        let searchedCity = $(`
            <li class="list-group-item">${city}</li>
        `);
        $("searchHistory").append(searchedCity);
    };

    localStorage.setItem("city", JSON.stringify(searchHistoryList));
    console.log(searchHistoryList);
    });

//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city

$(document).on("click", "list-group-item", function() {
    let listCity = $(this).text();
    currentCondition(listCity);
});

// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
$(document).ready(function() {
    let searchHistoryArr = JSON.parse(localStorage.getItem("city"));

    if(searchHistoryArr !== null) {
        let lastSearchedIndex = searchHistoryArr.length-1;
        let lastSearchedCity = searchHistoryArr[lastSearchedIndex];
        currentCondition(lastSearchedCity);
        console.log('Last Searched city: ${lastSearchedCity');
    }
});

