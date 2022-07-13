import React from 'react';
import ItemCount from './ItemCount'


function ItemListContainer({greating}) {

    const onAdd = (param) => { alert("agregado al carrito")}

    return (
<>
<h2>{greating}</h2>
<ItemCount initial={1} stock={5} onAdd={onAdd}/>
</>
    );
  }
  
  export default ItemListContainer; 