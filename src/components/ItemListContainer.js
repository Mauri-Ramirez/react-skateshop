import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';
import 'bootstrap/dist/css/bootstrap.min.css';



function ItemListContainer() {

    const [productList, setProductList] = useState ([]);
    const {id} = useParams();

    useEffect (() => {
   
        firestoreFetch(id)
          .then(result => setProductList(result))
          .catch(err => console.log(err));
      },[id]);

       useEffect(()=>{
        return (()=>{
          setProductList([]);
        })
      },[]);  

      return (
        <>
        <div className="container overflow-hidden"> 
        <div className="row row-cols-1 row-cols-md-3 gy-5" styleName="">
        <ItemList items={productList}/>
        </div>
        </div>
        </>
            );

  }
  
  export default ItemListContainer; 