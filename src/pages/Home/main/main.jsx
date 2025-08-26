
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Header from '../../../components/Header';
import ProductsList from '../../../components/ProductsList';
import { useEffect ,useState } from 'react';


function App(){
    const [products, setProducts] = useState([]);   

    useEffect(() => 
    {
        fetch('/db.json')
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    }, [])

    return (
        <Router>        
        <div className="App"> 
            <Navbar/>
            <main>
                <Header/>
                <div className='page-inner'>
                    <div className="section-title">
                        <h3>CONHEÇA NOSSOS PRODUTOS</h3>
                        <div className="uderline"></div>
                    </div>
                    <div className="products-container">
                        <ProductsList products={products}/>
                    </div>
                </div>
            </main>
        </div>
        </Router>  
    );
}

export default App;