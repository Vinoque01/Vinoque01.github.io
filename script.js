// Get DOM elements
// JavaScript to toggle the menu visibility on smaller screens
file://%20grab%20elements%20from%20the%20domconst%20menutoggle%20=%20document.getelementbyid('menutoggle');const%20navlinks%20=%20document.getelementbyid('navlinks');//%20Add%20event%20listener%20to%20toggle%20the%20menu%20visibilitymenuToggle.addEventListener('click',%20()%20=%3E%20%7B%20%20%20%20navLinks.classList.toggle('nav-active');%20%20//%20Toggle%20the%20nav-active%20class%7D);

// Toggle the mobile navigation menu
menuToggle.addEventListener('click', () => {
    // Add or remove the 'nav-active' class to show/hide menu
    navLinks.classList.toggle('nav-active');
    
    // Add animation to menu icon to show it's active
    menuToggle.classList.toggle('toggle-active');
});

// Close the menu when a link is clicked (optional for better UX)
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Hide the mobile menu after selecting a link
        navLinks.classList.remove('nav-active');
        menuToggle.classList.remove('toggle-active');
    });
});


// Function to fetch random user data
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const userImage = data.results[0].picture.large; // Get the large image URL
            document.getElementById('userImage').src = userImage; // Set the image in the HTML
        })
        .catch(error => console.log('Error fetching random user:', error));
}

// Run the function to get a random user image on page load
window.onload = () => {
    fetchRandomUser();
};
