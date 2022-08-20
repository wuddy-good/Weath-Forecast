import { Component } from "react";
import "./Card.scss";
class  Card extends Component{
    toCeliuse = (e) =>{
        return Math.floor(e - 273.5)
    }
    chekTemperatur = (data) =>{
        if(data===0){
            return data
        }else{
            return this.toCeliuse(data);
        }
    }
    render(){
        const {temp,city,desrc,day,month,year,date} = this.props;
        return(
            <div className="card">
                <div className="card__location">
                    <div className="location">{city}</div>
                    <div className="date">{day} {date} {month} {year}</div>
                </div>
                <div className="card__temperature">
                    <p>{this.chekTemperatur(temp)}</p>
                    <span>°C</span>
                </div>
                <p className="card__desrc">{desrc}</p>
            </div>
        )
    }
}
export default Card