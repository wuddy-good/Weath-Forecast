import { Component } from "react";
import "./Card.scss";
class  Card extends Component{
    render(){
        const {getResult} = this.props;
        return(
            <div className="card">
                <div className="card__location">
                    <div className="location">{getResult.name}</div>
                    <div className="date">Wednesday 17 Agust 2022</div>
                </div>
                <div className="card__temperature">
                    <p>{getResult.temp}</p>
                    <p>°C</p>
                </div>
                <p className="card__desrc">{getResult.description}</p>
            </div>
        )
    }
}
export default Card