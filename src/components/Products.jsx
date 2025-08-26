
import  React from 'react'


    export default function Products({ id, name, image, rating, price }) {
  // Use 'return' para que o JSX seja exibido
  return (
    <div key={id} className="product_card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="product_details">
        <p className="price">R$ {price}</p>
        <p className="rating">⭐ {rating} estrelas</p>
      </div>
    </div>
  );
}