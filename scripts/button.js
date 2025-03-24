document.addEventListener('DOMContentLoaded', function() {
    const scrollUpButtons = document.querySelectorAll('.scroll-up-button');
    scrollUpButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Aggiungi uno scorrimento fluido
            });
        });
    });
});