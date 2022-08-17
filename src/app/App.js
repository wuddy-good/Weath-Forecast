import { Component } from 'react';
import Card from '../components/Card/Card';
import SearchPanel from '../components/SearcPanel/SearchPanel';
import WeatherServices from '../services/WeatherServices';
class App extends Component{
    state={
      res: {}
    }
    weatherServices = new WeatherServices();
    getWeather =(name) =>{
      this.setState({res:this.weatherServices.getResurse(name)});
    }
    getResult =() =>{
      return({
        description: this.res.weather.main,
        temp: Math.floor(this.res.main.temp),
        name: this.res.name
      }
        
      )
    }
  render(){
    return (
      <div className="app">
        <main>
          <SearchPanel getWeather={this.getWeather}/>
          <Card getResult={this.getResult}/>
        </main>
      </div>
    )
  }
}

export default App;
