import React from "react";
import '../../src/pages/Home/main/main.css';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [show, setshow] = useState(false);
    return (
    <div className="nav"> 
                <div className="conteudo-interno">
                <h1 className="logo">
                    XP<span>NUTRI</span>
                </h1>
            <nav className={`${show && "show"}`}>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">PRODUTOS</Link></li>
                        <li><Link to="/Cadastro">CADASTRO</Link></li>
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
                    <button className="menu-btn" onClick={() => setshow(!show)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
        </div>
        );
}
