class WeatherServices{
    _base = "https://api.openweathermap.org/data/2.5/"
    _key = "3f0528f8a28d5803eeaf7fc72f442bd4"
    getResurse = async(name) =>{
        let response = await fetch(`${this._base}weather?q=${name}&appid=${this._key}`);
        if (response.ok) { 
            return await response.json();
          } else {
            alert("Помилка HTTP: " + response.status);
          }
    }
}
export default WeatherServices;