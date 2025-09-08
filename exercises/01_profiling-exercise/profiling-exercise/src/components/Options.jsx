import { useState } from 'react';
import { Button } from "./Button"

export function Options() {
    const [ selectedOption, setSelectedOption ] = useState();

    return (
        <>
            <Button text="A" onClick={() => setSelectedOption("A")} />
            <Button text="B" onClick={() => setSelectedOption("B")} />
            <Button text="C" onClick={() => setSelectedOption("C")} />

            { selectedOption && <p>Selected: {selectedOption}</p> }
        </>
    )
}