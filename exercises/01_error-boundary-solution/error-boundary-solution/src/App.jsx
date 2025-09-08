import { ComponentThatErrors } from "./components/ComponentThatErrors";
import { ErrorBoundary } from "./components/ErrorBoundary";

export function App() {
    return (
        <>
            <h1>Error Boundary Exercise</h1>
            <ErrorBoundary>
                <ComponentThatErrors />
            </ErrorBoundary>
            <ErrorBoundary>
                <ComponentThatErrors />
            </ErrorBoundary>
            <ErrorBoundary>
                <ComponentThatErrors />
            </ErrorBoundary>
        </>
    );
}