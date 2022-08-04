import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {  productsCollection } from "../utils/firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

function ItemDetailContainer () {

    const [productList, setProductList] = useState ({});
    const {detailId} = useParams();

    useEffect(() =>{
     /*  const myPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      });

      myPromise.then((res)=>{
        setProductList(res.find((items) => items.id === parseInt(detailId)))
      })
 */
     const itemFilter = query(productsCollection, where("id", "==", detailId))

     getDocs(itemFilter)
     .then(res => setProductList(res.docs.data()))
     .catch(err => console.log(err))

    }, [detailId]);
    return (
        <>
        <ItemDetail items={productList}/>
        </>
    );
  }

export default ItemDetailContainer