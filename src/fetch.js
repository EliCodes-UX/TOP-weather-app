function newFetch() {
  const apiKey = '924c4b1a01844bbb99f64911232110';
  const apiURL = 'http://api.weatherapi.com/v1/current.json';

  async function checkWeather() {
    const response = await fetch(apiURL + `?key=${apiKey}` + `&q=glendale,az`);
    let data = await response.json();

    console.log(data);
  }
  checkWeather();
}
export default newFetch;
