import { useState } from 'react';

const createInitialAgeState = () => {
    const age = new Date().getFullYear() - 1992;
    return age;
};

export const App = () => {
    const [greeting, setGreeting] = useState("Hello");
    const [age, setAge] = useState(() => createInitialAgeState());

    const updateGreeting = () => {
        setGreeting((g) => g + "!");
        setGreeting((g) => g + "!");
    };

    const updateAge = () => {
        setAge(age + 1);
    };

    const resetAge = () => {
        setAge(() => createInitialAgeState());
    };

    return (
        <>
            <h1>React Hooks Exercise Starter</h1>
            
            <p>{greeting}</p>
            <button onClick={updateGreeting}>
                Greet Louder
            </button>

            <p>I am {age} years old</p>
            <button onClick={updateAge}>
                Birthday
            </button>
            <button onClick={resetAge}>
                Reset Age
            </button>
        </>
    );
};