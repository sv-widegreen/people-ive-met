const OPENSTREET_MAP_API_URL = 'https://nominatim.openstreetmap.org/reverse';
const axios = require('axios');

export default function getCurrentLocation({ setLoading, setCity }) {
  setLoading(true);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCity);
  }
  async function getCity(currentPosition) {
    const latitude = currentPosition.coords.latitude;
    const longitude = currentPosition.coords.longitude;
    const { data } = await axios.get(
      `${OPENSTREET_MAP_API_URL}?lat=${latitude}&lon=${longitude}&zoom=10&format=json`
    );
    const city = data.address.city || '';
    setCity(city);
    setLoading(false);
  }
}
