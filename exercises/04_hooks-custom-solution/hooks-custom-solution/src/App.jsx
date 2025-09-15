import {useLocalStorage } from "./useLocalStorage";

export const App = () => {
    const [name, setName] = useLocalStorage("name", "John");
    const [hobby, setHobby] = useLocalStorage("hobby", "Coding");

    return (
        <>
            <h1>Welcome, {name}</h1>
            <p>{name} likes {hobby}</p>

            <label>Name:</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Hobby:</label>
            <input
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
            />
        </>
    );
};