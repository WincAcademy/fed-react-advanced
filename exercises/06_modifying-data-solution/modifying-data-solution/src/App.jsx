import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'

export function App() {
    const [notes, setNotes] = useState([]);
    const [currentText, setCurrentText] = useState('');

    const createNote = async () => {
        const result = await fetch(
            'http://localhost:3000/notes',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: currentText
                })
            }
        );
        if (!result.ok) {
            console.error('Could not post note!');
            return;
        }
        const json = await result.json();
        const newId = json.id;
        
        setCurrentText('');
        setNotes([...notes, { id: newId, text: currentText }]);
    };

    const deleteNote = async (id) => {
        const result = await fetch(
            `http://localhost:3000/notes/${id}`,
            {
                method: 'DELETE'
            }
        );
        if (!result.ok) {
            console.error('Could not delete note!');
            return;
        }

        setNotes(notes.filter(note => note.id !== id));
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