export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will
        // show the fallback UI
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // You could also log the error to an error
        // reporting service here
        // logErrorToMyService(error, errorInfo);

        // But for now, let's print it to the console
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong!</h1>
        }

        // If there is no error, we just render our
        // children as normal!
        return this.props.children;
    }
}