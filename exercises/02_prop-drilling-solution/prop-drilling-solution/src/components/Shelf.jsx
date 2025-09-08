import { Category } from "./Category";

export function Shelf({ categoryName, books }) {
    return (
        <>
            <h2>Shelf</h2>
            <Category
                categoryName={categoryName}
                books={books}
            />
        </>
    )
};