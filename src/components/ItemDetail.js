import React from 'react'


const ItemDetail = ( {Item}) => {

  return ( <>
  
  <div className="card" style="width: 18rem;">
  <img src={Item.img} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{Item.nombre}</p>
    <p className="card-text">{Item.precio}</p>
  </div>
</div>
  
  </>
    
  )
}

export default ItemDetail