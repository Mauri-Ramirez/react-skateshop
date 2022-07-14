import React, { useState } from 'react';
import ItemCount from './ItemCount';
import products from '../data/product.json';
import ItemList from './ItemList';


function ItemListContainer({greating}) {

    const [productList, setProductList] = useState ([])

    const onAdd = (param) => { alert("agregado al carrito")}


    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 300);
      });

      myPromise.then((res)=>{
        setProductList(res)
      })
      

    return (
<>
<h2>{greating}</h2>

<ItemCount initial={1} stock={5} onAdd={onAdd}/>
<ItemList items={productList}/>
</>
    );
  }
  
  export default ItemListContainer; 