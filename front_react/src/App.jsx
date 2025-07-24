import React from 'react'; // Importa a biblioteca React
import './App.css'; // Importa o CSS específico para este componente (ou seu main.css)
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'; // Componentes React-Bootstrap
import ProductSlider from './components/ProductSlider'; // Importa o componente ProductSlider



function App() {
  // 1. Defina os dados dos seus produtos aqui.
  // Estes dados serão passados para o componente ProductSlider.
  const productData = [
    {
      imageSrc: '/front_react/assets/img/delicius_beijinho_de_coco170X200.png',
      altText: 'delicius_beijinho_de_coco',
      title: 'Whey Delicius Beijinho de Coco',
      price: 'R$ 99,90'
    },
    {
      imageSrc: '../assets/img/whey170X200/delicius_doce_de_leite170X200.png',
      altText: 'delicius_doce_de_leite',
      title: 'Whey Delicius Doce de Leite',
      price: 'R$ 105,00'
    },
    {
      imageSrc: '../assets/img/whey170X200/dux170X200.png',
      altText: 'dux',
      title: 'Whey DUX Nutrition',
      price: 'R$ 119,90'
    },
    {
      imageSrc: '../assets/img/whey170X200/maxNatural170X200.png',
      altText: 'maxNatural',
      title: 'Whey Max Titanium Natural',
      price: 'R$ 89,90'
    },
    {
      imageSrc: '../assets/img/whey170X200/max170x200.png',
      altText: 'max100%',
      title: 'Whey Max Titanium 100%',
      price: 'R$ 95,50'
    },
  ];

  return (
    <div>
      <header>
        <h1>SUA MELHOR EXPERIÊNCIA</h1>
      </header>

      <nav id="menu">
        {/* Usando componentes React-Bootstrap para a Navbar (melhor prática) */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
            <Navbar.Collapse id="navbarTogglerDemo01">
              <Navbar.Brand href="../pages/atividade-3.html">SAND BOX</Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="../pages/formulario.html">CADASTRO</Nav.Link>
                <NavDropdown title="WHEY" id="nav-dropdown-whey">
                  <NavDropdown.Item href="#">OPTIMUM NUTRITION</NavDropdown.Item>
                  <NavDropdown.Item href="#">INTEGRALMÉDICA</NavDropdown.Item>
                  <NavDropdown.Item href="#">DUX NUTRITION</NavDropdown.Item>
                  <NavDropdown.Item href="#">GROWTH SUPPLEMENTS</NavDropdown.Item>
                  <NavDropdown.Item href="#">ATLHETICA NUTRITION</NavDropdown.Item>
                  <NavDropdown.Item href="#">MAX TITANIUM</NavDropdown.Item>
                  <NavDropdown.Item href="#">PROBIÓTICA</NavDropdown.Item>
                  <NavDropdown.Item href="#">BLACK SKULL</NavDropdown.Item>
                  <NavDropdown.Item href="#">UNIVERSAL NUTRITION</NavDropdown.Item>
                  <NavDropdown.Item href="#">DYMATIZE</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="CREATINA" id="nav-dropdown-creatina">
                  <NavDropdown.Item href="#">MAX</NavDropdown.Item>
                  <NavDropdown.Item href="#">DUX</NavDropdown.Item>
                  <NavDropdown.Item href="#">BLACK SKULL</NavDropdown.Item>
                  <NavDropdown.Item href="#">UNIVERSAL NUTRITION</NavDropdown.Item>
                  <NavDropdown.Item href="#">INTEGRALMÉDICA</NavDropdown.Item>
                  <NavDropdown.Item href="#">PROBIÓTICA</NavDropdown.Item>
                  <NavDropdown.Item href="#">SOLDIERS </NavDropdown.Item>
                  <NavDropdown.Item href="#">ATHLETICA NUTRITION</NavDropdown.Item>
                  <NavDropdown.Item href="#">VITAFOR</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link disabled aria-disabled="true"></Nav.Link>
              </Nav>
              <Form className="d-flex" role="search">
                <FormControl type="search" placeholder="pesquisar" className="me-2" aria-label="Search" />
                <Button variant="outline-success" type="submit">
                  <img src="../assets/img/lupa.png" alt="" />
                </Button>
              </Form>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart4"
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>

      <main>
        {/* 2. Use o componente ProductSlider e passe os dados dos produtos */}
        <ProductSlider products={productData} />
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
