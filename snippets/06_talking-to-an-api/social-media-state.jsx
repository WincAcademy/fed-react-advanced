const [users, setUsers] = useState([]);

useEffect(() => {
    async function fetchData() {
        const response = await fetch(
            'https://dummyjson.com/users'
        );

        const json = await response.json();
        setUsers(json.users);
    };
    fetchData();
});