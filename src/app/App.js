import { Component } from 'react';
import Card from '../components/Card/Card';
import Form from '../components/Form/Form';
class App extends Component{
    state={
      city: "City",
      desrc: 'Something',
      error: undefined,
      temp: 0 ,
    }
    _base = "https://api.openweathermap.org/data/2.5/"
    _key = "3f0528f8a28d5803eeaf7fc72f442bd4"
    _Months = ["January","February", "March", "April","May", "June","July","Agust","September","October","November","December"];
    _Days =["Saturday ","Sunday","Monday ","Tuesday ","Wednesday","Thursday","Friday"];
    getResurse = async(e) =>{
        e.preventDefault();
        let city= e.target.elements.city.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._key}`);
        const data = await response.json();
        if (response.ok) { 
            this.setState({
              temp: data.main.temp, 
              city: data.name,
              desrc: data.weather[0].description,
              error: "",
              })
          } else {
            alert("Помилка HTTP: " + response.status);
          }
    }

  
  render(){
    let MainDate = new Date();
    let day = this._Days[MainDate.getDay()];
    let month = this._Months[MainDate.getMonth()];
    let date = MainDate.getDate();
    let year = MainDate.getFullYear();
    return (
      <div className="app">
        <main className='main'>
          <Form weatherMethod={this.getResurse} />
          <Card 
            temp={this.state.temp}
            city={this.state.city}
            desrc= {this.state.desrc}
            error={this.state.error}
            day={day}
            month={month}
            date={date}
            year={year}
          />
        </main>
      </div>
    )
  }
}

export default App;