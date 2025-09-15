const [name, setName] = useState(() => 
    window.localStorage.getItem("name") || "John"
);

useEffect(() => {
    window.localStorage.setItem("name", name);
}, [name]);