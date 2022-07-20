import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const ItemDetail = ( {product}) => {

  return ( <>
  
  <div>
  <img src={product.img} alt="..."/>
  <div>
    <p>{product.nombre}</p>
    <p >{product.precio}</p>
  </div>
</div>
  
  </>
    
  )
}

export default ItemDetail