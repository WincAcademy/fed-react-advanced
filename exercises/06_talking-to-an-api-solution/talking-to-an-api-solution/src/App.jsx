import { WeatherIcon } from './components/WeatherIcon';
import {
    Heading,
    Center,
    Stack
} from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "./features/weatherSlice";
import { LocationSearch } from './components/LocationSearch';
import { parseWeather } from './utils/weatherParser';
import { useEffect } from 'react';

export const App = () => {
    const dispatch = useDispatch();
    const weather = useSelector(
        (state) => state.weather.currentWeather
    );
    const locationCoordinates = useSelector(
        (state) => state.location.coordinates
    );

    useEffect(() => {
        if (!locationCoordinates)
            return;

        const fetchWeather = async () => {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${locationCoordinates.latitude}&longitude=${locationCoordinates.longitude}&current=weather_code,is_day,apparent_temperature,rain`
            );
            const json = await response.json();

            const weatherObject = parseWeather(json);
            dispatch(setWeather(weatherObject));
        };
        fetchWeather();
    }, [locationCoordinates]);

    return (
        <Center height="100vh">
            <Stack>
                <Heading
                    size="2xl"
                    textAlign="center"
                    mb="6"
                >
                    Winc Weather App
                </Heading>

                <LocationSearch />

                { weather && <WeatherIcon weather={weather} /> }
            </Stack>
        </Center>
    )
}