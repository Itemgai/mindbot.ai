// Function to show the modal
function showModal(message) {
    const modal = document.getElementById("alertModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("alertModal");
    modal.style.display = "none";
}

// Close the modal when the user clicks on <span> (x)
document.getElementById("closeModal").onclick = closeModal;

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById("alertModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Function to log in a user
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get existing users from LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists with the provided email and password
    const existingUser = users.find(u => u.email === email && u.password === password);
    
    if (existingUser) {
        // Set login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', existingUser.name); // Save user's name for personalization

        // Show welcome message with the user's name
        showModal(`Login successful! Welcome back, ${existingUser.name}!`);
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to homepage after 2 seconds
        }, 2000); 
    } else {
        showModal('Invalid email or password!');
    }
});
