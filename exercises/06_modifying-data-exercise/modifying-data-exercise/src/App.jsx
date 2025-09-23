import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'

export function App() {
    const [notes, setNotes] = useState([]);
    const [currentText, setCurrentText] = useState('');

    const createNote = async () => {
        // TODO: Make POST request to json-server
    };

    const deleteNote = async (id) => {
        // TODO: Make DELETE request to json-server
    };

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('http://localhost:3000/notes');
            const json = await response.json();
            setNotes(json);
        };
        fetchNotes();
    }, []);

    return (
        <>
            <div className='notes-container'>
                {notes.map((note) => (
                    <div key={note.id}>
                        <p>{note.text}</p>
                        <button onClick={() => deleteNote(note.id)}>
                            X
                        </button>
                    </div>
                ))}
            </div>

            <textarea
                placeholder='Type your note here'
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
            ></textarea>

            <button onClick={createNote}>
                Save Note
            </button>
        </>
    );
}