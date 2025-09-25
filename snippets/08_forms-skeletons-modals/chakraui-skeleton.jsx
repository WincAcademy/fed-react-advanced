import { Skeleton, SkeletonText, Box } from "@chakra-ui/react";

export default function CustomComponent({ loading, data }) {
    return (
        <Box w="250px" p={4} borderWidth="1px" borderRadius="md">
            <Skeleton isLoaded={!loading}>
                <img src={data?.coverImage} alt="cover" />
            </Skeleton>

            <SkeletonText
                mt={4}
                noOfLines={2}
                spacing="2"
                isLoaded={!loading}
            >
                {data?.title}
            </SkeletonText>
        </Box>
    );
}