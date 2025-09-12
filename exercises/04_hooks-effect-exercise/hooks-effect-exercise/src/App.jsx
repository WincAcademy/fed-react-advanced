import { useEffect, useState } from 'react';
import { fetchPeople, fetchPerson } from './fetchers';

export const App = () => {
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState(null);
    const [id, setId] = useState(null);

    // TODO: Fetch people and persons using useEffect here!
    // ...

    return (
        <>
            <h1>Effective People</h1>

            {people.map((person) => (
                <button
                    key={person.id}
                    onClick={() => setId(person.id)}
                >
                    {person.name}
                </button>
            ))}

            {person && (
                <>
                    <h2>{person.name}</h2>
                    <p>Age: {person.age}</p>
                    <p>Hobbies: {person.hobbies.join(", ")}</p>
                </>
            )}
        </>
    );
};