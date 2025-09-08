import { Book } from './Book';

export function Category({ categoryName, books }) {
    return (
        <>
            <h3>Category: {categoryName}</h3>
            {books.map((book) => (
                <Book
                    key={book.id}
                    title={book.title}
                    author={book.author}
                />
            ))}
        </>
    )
}