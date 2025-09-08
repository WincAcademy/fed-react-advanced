export const ComponentThatErrors = () => {
    if (Math.random() <= 0.5) {
        throw new Error("Something went wrong!");
    }
    return <div>No error now.</div>;
};