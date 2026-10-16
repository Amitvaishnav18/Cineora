
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GEOAPIFY_KEY;

function useCity() {
  const [cityData, setCityData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCity = async () => {
      try {
        if (!navigator.geolocation) {
          throw new Error('Geolocation is not supported');
        }

        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            resolve,
            reject
          );
        });

        const { latitude, longitude } = location.coords;

        const response = await axios.get(
          'https://api.geoapify.com/v1/geocode/reverse',
          {
            params: {
              lat: latitude,
              lon: longitude,
              limit: 1,
              lang: 'en',
              format: 'geojson',
              apiKey: API_KEY,
            },
          }
        );

        const properties =
          response.data.features?.[0]?.properties;

        if (!properties) {
          throw new Error('Location details not found');
        }

        setCityData(properties);
      } catch (err) {
        console.error('Location error:', err);
        setError('Unable to get location');
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, []);

  const selectCity = (city) => {
  setCityData({
    city: city.cityName || city.city_name || "",
    state: city.stateName || city.state_name || "",
  });
  setError("");
};

  return { cityData, loading, error, selectCity };
}

export default useCity;
