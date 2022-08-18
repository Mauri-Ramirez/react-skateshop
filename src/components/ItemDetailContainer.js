import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne } from '../utils/firestoreFetch';

function ItemDetailContainer () {
    const [productList, setProductList] = useState ({});
    const {detailId} = useParams();

    useEffect(()=> {
      firestoreFetchOne(detailId)
        .then(result => setProductList(result))
        .catch(err => console.log(err))
    },[detailId]);

    return (
      <>
      <ItemDetail items={productList}/>
      </>
  );
  }

export default ItemDetailContainer