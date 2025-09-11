import { CartProvider } from "./CartContext";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

export function App() {
    return (
        <>
            <h1>Simple Shopping App</h1>

            <CartProvider>
                <ProductList />
                <CartSummary />
            </CartProvider>
        </>
    );
}