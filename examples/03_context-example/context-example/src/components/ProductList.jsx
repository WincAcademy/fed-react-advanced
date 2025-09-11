import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function ProductList() {
    const { addToCart } = useContext(CartContext);
    const products = ["Apple", "Banana", "Orange"];

    return (
        <div>
            <h2>Products</h2>
            
            {products.map((p) => (
                <li key={p}>
                    {p}
                    <button
                        key={p}
                        onClick={() => addToCart(p)}
                    >
                        Add to cart
                    </button>
                </li>
            ))}
        </div>
    );
}