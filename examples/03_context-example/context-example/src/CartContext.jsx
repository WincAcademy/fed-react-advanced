import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart([...cart, item]);
    }

    function removeFromCart(item) {
        const cartCopy = [...cart];
        const index = cartCopy.indexOf(item);
        if (index > -1) {
            cartCopy.splice(index, 1);
        }
        setCart(cartCopy);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}