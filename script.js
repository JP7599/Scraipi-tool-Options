// Wait until page loads
document.addEventListener('DOMContentLoaded', function() {
    
    // When search button is clicked
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    searchButton.addEventListener('click', function() {
        if(searchInput.value) {
            alert('Searching for: ' + searchInput.value);
        } else {
            alert('Please enter a search term');
        }
    });

    // Make "Get Started" button work
    const getStartedButton = document.querySelector('.get-started');
    getStartedButton.addEventListener('click', function() {
        alert('Welcome to Scraipi!');
    });
});
