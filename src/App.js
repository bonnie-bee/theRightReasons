import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bachelor from "./components/Bachelor";
import Wrapper from "./components/Wrapper";
import Greet from "./components/Greet";
import bachelors from "./bachelors.json"
import "./styles/App.css"

class App extends Component {
  state = {
    bachelors,
    score: 0,
    topScore: 0,
    clicked: []
  };

  topScores = () => {
    let topScore = this.state.topScore;
    let score = this.state.score;
    console.log("hello");
    if(topScore<=score){
      topScore++
      this.setState({
        topScore
      })} else {
        return;
      }
  };

  //function that passes in the id of the bachelor image the user clicks
  clickBachelor = id => {

    //shuffle the bachelor cards each time you click one
    let bachelors = this.state.bachelors
      bachelors.sort(() => Math.random() - 0.5);

    //set the array of clicked bachelors
    let clicked = this.state.clicked;
    let score = this.state.score

    //checks to see if the bachelor id is in the clicked array
    if(clicked.includes(id)){ //if in array then reset game
      score = 0;
      clicked = [];
      this.setState({ 
        score,
        clicked})
    } else { //if not in array then push id to clicked array and update the score
      clicked.push(id)
      score++
      this.topScores();
      this.setState({ 
        score})
    }
  };



  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore}>Let's Do The Damn Thing</Header>
        <Greet />
        <Wrapper>
          {this.state.bachelors.map(bachelor => (
            <Bachelor
              clickBachelor={this.clickBachelor}
              id={bachelor.id}
              key={bachelor.id}
              name={bachelor.name}
              image={bachelor.image}
              season={bachelor.season}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default App;
