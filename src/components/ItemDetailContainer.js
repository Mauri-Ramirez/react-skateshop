import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {  db } from "../utils/firebaseConfig";
import {   collection, doc, getDoc } from "firebase/firestore";


function ItemDetailContainer () {

    const [productList, setProductList] = useState ({});
    const {detailId} = useParams();

    useEffect(() =>{

     const itemFilter = collection(db, "products");
     const itemRef = doc(itemFilter, detailId);
     getDoc(itemRef)
     .then(res =>{
      const product = {
        id: res.id,
        ...res.data(),
      }
      setProductList(product);
     })
     .catch(err => console.log(err))

    }, [detailId]);
    return (
        <>
        <ItemDetail items={productList}/>
        </>
    );
  }

export default ItemDetailContainer