 import React, { useContext } from "react"
import { CartContext } from "./CartContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Cart = () => {
  const test = useContext(CartContext)
  
  return (
    <>

    <h2 className="card-title">Tu carrito </h2>
    <Link  type="button" className="btn btn-outline-dark" to="/">Ver todos los productos</Link> 

    {
      (test.cartList.length > 0)
      ? <button onClick={test.clear} type="button" className="btn btn-outline-dark">Borrar Todo</button>
      : <p className="card-title">Tu carrito esta vacio</p>

    } 

    {
      test.cartList.length > 0 && test.cartList.map(item => (

      <div className="card mb-3" styleName="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.precio}</p>
        <p className="card-text">{item.quantity}</p>
        <p className="card-text">{item.quantity * item.precio} </p>
        <button onClick={ ()=> test.removeItem(item.id)} type="button" className="btn btn-outline-dark">Borrar</button>
      </div>
      
    </div>
  </div>
</div>
      ))
    }
    </>
  )
}

export default Cart 







