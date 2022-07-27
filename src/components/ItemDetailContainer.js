import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product.json';
import ItemDetail from './ItemDetail';




function ItemDetailContainer () {

    const [productList, setProductList] = useState ({});
    const {detailId} = useParams();

    useEffect(() =>{
      const myPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      });

      myPromise.then((res)=>{
        setProductList(res.find((items) => items.id === parseInt(detailId)))
      })

    }, [detailId]);
  
    return (
        <>
        <ItemDetail items={productList}/>
        </>
    );
  }

export default ItemDetailContainer