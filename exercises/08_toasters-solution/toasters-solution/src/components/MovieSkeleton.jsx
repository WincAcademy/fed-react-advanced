import {
  Box,
  Skeleton,
  SkeletonText,
  Stack,
  VStack
} from "@chakra-ui/react";

export default function MovieSkeleton() {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            shadow="md"
            mx="auto"
            w="250px"
        >
            <Skeleton height="320px" borderRadius="md" mb={3} />

            <Stack>
                <Stack minH="180px">
                    <SkeletonText noOfLines={3} />
                </Stack>
                <hr />

                <VStack spacing={2}>
                    <SkeletonText noOfLines={2} />
                    <Skeleton
                        height="40px"
                        width="100px"
                        borderRadius="sm"
                    />
                </VStack>
            </Stack>
        </Box>
    );
}
