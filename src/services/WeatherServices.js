class WeatherServices{
    _base = "https://api.openweathermap.org/data/2.5/"
    _key = "3f0528f8a28d5803eeaf7fc72f442bd4"
    getResurse = async(e) =>{
        e.preventDefault();
        let city= e.target.elements.city.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._key}`);
        if (response.ok) { 
            
            console.log(response.json())
            this.setState({ 
              temp: response.main.temp,
              city: undefined,
              desrc: undefined,
              country: undefined,
              error: undefined })
          } else {
            alert("Помилка HTTP: " + response.status);
          }
    }
}
export default WeatherServices;