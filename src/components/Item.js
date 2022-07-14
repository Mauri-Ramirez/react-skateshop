import React from 'react'

const Item = ({product}) => {
  return (
    <div>
    <div>{product.img}</div>
    <div>{product.nombre}</div>
    <div>{product.precio}</div>

    </div>
    
  )
}

export default Item