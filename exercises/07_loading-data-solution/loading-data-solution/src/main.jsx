import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
