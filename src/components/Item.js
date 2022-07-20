import React from 'react'


const Item = ({product}) => {
  return (
    <div>
    <div>
      <img src={product.img} alt= "" />
    </div>
    <div>{product.nombre}</div>
    <div>{product.precio}</div>
    </div>
    
  )
}

export default Item