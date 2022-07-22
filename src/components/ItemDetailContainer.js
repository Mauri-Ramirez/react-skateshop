import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product.json';
import ItemDetail from './ItemDetail';




function ItemDetailContainer({greating}) {

    const [productList, setProductList] = useState ({});
    const {detailId} = useParams();

    useEffect(() =>{
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 5000);
      });

      myPromise.then((res)=>{
        setProductList(res.filter((item) => item.id === parseInt(detailId)))
      })

    }, [detailId])
  
    return (
<>
<h2>{greating}</h2>
<ItemDetail items={productList}/>
</>
    );
  }

export default ItemDetailContainer