import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*
PARA TESTAR A PAGINA  DE LOGIN TIRE A LINHA ABAIXO E COMENTE A LINHA 10


 mude essa <App /> pelo <Home />
*/

/* APAGUE ESSA*/
import Home from './pages/index/cadastro.jsx'
import App from './pages/Home/main/App.jsx'

/* DEIXEI ASSIM PQ TODAS AS VEZES QUE EU TENTAVA FAZER A IMPOTAÇAÕ VEM O CSS JUNTO E MUDA TUDO*/

/* mude essa <App /> pelo <Home />*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
