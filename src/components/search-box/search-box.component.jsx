import { Component } from "react";
import './search-box-style.css'
class SearchBox extends Component{
    
    render(){
        const {onChangeHandler}=this.props;
        return(
            <input
            type="search"
            className={`search-box ${this.props.className}`}
            placeholder={this.props.placeholder}
            onChange={onChangeHandler}
        />

        )
    }
}
export default SearchBox;