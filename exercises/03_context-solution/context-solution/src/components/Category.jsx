import { useContext } from 'react';
import { LibraryContext } from '../LibraryContext';
import { Book } from './Book';

export function Category({ categoryName, books }) {
    const { borrowedBooks, borrowBook, returnBook } = useContext(LibraryContext);

    const isBorrowed = (title) => {
        return borrowedBooks.includes(title);
    };

    return (
        <>
            <h3>Category: {categoryName}</h3>
            <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <Book
                        title={book.title}
                        author={book.author}
                    />

                    <button 
                        disabled={isBorrowed(book.title)}
                        onClick={() => borrowBook(book.title)}
                    >
                        Borrow
                    </button>
                    <button
                        disabled={!isBorrowed(book.title)}
                        onClick={() => returnBook(book.title)}
                    >
                        Return
                    </button>
                </li>
            ))}
            </ul>
        </>
    )
}