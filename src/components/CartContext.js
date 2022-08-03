import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) =>{
        if (isInCart(item.id)) {
            setCartList(cartList.map(product=>{
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        }else{
            setCartList([...cartList, { ...item, quantity }]);
        }
    }

    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.precio, 0)
         
    }
    const totalProducts = () => cartList.reduce((acumulador,productoActual) => acumulador + productoActual.quantity, 0);

    const isInCart = (id) => cartList.find(product => product.id === id) ? true : false;

    const removeItem = (id) => {
    let nuevoEstado = cartList.filter(item => item.id !== id)
    setCartList(nuevoEstado)
    }

    const clear = () =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, totalPrice, totalProducts}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;