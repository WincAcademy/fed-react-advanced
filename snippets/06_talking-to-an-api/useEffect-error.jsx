const [error, setError] = useState(null);

const fetchNotes = async () => {
    setLoading(true);
    setError(null);
    
    // Wrap the request in a try-catch to catch any
    // internal errors when making the request
    try {
        const response = await flakyFetch('http://localhost:3000/notes');

        // Check if the request was succesful, we
        // create and throw an error if this is not
        // the case - this triggers the catch statement
        if (!response.ok)
            throw new Error(response.statusText);

        const json = await response.json();
        setNotes(json);
    } catch (err) {
        // Set error if any error was catched
        setError(`Could not get notes: ${err.message}`);
    } finally {
        // Finally always reset the loading state
        setLoading(false);
    }
};