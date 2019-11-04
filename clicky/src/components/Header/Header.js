import React from "react";
import "./Header.css";
import GameMessage from "../GameMessage";

const Header = props => (
    <div className="header">
        <ul>
            <li><h2 className="title">
            <img src="assets/images/logo.png" alt="logo"></img>
                </h2></li>
            <GameMessage score={props.score} topScore={props.topScore} />
            <li id="score">Score: {props.score} <br></br> High Score: {props.topScore}</li>
        </ul>
        
    </div>
)

export default Header;

