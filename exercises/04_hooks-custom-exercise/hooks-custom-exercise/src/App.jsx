import { useState } from  "react";

export const App = () => {
    const [name, setName] = useState("John");

    return (
        <>
            <h1>Welcome, {name}</h1>

            <label>Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
};