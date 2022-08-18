import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';


function ItemListContainer() {

    const [productList, setProductList] = useState ([])
    const {id} = useParams();

    useEffect (() => {
   
        firestoreFetch(id)
          .then(result => setProductList(result))
          .catch(err => console.log(err));
      },[id]);

      /* useEffect(()=>{
        return (()=>{
          setProductList([]);
        })
      },[]);  */

      return (
        <>
        <ItemList items={productList}/>
        </>
            );

  }
  
  export default ItemListContainer; 