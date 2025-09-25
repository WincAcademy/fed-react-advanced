import {
    Dialog,
    Button,
    Portal,
} from "@chakra-ui/react";

export default function SimpleModal({ open, onClose, children, title }) {
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>
        <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
            <Dialog.Content>
                <Dialog.Header>
                    <Dialog.Title>{title}</Dialog.Title>
                </Dialog.Header>

                <Dialog.Body>{children}</Dialog.Body>

                <Dialog.Footer>
                    <Button onClick={onClose} variant="outline">
                        Close
                    </Button>
                </Dialog.Footer>
            </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
    );
}
