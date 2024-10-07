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

// Function to register a user
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Get existing users from LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        showModal('User already exists!');
    } else {
        // Add new user
        users.push({ name, email, phone, password });
        localStorage.setItem('users', JSON.stringify(users)); // Save to LocalStorage
        showModal('Registration successful! You can now log in.');
        setTimeout(() => {
            window.location.href = 'login.html'; // Redirect to login page
        }, 2000); // Redirect after 2 seconds
    }
});
