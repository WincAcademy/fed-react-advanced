import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client'
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage />
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)