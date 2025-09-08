export function Category({ categoryName, children }) {
    return (
        <>
            <h3>Category: {categoryName}</h3>
            {children}
        </>
    )
}