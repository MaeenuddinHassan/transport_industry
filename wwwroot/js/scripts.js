document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

// Function to toggle the dropdown menu for Services
function toggleDropdown(element) {
    element.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}