import { useEffect, useState } from 'react';
import { fetchPeople, fetchPerson } from './fetchers';

export const App = () => {
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState(null);
    const [id, setId] = useState(null);

    // Empty dependency list, runs only once.
    useEffect(() => {
        console.log("Fetching people");

        const fetch = async () => {
            setPeople(await fetchPeople());
        };

        fetch();
    }, []);

    // Dependency list with one item, runs whenever
    // that value changes.
    useEffect(() => {
        console.log("Fetching person");

        const fetch = async () => {
            setPerson(await fetchPerson(id));
        };
        fetch();

        return () => {
            console.log("Cleaning up the person effect");
            setPerson(null);
        };
    }, [id]);

    // No dependency list, runs each time
    // the component is rendered.
    useEffect(() => {
        console.log("Rendering...");
    });

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