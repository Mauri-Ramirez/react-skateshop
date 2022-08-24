import React, { useContext } from "react"
import { CartContext } from "./CartContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"
import Swal from "sweetalert2";

const Cart = () => {
  const test = useContext(CartContext)

  const createOrder = () =>{

    let itemsForDB = test.cartList.map(item => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.quantity
    }))

    
    let order = {
    buyer: {
      email: "aaa@aaa.com",
      name: "aaa",
      phone: "123"
    },
    date: serverTimestamp(),
    items: itemsForDB,
    total: test.totalPrice()  
    }
    

    const createOrderInFirestore = async() =>{
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }

    createOrderInFirestore()
      .then(result =>Swal.fire("tu orden a sido creada. ID=" + result.id))
      .catch(e => console.log(e))

    test.cartList.forEach(async (item) =>{
      const itemRef = doc (db, "products", item.id)
      await updateDoc(itemRef,{
        stock : increment(-item.quantity)
      })
    })

    //borrar carrito
    test.clear()
  }
   
  return (
    <>

    <h2 className="card-title">Tu carrito </h2>
    <Link  type="button" className="btn btn-outline-dark" to="/">Ver todos los productos</Link> 

    {
      (test.cartList.length > 0 )
      ? <button onClick={test.clear} type="button" className="btn btn-outline-dark">Borrar Todo</button>
      : <p className="card-title">Tu carrito esta vacio</p>

    } 

    {
      (test.cartList.length > 0 )
      
      ?<button onClick={createOrder} type="button" class="btn btn-success">Terminar compra</button>
      :  <p></p>
    } 

    {
      test.cartList.length > 0 && test.cartList.map(item => (

      <div className="card mb-3" styleName="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">Precio:${item.precio}</p>
        <p className="card-text">Cantidad:{item.quantity}</p>
        <p className="card-text">${item.quantity * item.precio} </p>
        <button onClick={ ()=> test.removeItem(item.id)} type="button" className="btn btn-outline-dark">Borrar</button>
      </div>
      
    </div>
  </div> 
</div>

      ))  
    }

      {
        (test.cartList.length > 0 )
        
        ?<p className="h5">TOTAL CARRITO: ${test.totalPrice()}</p>
        :<p></p>
      } 
    </>
  )
}

export default Cart 




