import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NewPost, action as createPost } from "./NewPost";
import { Post, loader as postLoader, action as addComment } from "./Post";
import { PostList, loader as postListLoader } from "./PostList";
import { Root } from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <PostList />,
                loader: postListLoader,
            },
            {
                path: "/post/:postId",
                element: <Post />,
                loader: postLoader,
                action: addComment,
            },
            {
            path: "/post/new",
                element: <NewPost />,
                action: createPost
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
