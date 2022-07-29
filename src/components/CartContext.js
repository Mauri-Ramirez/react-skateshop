import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, param) => {
        setCartList([...cartList, {
            id: item.id,
            nombre: item.nombre,
            img: item.img,
            precio: item.precio,
            cantidad: item.param
        }])

    }

    const removeItem = (id) => {
       let nuevoEstado = cartList.filter(item => item.id !== id)
       setCartList(nuevoEstado)
    }

    const clear = () =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;