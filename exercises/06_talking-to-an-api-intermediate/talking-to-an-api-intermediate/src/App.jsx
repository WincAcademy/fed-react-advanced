import { WeatherIcon } from './components/WeatherIcon';
import {
    Heading,
    Center,
    Stack
} from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "./features/weatherSlice";
import { parseWeather } from './utils/weatherParser';
import { useEffect } from 'react';

export const App = () => {
    const dispatch = useDispatch();
    const weather = useSelector(
        (state) => state.weather.currentWeather
    );

    useEffect(() => {
        const fetchWeather = async () => {
            const latitude = 52.37403;
            const longitude = 4.88969;
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,is_day,apparent_temperature,rain`
            );
            const json = await response.json();

            const weatherObject = parseWeather(json);
            dispatch(setWeather(weatherObject));
        };
        fetchWeather();
    }, []);

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

                { weather && <WeatherIcon weather={weather} /> }
            </Stack>
        </Center>
    )
}