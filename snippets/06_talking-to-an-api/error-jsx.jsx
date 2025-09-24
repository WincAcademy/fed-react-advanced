return error
    // If there is an error, show the error
    ? (
        <h1>{error}</h1>
    )
    // Otherwise, we show our regular UI
    : (
        <>
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
    );