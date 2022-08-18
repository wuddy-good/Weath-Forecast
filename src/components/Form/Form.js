import { Component } from "react";
import "./Form.scss";
class Form extends Component {
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="City"></input>
                <button>Get weather</button>
            </form>
        )
    }
}
export default Form;