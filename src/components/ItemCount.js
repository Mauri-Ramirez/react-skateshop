import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";



const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const add = () => {
        if(counter < stock){
            const aux = counter+1
            setCounter(aux)
        }else{
            Swal.fire("no hay mas stock");
        }
    }

    const subtract = () => {
        if(counter > initial){
            const aux = counter-1
            setCounter(aux)
        }else{
            Swal.fire("minimo 1")
        }
    }

  return (
    <div>
        
        <button type="button" className="btn btn-outline-dark" onClick={add}>+</button>
        <p>{counter}</p>
        <button type="button" className="btn btn-outline-dark" onClick={subtract}>-</button>
        <div>
        <button type="button" className="btn btn-outline-dark" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
        </div>
        
    </div>
  )
}

export default ItemCount