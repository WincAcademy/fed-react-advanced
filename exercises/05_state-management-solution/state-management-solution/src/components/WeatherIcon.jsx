import { Image, Heading, Stack } from '@chakra-ui/react';

export const WeatherIcon = ({ weather }) => {
    return (
        <Stack align="center" spacing={4}>
            <Image
                src={weather.imageSrc}
                alt={weather.imageAlt}
                w={200}
                h={200}
            />
            <Heading
                size="md"
                mb={4}
            >
                {weather.weatherType}
            </Heading>
        </Stack>
    );
};