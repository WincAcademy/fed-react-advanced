import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NewPost } from "./NewPost";
import { Post, loader as postLoader } from "./Post";
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
            },
            {
                path: "/post/new",
                element: <NewPost />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
