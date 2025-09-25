import { useForm } from "react-hook-form";
import {
    Button,
    Input,
    Textarea,
    VStack,
    Field,
    Dialog,
} from "@chakra-ui/react";

export default function ReviewForm({ movie, cancel, finish }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        await fetch("http://localhost:3000/ratings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                movieId: movie.id,
                rating: Number(data.rating),
                comment: data.comment,
            }),
        });
        finish();
    };

    return (
        <Dialog.Root open={!!movie} onOpenChange={cancel}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
        <Dialog.Content>
            <Dialog.Header>Review: {movie?.name}</Dialog.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Body>
                <Field.Root invalid={!!errors.rating} mt={2}>
                <Field.Label>Rating (1-5)</Field.Label>
                <Input
                    type="number"
                    min={1}
                    max={5}
                    step={1}
                    {...register("rating", {
                        required: "Please enter a rating",
                        min: { value: 1, message: "Minimum rating is 1" },
                        max: { value: 5, message: "Maximum rating is 5" },
                    })}
                />
                <Field.ErrorText>{errors.rating?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.comment} mt={4}>
                <Field.Label>Comment</Field.Label>
                <Textarea
                    placeholder="Write your review..."
                    {...register("comment", { required: "Comment is required" })}
                />
                <Field.ErrorText>{errors.comment?.message}</Field.ErrorText>
                </Field.Root>
            </Dialog.Body>

            <Dialog.Footer>
                <VStack w="full" spacing={3}>
                <Button onClick={cancel} variant="outline" width="full" type="button">
                    Back
                </Button>
                <Button
                    type="submit"
                    colorScheme="blue"
                    isLoading={isSubmitting}
                    width="full"
                >
                    Submit Review
                </Button>
                </VStack>
            </Dialog.Footer>
            </form>
        </Dialog.Content>
        </Dialog.Positioner>
        </Dialog.Root>
    );
}