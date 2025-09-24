import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
    const post = await fetch(
        `http://localhost:3000/posts/${params.postId}`
    );
    const comments = await fetch(
        `http://localhost:3000/comments?postId=${params.postId}`
    );

    return {
        post: await post.json(),
        comments: await comments.json(),
    };
};

export const Post = () => {
    const { post, comments } = useLoaderData();

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <hr />

            {comments.length > 0 && (
                <div>
                    <h2>Comments:</h2>
                    {comments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.comment}</p>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};