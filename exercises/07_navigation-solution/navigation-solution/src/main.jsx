import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { PostList } from "./PostList";
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
            },
            {
                path: "/post/:postId",
                element: <Post />,
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
