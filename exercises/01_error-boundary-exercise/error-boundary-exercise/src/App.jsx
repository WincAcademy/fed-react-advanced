import { ComponentThatErrors } from "./components/ComponentThatErrors";

export function App() {
    return (
        <>
            <h1>Error Boundary Exercise</h1>
            <ComponentThatErrors />
        </>
    );
}