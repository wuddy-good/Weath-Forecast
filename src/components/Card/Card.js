import { Component } from "react";
import "./Card.scss";
class  Card extends Component{
    render(){
        const {temp, city,desrc} = this.props;
        return(
            <div className="card">
                <div className="card__location">
                    <div className="location">{city}</div>
                    <div className="date">Wednesday 17 Agust 2022</div>
                </div>
                <div className="card__temperature">
                    <p>{temp}  °C</p>
                </div>
                <p className="card__desrc">{desrc}</p>
            </div>
        )
    }
}
export default Card