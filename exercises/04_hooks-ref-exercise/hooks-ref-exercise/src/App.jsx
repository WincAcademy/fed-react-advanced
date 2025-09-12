import { useRef } from 'react';

export const App = () => {
    return (
        <>
            <div className="fullscreen-height">
                <h1>First header</h1>

                <button>Scroll down</button>
            </div>
            <div className="fullscreen-height lightblue-background">
                <h1>Second header</h1>

                <button>Scroll up</button>
            </div>
        </>
    );
};