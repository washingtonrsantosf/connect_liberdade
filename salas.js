document.querySelectorAll('.room-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.room-carousel-track');
    const slides = Array.from(track.querySelectorAll('img'));
    const previousButton = carousel.querySelector('.room-carousel-prev');
    const nextButton = carousel.querySelector('.room-carousel-next');

    let currentSlide = 0;
    let autoplay;

    const showSlide = (index) => {
        currentSlide = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const previousSlide = () => showSlide(currentSlide - 1);

    if (slides.length <= 1) {
        previousButton.hidden = true;
        nextButton.hidden = true;
        return;
    }

    const startAutoplay = () => {
        clearInterval(autoplay);
        autoplay = setInterval(nextSlide, 5000);
    };

    previousButton.addEventListener('click', () => {
        previousSlide();
        startAutoplay();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        startAutoplay();
    });

    carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carousel.addEventListener('mouseleave', startAutoplay);

    showSlide(0);
    startAutoplay();
});
