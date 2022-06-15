import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
    const [searchField, setSearchField] = useState(""); //[value ,setvalue]
    const [monsters, setMonster] = useState([]);
    const [fiteredMonsters, setFilterMonsters] = useState(monsters);
    const [stringField, setStringField] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                setMonster(users);
            });
    }, []);
    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });
        setFilterMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };
    const onstringChange = (event) => {
        setStringField(event.target.value);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monster Rolodex</h1>
            <SearchBox
                className="monster-search-box"
                placeholder="search monsters"
                onChangeHandler={onSearchChange}
            ></SearchBox>
            <SearchBox
                placeholder="setstring"
                onChangeHandler={onstringChange}
            ></SearchBox>
            <CardList monsters={fiteredMonsters} />
        </div>
    );
};

export default App;
