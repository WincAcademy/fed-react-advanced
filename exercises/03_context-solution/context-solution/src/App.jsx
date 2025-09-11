import { books } from './utils/books';
import { Shelf } from './components/Shelf';

export function App() {
    return (
        <>
            <h1>Library</h1>
            <Shelf
                categoryName={"Programming"}
                books={books}
            />
        </>
    );
};