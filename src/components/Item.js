import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({product}) => {
  return (
    <div className="col-sm-6"> 
    <div className="card w-75 p-3 text-center h-100">
    <img src={product.img} className="card-img-top" alt= "" />
    <div className="card-body"> 
    <h5 className="card-title">{product.nombre}</h5>
    <p className="card-text">${product.precio}</p>
    <Link className="btn btn-outline-dark" to={`/item/${product.id}`}>Ver mas</Link>
    </div>
    </div>
    </div>
    
  )
}

export default Item