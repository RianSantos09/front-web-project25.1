document.addEventListener('DOMContentLoaded', () => {

    const sliderItems = document.querySelectorAll('.slider-whey .slider'); 
    const prevbutton = document.getElementById('prevbutton');
    const nextbutton = document.getElementById('nextbutton');

    // --- DEBUGGING: Verifique se os elementos foram encontrados ---
    console.log("Slider Items encontrados:", sliderItems.length);
    console.log("Prev Button encontrado:", prevbutton);
    console.log("Next Button encontrado:", nextbutton);
    // --- FIM DEBUGGING ---

    let currentSlideIndex = 0;

    function hideAllSlides(){
        sliderItems.forEach(item => item.classList.remove('on'));
    }

    function showCurrentSlide(){
        if (sliderItems.length > 0) {
            sliderItems[currentSlideIndex].classList.add('on');
        }
    }

    function nextSlide(){
        hideAllSlides();
        currentSlideIndex = (currentSlideIndex === sliderItems.length - 1) ? 0 : currentSlideIndex + 1;
        showCurrentSlide();
        console.log("Próximo slide. Índice atual:", currentSlideIndex); // DEBUG
    }

    function prevSlide(){
        hideAllSlides();
        currentSlideIndex = (currentSlideIndex === 0) ? sliderItems.length - 1 : currentSlideIndex - 1;
        showCurrentSlide();
        console.log("Slide anterior. Índice atual:", currentSlideIndex); // DEBUG
    }

    if (nextbutton) {
        nextbutton.addEventListener('click', nextSlide);
    } else {
        console.error("Erro: Botão 'nextbutton' não encontrado!"); // DEBUG
    }
    
    if (prevbutton) {
        prevbutton.addEventListener('click', prevSlide);
    } else {
        console.error("Erro: Botão 'prevbutton' não encontrado!"); // DEBUG
    }

    showCurrentSlide();
    
});