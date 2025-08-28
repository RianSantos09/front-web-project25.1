
import React from 'react'
import Products from './products.jsx';


export default function ProductsList( { products } ) {
  return <div className='product-list'>

    {products.map((product) =>(
     <Products key={product.id} {...product}/>
     ))}
        
    
  </div> ;

}