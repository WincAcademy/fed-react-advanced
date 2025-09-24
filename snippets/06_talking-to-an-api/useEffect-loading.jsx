useEffect(() => {
    const fetchNotes = async () => {
        const response = await fetch('http://localhost:3000/notes');
        const json = await response.json();
        setNotes(json);
    };
    fetchNotes();
}, []);