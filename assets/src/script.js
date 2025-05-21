document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelectorAll('.slider'); 
    const prevbutton = document.getElementById('prevbutton');
    const nextbutton = document.getElementById('nextbutton');

    let carrossel = 0;

    function hideSlider(){
        slider.forEach(item => item.classList.remove('on'));
    }

    function showSlider(){
        slider[carrossel].classList.add('on');
    }

    function nextSlider(){
        hideSlider();
        carrossel = (carrossel === slider.length - 1) ? 0 : carrossel + 1;
        showSlider();
    }

    function prevSlider(){
        hideSlider();
        carrossel = (carrossel === 0) ? slider.length - 1 : carrossel - 1;
        showSlider();
    }

    nextbutton.addEventListener('click', nextSlider);
    prevbutton.addEventListener('click', prevSlider);
    
});