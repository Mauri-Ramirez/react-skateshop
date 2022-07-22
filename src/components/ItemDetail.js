import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const ItemDetail = ( {items}) => {

  return ( <>
  
  <div>
  <img src={items.img} alt=""/>
  <div>
    <p>{items.nombre}</p>
    <p>{items.precio}</p>
  </div>
</div>
  
  </>
    
  )
}

export default ItemDetail