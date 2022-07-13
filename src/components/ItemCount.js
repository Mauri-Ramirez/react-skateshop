import React, {useState} from 'react'



const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const add = () => {
        if(counter < stock){
            const aux = counter+1
            setCounter(aux)
        }else{
            alert("no hay mas stock");
        }
    }

    const subtract = () => {
        if(counter > initial){
            const aux = counter-1
            setCounter(aux)
        }else{
            alert("minimo 1")
        }
    }

  return (
    <div>
        <div>
            <button onClick={add}>+</button>
            <p>{counter}</p>
            <button onClick={subtract}>-</button>
        </div>
        <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount