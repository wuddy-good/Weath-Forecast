import {Component} from 'react';
import CardListItem from "../card-list-item/card-list-item";
class CardList extends  Component{
    state ={
        weatherList:[],
        loading: true,
        error: false
    }     
    render(){
        const{weatherList} = this.state;
        const items =  weatherList.map((item) => {
            return (
                <li className="card"
                    key={Math.random() * (100000 - 0) + 0}>
                    <h1>item.name</h1>
                    <div className="card__temperature">
                        <p>item.main.temp</p>
                        <span>°C</span>
                    </div>
                    <p className="card__desrc">item.weather.description</p>
                </li>
            )
        });
    
        return (
            <ul>
                {items}
            </ul>
        )

    }
}
export default CardList