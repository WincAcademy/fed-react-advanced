const [name, setName] = useState(() => 
    window.localStorage.getItem("name") || "John"
);