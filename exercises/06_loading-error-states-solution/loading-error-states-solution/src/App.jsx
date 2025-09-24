import { useEffect, useState } from 'react';
import flakyFetch from './flakyFetch';
import './App.css'

export function App() {
    const [notes, setNotes] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createNote = async () => {
        setError(null);
        setLoading(true);

        try {
            const result = await flakyFetch(
                'http://localhost:3000/notes',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        text: currentText
                    })
                }
            );
            if (!result.ok)
                throw new Error(result.statusText);
            const json = await result.json();
            const newId = json.id;

            setCurrentText('');
            setNotes([...notes, { id: newId, text: currentText }]);
        } catch (err) {
            setError(`Could not create note: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const deleteNote = async (id) => {
        setError(null);
        setLoading(true);

        try {
            const result = await flakyFetch(
                `http://localhost:3000/notes/${id}`,
                {
                    method: 'DELETE'
                }
            );
            if (!result.ok)
                throw new Error(result.statusText);

            setNotes(notes.filter(note => note.id !== id));
        } catch (err) {
            setError(`Could not delete note: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchNotes = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await flakyFetch('http://localhost:3000/notes');
                if (!response.ok)
                    throw new Error(response.statusText);

                const json = await response.json();
                setNotes(json);
            } catch (err) {
                setError(`Could not get notes: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    }, []);

    return (
        <>
            {loading
                ? <p>Loading..</p>
                : <>
                    {notes.length > 0 
                        ? <div className='notes-container'>
                            {notes.map((note) => (
                                <div key={note.id}>
                                    <p>{note.text}</p>
                                    <button onClick={() => deleteNote(note.id)}>
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                        : <p>No notes available</p>}

                    <textarea
                        placeholder='Type your note here'
                        value={currentText}
                        onChange={(e) => setCurrentText(e.target.value)}
                    ></textarea>

                    <button onClick={createNote}>
                        Save Note
                    </button>
                </>
            }

            {error && <h3 style={{color: 'red'}}>{error}</h3>}
        </>
    );
}