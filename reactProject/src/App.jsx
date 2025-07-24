import React from 'react'; // Importa a biblioteca React
import './App.css'; // Importa o CSS específico para este componente (ou seu main.css)
// Importe o CSS do Bootstrap via NPM, como discutido anteriormente
// Certifique-se de ter instalado com `npm install bootstrap react-bootstrap`
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
// Para usar os componentes Bootstrap do React, você os importaria aqui:
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';


// Define o componente funcional App
function App() {
  return (
    // O JSX precisa de um elemento pai único. O <div> aqui serve a esse propósito.
    // Tudo que era <head> e <body> do HTML é gerenciado de forma diferente no React/Vite.
    // O conteúdo do <head> (meta tags, title, favicons, imports de CSS) é gerenciado no `public/index.html` ou pelo próprio Vite.
    // Os scripts JS (como o seu script.js e os do Bootstrap) são importados no `main.jsx` ou já gerenciados pelo `react-bootstrap`.
    <div>
      <header>
        <h1>SUA MELHOR EXPERIÊNCIA</h1>
      </header>

      <nav id="menu">
        {/*
          IMPORTANTE: 'class' em HTML deve ser 'className' em JSX.
          Todas as tags <img> devem ser auto-fechadas com '/>'.
          Removi os scripts JS do Bootstrap aqui, pois eles devem ser instalados via NPM
          e seus componentes JavaScript substituídos por `react-bootstrap` ou o JS do Bootstrap não é usado.
        */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="../pages/atividade-3.html">SAND BOX</a>
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="../pages/formulario.html">CADASTRO</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    WHEY
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">OPTIMUM NUTRITION </a></li>
                    <li><a className="dropdown-item" href="#">INTEGRALMÉDICA</a></li>
                    <li><a className="dropdown-item" href="#">DUX NUTRITION</a></li>
                    <li><a className="dropdown-item" href="#">GROWTH SUPPLEMENTS</a></li>
                    <li><a className="dropdown-item" href="#">ATLHETICA NUTRITION</a></li>
                    <li><a className="dropdown-item" href="#">MAX TITANIUM</a></li>
                    <li><a className="dropdown-item" href="#">PROBIÓTICA</a></li>
                    <li><a className="dropdown-item" href="#">BLACK SKULL</a></li>
                    <li><a className="dropdown-item" href="#">UNIVERSAL NUTRITION</a></li>
                    <li><a className="dropdown-item" href="#">DYMATIZE</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    CREATINA
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">MAX</a></li>
                    <li><a className="dropdown-item" href="#">DUX</a></li>
                    <li><a className="dropdown-item" href="#">BLACK SKULL</a></li>
                    <li><a className="dropdown-item" href="#">UNIVERSAL NUTRITION</a></li>
                    <li><a className="dropdown-item" href="#">INTEGRALMÉDICA</a></li>
                    <li><a className="dropdown-item" href="#">PROBIÓTICA</a></li>
                    <li><a className="dropdown-item" href="#">SOLDIERS </a></li>
                    <li><a className="dropdown-item" href="#">ATHLETICA NUTRITION</a></li>
                    <li><a className="dropdown-item" href="#">VITAFOR</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true"></a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="pesquisar" aria-label="Search" />
                <button className="btn btn-outline" type="submit"><img src="../assets/img/lupa.png" alt="" /></button>
              </form>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart4"
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </div>
          </div>
        </nav>
      </nav>

      <main>
        <div className="slider-whey">
          <button id="prevbutton"><img src="../assets/img/seta-direita.png" alt="anterior" /></button>

          <div className="img-whey">
            <div className="slider on">
              <img src="../assets/img/whey170X200/delicius_beijinho_de_coco170X200.png" alt="delicius_beijinho_de_coco" />
              <p className="product-title">Whey Delicius Beijinho de Coco</p>
              <p className="product-price">R$ 99,90</p>
              <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-cart-plus"
                  viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </button>
            </div>

            <div className="slider">
              <img src="../assets/img/whey170X200/delicius_doce_de_leite170X200.png" alt="delicius_doce_de_leite" />
              <p className="product-title">Whey Delicius Doce de Leite</p>
              <p className="product-price">R$ 105,00</p>
              <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-cart-plus"
                  viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </button>
            </div>

            <div className="slider">
              <img src="../assets/img/whey170X200/dux170X200.png" alt="dux" />
              <p className="product-title">Whey DUX Nutrition</p>
              <p className="product-price">R$ 119,90</p>
              <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-cart-plus"
                  viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </button>
            </div>

            <div className="slider">
              <img src="../assets/img/whey170X200/maxNatural170X200.png" alt="maxNatural" />
              <p className="product-title">Whey Max Titanium Natural</p>
              <p className="product-price">R$ 89,90 </p>
              <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-cart-plus"
                  viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </button>

            </div>

            <div className="slider">
              <img src="../assets/img/whey170X200/max170x200.png" alt="max100%" />
              <p className="product-title">Whey Max Titanium 100%</p>
              <p className="product-price">R$ 95,50</p>
              <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-cart-plus"
                  viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </button>
            </div>
          </div>

          <button id="nextbutton"> <img src="../assets/img/seta-direita.png" alt="proximo" /></button>
        </div>
      </main>

      <aside></aside>

      <footer id="footer">
        <div className="footer-content">
          <p>&copy; 2025 Xp Nutri Suplementos. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="https://www.instagram.com/xp_nutri/" target="_blank">
              <img src="../assets/img/instagram (2).png" alt="Instagram" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5574999590306&text&type=phone_number&app_absent=0"
              target="_blank">
              <img src="../assets/img/whatsapp.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; // Exporta o componente App para ser usado em main.jsx