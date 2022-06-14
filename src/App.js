import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'
import "./App.css";
import { Component } from "react";
class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
        // console.log('Constructor called')
    }
    componentDidMount() {
        // console.log("Component did mount called")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {}
                );
            });
    }
    onSearchChange=(event) => {
      // console.log(event.target.value);
      const searchField = event.target.value.toLowerCase();
      this.setState(() => {
          return { searchField };
      });
  };
    render() {
        // console.log("render called")
        const {monsters,searchField}=this.state;
        const {onSearchChange}=this;
        const filtermonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });
        return (
            <div className="App">
            <h1 className='app-title'>Monster Rolodex</h1>
                <SearchBox className="monster-search-box" placeholder="search monsters" onChangeHandler={onSearchChange}></SearchBox>
                <CardList monsters={filtermonsters} />
            </div>
        );
    }
}

export default App;
