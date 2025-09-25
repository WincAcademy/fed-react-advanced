import { Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import SimpleModal from "./components/SimpleModal";

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button m={4} onClick={() => setModalOpen(true)}>
                Open Modal
            </Button>

            <SimpleModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Simple Modal"
            >
                <Heading>Hello World!</Heading>
            </SimpleModal>
        </>
    )
};