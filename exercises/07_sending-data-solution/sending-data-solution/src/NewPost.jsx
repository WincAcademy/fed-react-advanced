import { Form, redirect } from "react-router-dom";

export const action = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const newId = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
    })
        .then((res) => res.json())
        .then((json) => json.id);

    return redirect(`/post/${newId}`);
};

export const loader = async () => {
    return await fetch("http://localhost:3000/users");
};

export const NewPost = () => {
    return (
        <>
            <h1>New Post</h1>
            <Form method="post">
                <label>
                    <span>Title</span>
                    <br/>
                    <input
                        placeholder="An exciting title"
                        type="text"
                        name="title"
                    />
                </label>
                <br/>
                <label>
                    <span>Body</span>
                    <br/>
                    <textarea name="body" rows="6" />
                </label>
                <br/>
                <button type="submit">Save</button>
            </Form>
        </>
    );
};