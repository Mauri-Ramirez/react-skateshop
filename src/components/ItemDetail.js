import React, {useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount'; 
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ( {items} ) => {
  const [goCarrito, setGoCarrito] = useState(false)
  const test = useContext(CartContext)

  const onAdd = (quantity) => {
    setGoCarrito(true);
    test.addToCart(items, quantity )
  }

  return ( 
    <> 
    <div className="card mb-3" styleName="max-width: 540px;">
    <div className="row g-0">
    <div className="col-md-4">
    <img src={items.img} className="card-img-top" alt= "" />
    </div>
    <div className="col-md-8"> 
    <div class="card-body"> 
    <h5 className="card-title">{items.nombre}</h5>
    <p className="card-text">{items.descripcion}</p>
    <p className="card-text">Stock:{items.stock}</p>
    <p className="card-text">${items.precio}</p>
    <div>
    {
      goCarrito?<Link className="btn btn-outline-dark" to="/cart">Ver Carrito</Link>:<ItemCount initial={1} stock={5} onAdd={onAdd}/>
      
    }
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default ItemDetail;