// Check if the user is logged in when the page loads
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        // User is logged in, show dashboard button and hide the Get Started button
        document.getElementById('dashboardButton').style.display = 'block';
        document.querySelector('.btn.has-before').style.display = 'none'; // Hide "Get Started" button
    } else {
        // User is not logged in, show Get Started button and hide dashboard button
        document.querySelector('.btn.has-before').style.display = 'block';
        document.getElementById('dashboardButton').style.display = 'none';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', checkLoginStatus);
