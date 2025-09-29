const [posts, setPosts] = useState([]);

useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
        
        const json = await response.json();
        setPosts(json.posts);
    };
    fetchData();
}, [userId]);