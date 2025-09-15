import { Provider } from 'react-redux';
import { store } from './store';
import { Counter } from "./components/Counter";

export function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}