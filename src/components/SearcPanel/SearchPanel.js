import { Component } from "react";
import "./SearchPanel.scss";
class SearchPanel extends Component {
    onKeyPress = (e) =>{
        if(e.keyCode === 13){
            this.props.getWeather(e.value)
        }
    }
    render(){
        return(
            <input 
                type="text"
                className='search-panel'
                placeholder='Seahc for a city'
                />
        )
    }
}
export default SearchPanel;