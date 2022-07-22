import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import products from '../data/product.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer({greating}) {

    const [productList, setProductList] = useState ([])
    const {id} = useParams();

    const onAdd = (param) => { alert("agregado al carrito")}

    useEffect (() => {
    
      if (id === undefined){
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(products);
          }, 1000);
        });
        myPromise.then((res)=>{
          setProductList(res)
        })
      }else{
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(products.filter(item => item.categoria === id));
          }, 1000);
        });
        myPromise.then((res)=>{
          setProductList(res)
        });
      }  
    }, [id]); 

    return (
<>
<h2>{greating}</h2>

<ItemCount initial={1} stock={5} onAdd={onAdd}/>
<ItemList items={productList}/>
</>
    );
  }
  
  export default ItemListContainer; 