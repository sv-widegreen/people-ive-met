const OPENSTREET_MAP_API_URL = 'https://nominatim.openstreetmap.org/reverse';
const axios = require('axios');

export default function getCurrentLocation({ setLoading, setLocation }) {
  setLoading(true);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  async function getPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const { data } = await axios.get(
      `${OPENSTREET_MAP_API_URL}?lat=${latitude}&lon=${longitude}&zoom=10&format=json`
    );
    const location = data.address.city || '';
    setLocation(location);
    setLoading(false);
  }
}
