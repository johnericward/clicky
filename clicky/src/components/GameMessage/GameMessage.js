import React, {Component} from "react";
import "./GameMessage.css";

class GameMessage extends Component {

    state = {
        animating: false,
        message: ""
    }

   
    componentDidUpdate(prevProps) {

     
      let newState = {
        animating: true
      }

     
      const {score, topScore} = prevProps

      
      if (score === 0 && topScore === 0) {
        newState.message = "";
      } else if (score !== 0 && topScore > 0) {
        newState.message = "correct";
      } else {
        newState.message = "incorrect";
      }

      
      if (score !== this.props.score || this.state.message !== newState.message) {
        this.setState(newState);
      }
  
    }

   
    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
          return "Correct!";
        case "incorrect":
          return "Wrong!";
        default:
          return "Click each character only once!";
        }
    };

    
    changeState = () => {
      switch (this.state.message) {
        case "correct":
          return "";
        case "incorrect":
          return "";
        default:
          return "";
        }     
    }

    render() {
        return(
          <li 
            
            className={` 
              gameMessage 
              ${this.state.animating? this.changeState(): ""}  
              ${this.state.animating? this.state.message: "black"}
            `}
            id={`${this.state.message}`}
            onAnimationEnd={() => this.setState({ animating: false })} 
          >
            {this.renderMessage()}
          </li>  
        );
    }
}

export default GameMessage;
