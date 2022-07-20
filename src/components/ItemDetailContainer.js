import React, { useState } from 'react';
import products from '../data/product.json';
import ItemDetail from './ItemDetail';



function ItemDetailContainer({greating}) {

    const [productList, setProductList] = useState ({});


    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products[1]);
        }, 300);
      });

      myPromise.then((res)=>{
        setProductList(res)
      })
      

    return (
<>
<h2>{greating}</h2>
<ItemDetail items={productList}/>
</>
    );
  }

export default ItemDetailContainer