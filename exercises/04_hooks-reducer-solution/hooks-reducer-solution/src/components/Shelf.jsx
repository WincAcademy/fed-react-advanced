import { LibraryProvider } from "../LibraryContext";
import { Category } from "./Category";

export function Shelf({ categoryName, books }) {
    return (
        <>
            <h2>Shelf</h2>

            <LibraryProvider>
                <Category
                    categoryName={categoryName}
                    books={books}
                />
            </LibraryProvider>
        </>
    )
};