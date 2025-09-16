import { useRef } from "react";
import { Button, Input, Text, HStack, VStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setLocationCoordinates } from "../features/locationSlice";

export const LocationSearch = () => {
    const dispatch = useDispatch();
    const locationName = useSelector(
        (state) => state.location.name
    );
    const locationCoordinates = useSelector(
        (state) => state.location.coordinates
    );
    const locationInput = useRef(null);

    const fetchCoordinates = async () => {
        const newLocationName = locationInput.current.value;
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${newLocationName}`
        );
        const json = await response.json();

        if (json.results.length === 0) {
            console.error("Not a valid location!");
            return;
        }

        const location = json.results[0];
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
                    defaultValue={locationName}
                    ref={locationInput}
                />

                <Button onClick={fetchCoordinates}>
                    Check
                </Button>
            </HStack>

            { locationCoordinates && (
                <Text fontSize={12}>
                    Longitude: {locationCoordinates.longitude}, 
                    Latitude: {locationCoordinates.latitude}
                </Text>
            )}
        </VStack>
    );
};