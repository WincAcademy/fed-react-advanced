import { useRef } from 'react';

export const App = () => {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <>
            <div
                ref={topRef}
                className="fullscreen-height"
            >
                <h1>First header</h1>

                <button onClick={() => scrollToRef(bottomRef)}>
                    Scroll down
                </button>
            </div>
            <div
                ref={bottomRef}
                className="fullscreen-height lightblue-background"
            >
                <h1>Second header</h1>

                <button onClick={() => scrollToRef(topRef)}>
                    Scroll up
                </button>
            </div>
        </>
    );
};