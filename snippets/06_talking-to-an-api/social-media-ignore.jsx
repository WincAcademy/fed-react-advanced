const [posts, setPosts] = useState([]);

useEffect(() => {
    let ignore = false;

    async function fetchData() {
        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
        
        const json = await response.json();
        if (!ignore)
            setPosts(json.posts);
    };
    fetchData();

    return () => {
        ignore = true;
    };
}, [userId]);