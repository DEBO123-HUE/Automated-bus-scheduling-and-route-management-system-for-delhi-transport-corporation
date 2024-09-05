document.addEventListener('DOMContentLoaded', () => {
    const fromStationInput = document.getElementById('from-station');
    const toStationInput = document.getElementById('to-station');
    const swapBtn = document.getElementById('swap-btn');
    const searchBtn = document.getElementById('search-btn');
    const busRouteNoInput = document.getElementById('bus-route-no');
    const searchItems = document.getElementById('search-items');
    const emergencyBtn = document.getElementById('emergency-btn');
    const availabilityStatus = document.getElementById('availability-status');
    const dateTimeSpan = document.getElementById('date-time'); // Correct ID here
    const resetButtons = document.querySelectorAll('.reset-btn');

    // Function to update date and time
    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        dateTimeSpan.textContent = now.toLocaleDateString('en-US', options);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second

    // Functionality to swap 'from' and 'to' stations
    swapBtn.addEventListener('click', () => {
        const temp = fromStationInput.value;
        fromStationInput.value = toStationInput.value;
        toStationInput.value = temp;
    });

    // Reset button functionality for clearing the input fields
    resetButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const inputField = event.target.previousElementSibling;
            inputField.value = '';
        });
    });

    // Functionality for search button
    searchBtn.addEventListener('click', () => {
        const from = fromStationInput.value.trim();
        const to = toStationInput.value.trim();

        if (from && to) {
            const item = document.createElement('div');
            item.classList.add('search-item');
            item.textContent = `${from} to ${to}`;
            searchItems.appendChild(item);

            // Placeholder for checking bus availability
            checkBusAvailability(from, to);
        } else {
            alert('Please enter both boarding and dropping points.');
        }
    });

    function checkBusAvailability(from, to) {
        // Placeholder for bus availability check
        // Simulate a bus availability check (In a real app, you would make a network request here)
        const isBusAvailable = Math.random() > 0.5;

        if (isBusAvailable) {
            availabilityStatus.textContent = '';
        } else {
            availabilityStatus.textContent = 'No buses available in this area.';
        }
    }

    // Function for emergency button
    emergencyBtn.addEventListener('click', () => {
        alert('Emergency triggered! Connecting to server...');
        // Simulate server connection
        setTimeout(() => {
            alert('Sending your live location to the alternate mobile number.');
            // Server-side code needed to send location details and notify the customer
        }, 2000); // Simulate server response delay
    });
});
