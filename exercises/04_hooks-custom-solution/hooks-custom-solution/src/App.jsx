import {useLocalStorage } from "./useLocalStorage";

export const App = () => {
    const [name, setName] = useLocalStorage("name", "John");

    return (
        <>
            <h1>Welcome, {name}</h1>

            <label>Name:</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
};