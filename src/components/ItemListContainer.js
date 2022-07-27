import React, { useEffect, useState } from 'react';
import products from '../data/product.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const [productList, setProductList] = useState ([])
    const {id} = useParams();

    

    useEffect (() => {

        const myPromise = new Promise((resolve) => {
          setTimeout(() => {
            resolve(products);
          }, 1000);
        });

        if (id){
        myPromise.then((res)=>{
          setProductList(res.filter(item => item.categoria === id))
        });
      }else{ 
        myPromise.then((res)=>{
          setProductList(res)
        });
      }  
    }, [id]); 

    return (
<>

<ItemList items={productList}/>
</>
    );
  }
  
  export default ItemListContainer; 