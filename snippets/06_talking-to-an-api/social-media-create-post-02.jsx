const createPost = async (title, userId) => {
    const result = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            userId
        })
    });

    if (result.ok) {
        // The creation of the post was successful!
        fetchPosts();
    }
};