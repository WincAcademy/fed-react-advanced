import { books } from './utils/books';
import { Shelf } from './components/Shelf';
import { Category } from './components/Category';
import { Book } from './components/Book';

export function App() {
    return (
        <>
            <h1>Library</h1>
            <Shelf>
                <Category categoryName="Programming">
                    {books.map((book) => (
                        <Book
                            key={book.id}
                            title={book.title}
                            author={book.author}
                        />
                    ))}
                </Category>
            </Shelf>
        </>
    );
};