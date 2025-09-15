import { WeatherIcon } from './components/WeatherIcon'
import {
    sunnyWeather,
    cloudyWeather,
    rainyWeather
} from './utils/data'
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "./weatherSlice";
import {
    Heading,
    Center,
    Stack,
    Field,
    NativeSelect
} from '@chakra-ui/react'

export const App = () => {
    const dispatch = useDispatch();
    const weather = useSelector(
        (state) => state.weather.currentWeather
    );

    const weatherObjects = [sunnyWeather, cloudyWeather, rainyWeather];

    const changeWeather = (event) => {
        const weatherIndex = event.target.value;
        dispatch(setWeather(weatherObjects[weatherIndex]));
    };

    return (
        <Center height="100vh">
            <Stack>
                <Heading
                    size="2xl"
                    color="blue.400"
                    textAlign="center"
                    fontStyle="italic"
                >
                    Winc Weather App
                </Heading>
                { weather && <WeatherIcon weather={weather} /> }

                <form>
                <Field.Root>
                    <Field.Label>
                        Weather Type
                    </Field.Label>

                    <NativeSelect.Root>
                        <NativeSelect.Field
                            value={weatherObjects.indexOf(weather)}
                            onChange={changeWeather}
                        >
                            <option disabled>
                                Select a weather type
                            </option>
                            
                            {weatherObjects.map((weatherObject, index) => (
                                <option
                                    key={index}
                                    value={index}
                                >
                                    {weatherObject.weatherType}
                                </option>
                            ))}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator/>
                    </NativeSelect.Root>
                </Field.Root>
                </form>
            </Stack>
        </Center>
    )
}