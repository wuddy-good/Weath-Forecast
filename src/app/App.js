import { Component } from 'react';
import Card from '../components/Card/Card';
import Form from '../components/Form/Form';
class App extends Component{
    state={
      temperature: 274,
      city: undefined,
      desrc: undefined,
      country: undefined,
      error: undefined
    }
    _base = "https://api.openweathermap.org/data/2.5/"
    _key = "3f0528f8a28d5803eeaf7fc72f442bd4"
    getResurse = async(e) =>{
        e.preventDefault();
        let city= e.target.elements.city.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._key}`);
        const data = await response.json();
        if (response.ok) { 
            this.setState({ 
              city: data.name,
              desrc: data.weather[0].description,
              error: undefined,
              temperature: data.main.temp})
          } else {
            alert("Помилка HTTP: " + response.status);
          }
    }

  render(){
    return (
      <div className="app">
        <main>
          <Form weatherMethod={this.getResurse} />
          <Card 
            temp={this.state.temperature}
            city={this.state.city}
            desrc= {this.state.desrc}
            error={this.state.error}
          />
        </main>
      </div>
    )
  }
}

export default App;
