import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

export function App() {
    const [page, setPage] = useState("home");

    return (
        <>
            <h1>My Simple Website</h1>

            <nav>
                <button onClick={() => setPage("home")}>Home</button>
                <button onClick={() => setPage("about")}>About</button>
            </nav>

            {page === "home" && <HomePage />}
            {page === "about" && <AboutPage />}
        </>
    );
}