import {
    Box,
    Image,
    Text,
    Stack,
    HStack,
    VStack,
    Icon,
    Button
} from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { FaStar } from "react-icons/fa";

export default function Movie({ movie, rating, amount, reviewFn }) {
    const releaseTextColor = useColorModeValue("gray.600", "gray.400");
    const castRatingTextColor = useColorModeValue("gray.700", "gray.300");
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            shadow="md"
            mx="auto"
            maxW="250px"
        >
            <Image
                src={movie.coverImage}
                alt={movie.name}
                borderRadius="md"
                mb={3}
                objectFit="cover"
            />
            <Stack>
                <Stack minH="180px" spacing={1}>
                    <Text fontSize="lg" fontWeight="bold">
                        {movie.name}
                    </Text>
                    <Text fontSize="sm" color={releaseTextColor}>
                        {movie.releaseDate} • {movie.duration} min
                    </Text>
                    <Text fontSize="sm" color={castRatingTextColor}>
                        Cast: {movie.authors.join(", ")}
                    </Text>
                </Stack>
                <hr />

                <VStack spacing={1}>
                    <HStack spacing={1}>
                        {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                            as={FaStar}
                            key={i}
                            color={i < Math.round(rating) ? "yellow.400" : "gray.300"}
                        />
                        ))}
                    </HStack>
                    <Text fontSize="sm" color={castRatingTextColor}>
                        {rating.toFixed(1)} / 5.0 ({amount} ratings)
                    </Text>

                    <Button onClick={() => { reviewFn(movie) }}>
                        Add Review
                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
}