import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebaseConfig';
import { getDocs, collection} from "firebase/firestore";



function ItemListContainer() {

    const [productList, setProductList] = useState ([])
    const {id} = useParams();

    

    useEffect (() => {

      const firestoreFetch = async () => {
        const productFilter = await getDocs(collection(db, "products"))
        const dataFromFirestore = productFilter.docs.map((doc) =>({
          id: doc.id,
          ...doc.data()
          
        }))
        return dataFromFirestore
      }
      firestoreFetch()
      .then(result => setProductList(result))
      .catch(err => console.log(err))

    }, [id]); 

    return (
<>
<ItemList items={productList}/>
</>
    );
  }
  
  export default ItemListContainer; 