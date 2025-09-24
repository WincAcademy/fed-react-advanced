export const Post = () => {
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