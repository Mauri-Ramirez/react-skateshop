import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount'; 
import { Link } from 'react-router-dom';





const ItemDetail = ( {items} ) => {
  const [goCarrito, setGoCarrito] = useState(false)

  const onAdd = (param) => {
    setGoCarrito(true);
  }
  
  console.log(items);  
  return ( 
    <> 
    <div className="row row-cols-1 row-cols-md-6 g-4">
    <div className="col">
    <div className="card h-100">
    <img src={items.img} className="card-img-top" alt= "" />
    <div className="card-body"> 
    <div className="card-title">{items.nombre}</div>
    <div className="card-text">{items.precio}</div>
    <div>
    {
      goCarrito?<Link to="/cart">Terminar Compra</Link>:<ItemCount initial={1} stock={5} onAdd={onAdd}/>
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