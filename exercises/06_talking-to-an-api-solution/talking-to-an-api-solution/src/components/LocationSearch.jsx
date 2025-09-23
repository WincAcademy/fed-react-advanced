import { useState } from 'react';
import { Input, Text, HStack, VStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
    setLocationName,
    setLocationCoordinates
} from "../features/locationSlice";

export const LocationSearch = () => {
    const dispatch = useDispatch();
    const locationName = useSelector(
        (state) => state.location.name
    );
    const [inputText, setInputText] = useState('');

    const fetchCoordinates = async (event) => {
        setInputText(event.target.value);

        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${inputText}`
        );
        const json = await response.json();
        if (!json.results || json.results.length === 0) {
            setLocationName('');
            setLocationCoordinates(null);
            return;
        }

        const location = json.results[0];
        const newLocationName = `${location.name}, ${location.country}`;
        if (locationName === newLocationName)
            return;

        dispatch(setLocationName(newLocationName));
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
                    value={inputText}
                    onChange={fetchCoordinates}
                />
            </HStack>

            { locationName && (
                <Text fontSize={12}>
                    {locationName}
                </Text>
            )}
        </VStack>
    );
};