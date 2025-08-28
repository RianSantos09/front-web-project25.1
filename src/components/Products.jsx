
import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  React from 'react'
import { Link } from 'react-router-dom';


    export default function Products({ id, name, image, rating, price }) {

  return (
    <div  className="product">
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">
          <span>R$</span>{price} 
          </p>
          <div className="buttons">
            <Link to="/check" className='btn-icon'>
              <span>COMPRAR AGORA</span>
              <FontAwesomeIcon icon={faMoneyBill}/>
            </Link>
          
          <button className="btn_carrinho btn-icon" >
            <span>ADICIONAR AO CARRINHO</span>
            <FontAwesomeIcon icon={faCartShopping}/>
          </button>
          </div>
    </div>
  );
}