import { useState, createContext } from "react";

export const LibraryContext = createContext({});

export function LibraryProvider({ children }) {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    const borrowBook = (title) => {
        setBorrowedBooks(
            [...borrowedBooks, title]
        );
    };

    const returnBook = (title) => {
        setBorrowedBooks(
            [...borrowedBooks].filter((t) => t !== title)
        );
    };

    return (
        <LibraryContext.Provider value={{borrowedBooks, borrowBook, returnBook}}>
            {children}
        </LibraryContext.Provider>
    );
};