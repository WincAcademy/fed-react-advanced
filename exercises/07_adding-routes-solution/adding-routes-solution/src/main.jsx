import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Post } from "./Post";
import { PostList } from "./PostList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PostList />,
    },
    {
        path: "/post/:postId",
        element: <Post />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
