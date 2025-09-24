const [error, setError] = useState(null);

const createNote = async () => {
    const result = await fetch(
        'http://localhost:3000/notes',
        {
            method: 'POST',
            body: JSON.stringify({
                text: currentText
            })
        }
    );
    if (!result.ok) {
        // If the result was NOT succesful, set error
        setError(`Could not create note: ${result.statusText}`);
        return;
    }
    const json = await result.json();
    const newId = json.id;
    
    setCurrentText('');
    setNotes([...notes, { id: newId, text: currentText }]);
};