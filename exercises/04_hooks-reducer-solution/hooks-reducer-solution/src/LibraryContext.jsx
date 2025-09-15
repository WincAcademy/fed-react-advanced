import { createContext, useReducer } from "react";
import { LibraryReducer } from "./LibraryReducer";

export const LibraryContext = createContext({});

export function LibraryProvider({ children }) {
    const [borrowedBooks, dispatch] = useReducer(LibraryReducer, []);

    const borrowBook = (title) => {
        dispatch({
            type: 'borrow-book',
            title
        });
    };

    const returnBook = (title) => {
        dispatch({
            type: 'return-book',
            title
        });
    };

    return (
        <LibraryContext.Provider value={{borrowedBooks, borrowBook, returnBook}}>
            {children}
        </LibraryContext.Provider>
    );
};