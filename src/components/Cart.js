import { useContext } from "react"
import { CartContext } from "./CartContext"
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const test = useContext(CartContext)
  console.log(test.cartList)
  return (
    <>
    <h2>tu carrito </h2>
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
        <p className="card-text">{item.cantidad}</p>
        <p className="card-text">{item.precio}</p>
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