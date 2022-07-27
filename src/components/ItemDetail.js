import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';





const ItemDetail = ( {items} ) => {

  const onAdd = (param) => { alert('Agregaste '+(param)+ ' a tu carrito')}
  
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
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  
    </div>
    </div>
    </div>
    </div> 

    </>
  )
}

export default ItemDetail;