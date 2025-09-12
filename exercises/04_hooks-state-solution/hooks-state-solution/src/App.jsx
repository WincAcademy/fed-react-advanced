import { useState } from 'react';

export const App = () => {
    const [version, setVersion] = useState(0);

    const reset = () => {
        setVersion(version + 1);
    };

    return (
        <>
            <h1>React Hooks Exercise Starter</h1>

            <button onClick={reset}>Reset Person</button>
            <Person key={version} />
        </>
    );
};

const createInitialAgeState = () => {
    const age = new Date().getFullYear() - 1992;
    return age;
};

const Person = () => {
    const [greeting, setGreeting] = useState("Hello");
    const [age, setAge] = useState(createInitialAgeState);

    const updateGreeting = () => {
        setGreeting((g) => g + "!");
        setGreeting((g) => g + "!");
    };

    const updateAge = () => {
        setAge(age + 1);
    };

    return (
        <>
            <p>{greeting}</p>
            <button onClick={updateGreeting}>
                Greet Louder
            </button>

            <p>I am {age} years old</p>
            <button onClick={updateAge}>
                Birthday
            </button>
        </>
    );
};