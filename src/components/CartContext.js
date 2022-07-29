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

    return(
        <CartContext.Provider value={{cartList, addToCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;