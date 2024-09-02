document.addEventListener('DOMContentLoaded', () => {
    const fromStationInput = document.getElementById('from-station');
    const toStationInput = document.getElementById('to-station');
    const swapButton = document.getElementById('swap-btn');
    const searchButton = document.getElementById('search-btn');
    const busRouteSearchButton = document.querySelector('.bus-route-search-btn button');
    const busRouteInput = document.getElementById('bus-route-no');
    const searchHistoryContainer = document.getElementById('search-items');

    // Swap boarding and dropping points
    swapButton.addEventListener('click', () => {
        const fromValue = fromStationInput.value;
        fromStationInput.value = toStationInput.value;
        toStationInput.value = fromValue;
    });

    // Search Buses based on boarding and dropping points
    searchButton.addEventListener('click', () => {
        const fromStation = fromStationInput.value.trim();
        const toStation = toStationInput.value.trim();

        if (fromStation && toStation) {
            addToSearchHistory(`Bus from ${fromStation} to ${toStation}`);
        } else {
            alert('Please enter both Boarding and Dropping points.');
        }
    });

    // Search Buses based on route number
    busRouteSearchButton.addEventListener('click', () => {
        const routeNumber = busRouteInput.value.trim();

        if (routeNumber) {
            addToSearchHistory(`Route No: ${routeNumber}`);
        } else {
            alert('Please enter a Bus Route Number.');
        }
    });

    // Add searches to history
    function addToSearchHistory(searchTerm) {
        const searchItem = document.createElement('div');
        searchItem.textContent = searchTerm;
        searchItem.classList.add('search-item');

        searchHistoryContainer.appendChild(searchItem);

        // Optional: Clear input fields after search
        fromStationInput.value = '';
        toStationInput.value = '';
        busRouteInput.value = '';
    }

    // Handle reset buttons in search inputs
    document.querySelectorAll('.input-group button[type="reset"]').forEach((resetButton, index) => {
        resetButton.addEventListener('click', () => {
            if (index === 0) {
                fromStationInput.value = '';
            } else {
                toStationInput.value = '';
            }
        });
    });
});
