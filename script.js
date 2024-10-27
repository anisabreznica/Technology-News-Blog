document.querySelector('.toggle-nav').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});



document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    alert("Thanks for your feedback!");

    this.reset();
});