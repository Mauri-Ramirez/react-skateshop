import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { productsCollection } from '../utils/firebaseConfig';
import { where, query, getDocs } from "firebase/firestore";



function ItemListContainer() {

    const [productList, setProductList] = useState ([])
    const {id} = useParams();

    

    useEffect (() => {

      const requesFilter = id ? query(productsCollection, where("categoria", "==", id)) : productsCollection

      getDocs(requesFilter)
      .then(result => setProductList(result.docs.map(doc => doc.data())))

      .catch(err => console.log(err))
      
    }, [id]); 

    return (
<>
<ItemList items={productList}/>
</>
    );
  }
  
  export default ItemListContainer; 