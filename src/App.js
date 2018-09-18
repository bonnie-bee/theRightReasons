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

  clickBachelor = id => {
    let clicked = this.state.clicked;
    // const bachelors = this.state.bachelors.map(bachelor => this.state.bachelors[Math.floor(Math.random() * this.state.bachelors.length)]);
    console.log(clicked);
    console.log(id);
    
    if(clicked.includes(id)){
      let score = this.state.score;
      score = 0;
      clicked = [];
      this.setState({ 
        // bachelors,
        score,
        clicked})
    } else {
      clicked.push(id)
      let score = this.state.score+1;
      this.setState({ 
        // bachelors,
        score})
    }
    // let topScore = this.state.topScore;
    // if(this.state.topScore<score){
    //   return topScore+1
    // } else {
    //   return topScore
    // }
  }


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
