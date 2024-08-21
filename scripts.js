function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}




document.querySelector('.scroll-down').addEventListener('click', function() {
    // Get all sections
    const sections = Array.from(document.querySelectorAll('section'));

    // Get the currently visible section
    let currentIndex = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentIndex = index;
        }
    });

    // Get the next section
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];

    // Scroll to the next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
});
