export const parseWeather = (weather) => {
    // API Documentation: https://open-meteo.com/en/docs

    // --- Handle weather code ---
    let weatherImgSrc = '';
    let weatherType = '';
    switch (weather.current.weather_code) {
        case 0: // Clear
        case 1: // Mainly clear
            weatherType = 'Sunny';
            weatherImgSrc = '/weather-icons/sunny.png';
        break;
        case 2: // Partly cloudy
            weatherType = 'Cloudy';
            weatherImgSrc = '/weather-icons/cloudy.png';
        break;
        case 3: // Overcast
            weatherType = 'Overcast';
            weatherImgSrc = '/weather-icons/overcast.png';
        break;
        case 51: // Drizzle: light
        case 53: // Drizzle: moderate
        case 55: // Drizzle: dense
            weatherType = 'Drizzle';
            weatherImgSrc = '/weather-icons/drizzle.png';
        break;
        case 56: // Freezing Drizzle: light
        case 57: // Freezing Drizzle: dense
        case 66: // Freezing Rain: light
        case 67: // Freezing Rain: heavy
            weatherType = 'Hail';
            weatherImgSrc = '/weather-icons/hail.png';
        break;
        case 61: // Rain: slight
        case 63: // Rain: moderate
        case 65: // Rain: heavy
        case 80: // Rain showers: slight
        case 81: // Rain showers: moderate
        case 82: // Rain showers: violent
            weatherType = 'Rainy';
            weatherImgSrc = '/weather-icons/rain.png';
        break;
        case 71: // Snow: slight
        case 73: // Snow: moderate
        case 75: // Snow: heavy
        case 77: // Snow grains
        case 85: // Snow showers: slight
        case 86: // Snow showers: heavy
            weatherType = 'Snowing';
            weatherImgSrc = '/weather-icons/snow.png';
        break;
        case 95: // Thunderstorm: slight/moderate
        case 96: // Thunderstorm: slight hail
        case 99: // Thunderstorm: heavy hail
            weatherType = 'Thunderstorm';
            weatherImgSrc = '/weather-icons/thunderstorm.png';
        break;
        default:
            console.warn(
                "Unknown weather code (WMO), assuming sunny weather because who doesn't love the sun!"
            );
            weatherType = 'Sunny';
            weatherImgSrc = '/weather-icons/sunny.png';
        break;
    }
    const weatherImgAlt = `${weatherType} image icon`;

    // --- Handle temperature ---
    const temperature = `${weather.current.apparent_temperature} ${weather.current_units.apparent_temperature}`;

    // --- Handle rainfall ---
    const rainfall = weather.current.rain + weather.current_units.rain;

    return {
        imageSrc: weatherImgSrc,
        imageAlt: weatherImgAlt,
        weatherType: weatherType,
        temperature: temperature,
        rainfall: rainfall
    };
};