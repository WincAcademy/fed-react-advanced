import { useState } from "react";
import { Button, Input, HStack, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setLocationCoordinates, setLocationName } from "../features/locationSlice";

export const LocationSearch = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const fetchCoordinates = async () => {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(inputValue)}`
        );
        const json = await response.json();

        if (!json.results || json.results.length === 0) {
            console.error("Not a valid location!");
            return;
        }

        const location = json.results[0];
        dispatch(setLocationName(
            `${location.name}, ${location.country}`
        ));
        dispatch(setLocationCoordinates({
            longitude: location.longitude,
            latitude: location.latitude
        }));
    };

    return (
        <VStack>
            <HStack>
                <Input
                    placeholder="City name (e.g. Amsterdam)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <Button onClick={
                    () => fetchCoordinates(inputValue)
                }>Check</Button>
            </HStack>
        </VStack>
    );
};