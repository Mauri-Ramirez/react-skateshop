import React, { useState } from 'react';
import products from '../data/product.json';
import ItemDetail from './ItemDetail';


function ItemListContainer({greating}) {

    const [productList, setProductList] = useState ([])


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
<ItemDetail></ItemDetail>
</>
    );
  }

export default ItemDetailContainer