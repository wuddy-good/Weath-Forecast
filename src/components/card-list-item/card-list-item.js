import moon  from"../../assets/moon.png"
import "./card-list-item.scss";
const CardListItem =() =>{
    return(
        <li className="card">
            <h1>Paris</h1>
            <div className="card__temperature">
                <p>25</p>
                <span>°C</span>
            </div>
            <img src={moon} alt="Img for weather" className="card__img"/>
            <p className="card__desrc">Clear Sky</p>
        </li>
    )
}
export default CardListItem