import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function CartSummary() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <>
            <h2>Cart Summary</h2>

            {cart.length === 0
                ? <p>Your cart is empty.</p>
                : <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => removeFromCart(item)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}
