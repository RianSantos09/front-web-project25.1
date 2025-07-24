import React, { useState, useEffect } from 'react';
// import seus.css.aqui; // Se houver estilos específicos para o slider que não estão em App.css

function ProductSlider({ products }) { // Recebe os produtos como prop
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // useEffect para garantir que apenas o primeiro slide esteja "on" na montagem
  useEffect(() => {
    // A classe 'on' será aplicada pelo render() abaixo, não precisamos de manipulação DOM aqui
  }, []);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex === products.length - 1) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex === 0) ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-whey">
      <button id="prevbutton" onClick={prevSlide}>
        <img src="../assets/img/seta-direita.png" alt="anterior" />
      </button>

      <div className="img-whey">
        {products.map((product, index) => (
          <div
            key={index} // Adicione uma key única para cada item na lista
            className={`slider ${index === currentSlideIndex ? 'on' : ''}`}
          >
            <img src={product.imageSrc} alt={product.altText} />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price}</p>
            <button className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-cart-plus"
                viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                <path
                  d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button id="nextbutton" onClick={nextSlide}>
        <img src="../assets/img/seta-direita.png" alt="proximo" />
      </button>
    </div>
  );
}

export default ProductSlider;