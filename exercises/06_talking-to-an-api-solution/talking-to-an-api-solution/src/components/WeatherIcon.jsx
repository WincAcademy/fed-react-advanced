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

            <Heading size="md">
                {weather.weatherType}
            </Heading>
            <Heading size="sm" mb={4}>
                {weather.temperature}, {weather.rainfall}
            </Heading>
        </Stack>
    );
};