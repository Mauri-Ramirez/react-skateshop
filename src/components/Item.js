import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';




const Item = ({product}) => {
  return (
    <div className="row row-cols-1 row-cols-md-6 g-4">
    <div className="col">
    <div className="card h-100">
      <img src={product.img} className="card-img-top" alt= "" />
    <div className="card-body"> 
    <div className="card-title">{product.nombre}</div>
    <div className="card-text">{product.precio}</div>
    <Link to={`/item/${product.id}`}>mas info</Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Item