
import './main.css';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
    return (
        <Router>        
        <div className="App">
            <div className="nav"> 
                <div className="conteudo-interno">
                <h1 className="logo">
                    XP<span>NUTRI</span>
                </h1>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">PRODUTOS</Link></li>
                        <li><Link to="/">CADASTRO</Link></li>
                        <li><Link to="/">CONTATO</Link></li>
                    </ul>
                </nav>
                <div className='nav-icons'>
                    <div className="pesquisa">
                    <input type="search" placeholder="PROCURAR"/>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <button className="carrinho">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    <div className="products-count">56</div>
                    </button>
                    <button className="menu-btn">
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
        </Router>  
    );
}

export default App;