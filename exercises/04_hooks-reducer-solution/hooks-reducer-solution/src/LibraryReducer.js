export const LibraryReducer = (state, action) => {
    switch (action.type) {
        case "borrow-book":
            return [...state, action.title];
        case "return-book":
            return [...state].filter((t) => t !== action.title);
        default:
            return state;
    }
};