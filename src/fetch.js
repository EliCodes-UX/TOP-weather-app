function newFetch() {
  const apiKey = '924c4b1a01844bbb99f64911232110';
  const apiURL = 'http://api.weatherapi.com/v1/current.json';
  const submitForm = document.getElementById('form');
  const input = document.querySelector('input');

  submitForm.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    checkWeather();
    fetchWeather();
  }

  async function checkWeather() {
    const response = await fetch(
      apiURL + `?key=${apiKey}` + `&q=${input.value}`,
      {
        mode: 'cors',
      }
    );
    let data = await response.json();

    const temp = document.querySelector('.temp');
    const conditions = document.querySelector('.conditions');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const city = document.querySelector('.city');
    const country = document.querySelector('.country');
    const geoLocation = document.querySelector('.geolocation');
    const timezone = document.querySelector('.local-time');

    temp.innerHTML = data.current.temp_f + '°F';
    conditions.innerHTML = `${data.current.condition.text} `;
    wind.innerHTML = data.current.wind_mph;
    humidity.innerHTML = data.current.humidity;

    city.innerHTML = data.location.name;
    country.innerHTML = data.location.country;
    geoLocation.innerHTML = `${data.location.lat}, ${data.location.lon}`;
    timezone.innerHTML = data.location.localtime;

    displayData();
    reset();

    console.log(data);
  }

  function displayData() {}

  function reset() {
    submitForm.reset;
  }

  function fetchWeather() {
    const input = document.querySelector('input[type="search"]');
    const userLocation = input.value;
    checkWeather(userLocation);
    console.log(userLocation);
  }
}

export default newFetch;
