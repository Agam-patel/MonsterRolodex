// import { Component } from "react";
import Card from "./../card/card.component";
import "./card-list.styles.css";
import "./cardstyle.css";
const cardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card monster={monster} />;
            })}
        </div>
    );
};
export default cardList;
