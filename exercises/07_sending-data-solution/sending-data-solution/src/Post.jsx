import { Form, redirect, useLoaderData, Link } from "react-router-dom";

export const loader = async ({ params }) => {
    const post = await fetch(
        `http://localhost:3000/posts/${params.postId}`);
    const comments = await fetch(
        `http://localhost:3000/comments?postId=${params.postId}`
    );

    return {
        post: await post.json(),
        comments: await comments.json(),
    };
};

export const action = async ({ request, params }) => {
    const formData = Object.fromEntries(await request.formData());
    const body = JSON.stringify({ ...formData, postId: params.postId });
    await fetch("http://localhost:3000/comments", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
    });

    return redirect(`/post/${params.postId}`);
};

export const Post = () => {
    const { post, comments } = useLoaderData();

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <hr />

            {comments.length > 0 && (
                <>
                    <h2>Comments:</h2>
                    {comments.map((comment) => {
                        return (
                            <div key={comment.id}>
                            <p>{comment.comment}</p>
                            <hr />
                            </div>
                        );
                    })}
                </>
            )}
            
            <br />
            <h3>Write a comment:</h3>
            <Form method="post">
                <label>
                    <span>Comment</span>
                    <br/>
                    <textarea name="comment" rows="2" />
                </label>
                <br/>
                <button type="submit">Save</button>
            </Form>
        </>
    );
};