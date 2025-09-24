const router = createBrowserRouter([
    // .. Other routes
    {
        path: "/post/:postId",
        element: <Post />,
        loader: async function loader({ params }) {
            return fetchPost(params.postId);
        }
    }
]);