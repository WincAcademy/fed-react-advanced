import { useLoaderData, Link } from "react-router-dom";

export const loader = async () => {
    const posts = await fetch("http://localhost:3000/posts");

    return { posts: await posts.json() };
};

export const PostList = () => {
    const { posts } = useLoaderData();

    return (
        <>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>
                        {post.body.slice(0, 24)}
                        {post.body.length > 24 ? "..." : ""}
                    </p>
                </div>
            ))}
        </>
    );
};