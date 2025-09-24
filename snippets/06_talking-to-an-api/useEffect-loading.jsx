// We define a loading state, by default false
const [loading, setLoading] = useState(false);

useEffect(() => {
    // Before we make any asynchronous request,
    // we set loading to true
    setLoading(true);

    // Continue as normal
    const fetchNotes = async () => {
        const response = await fetch('http://localhost:3000/notes');
        const json = await response.json();
        setNotes(json);

        // After the asynchronous wait, reset
        // loading back to false
        setLoading(false);
    };
    fetchNotes();
}, []);