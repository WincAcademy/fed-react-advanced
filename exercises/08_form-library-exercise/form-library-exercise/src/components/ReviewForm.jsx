import { Button } from "@chakra-ui/react";

export default function ReviewForm({ movie, cancel, finish }) {
    // TODO: Implement review form using React Hook Form
    return (
        <>
            <h1>Review: {movie.name}</h1>
            <Button onClick={cancel}>Back</Button>
        </>
    )
};