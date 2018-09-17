import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bachelor from "./components/Bachelor";
import Wrapper from "./components/Wrapper";
import bachelors from "./bachelors.json"

class App extends Component {
  state = {
    bachelors,
    score: 0,
    topScore: 0
  };

  removeBachelor = id => {
    const bachelors = this.state.bachelors.filter(bachelor => bachelor.id !== id);
    const score = this.state.score+1;
    let topScore = this.state.topScore;
    // if(this.state.topScore<score){
    //   return topScore+1
    // } else {
    //   return topScore
    // }

    this.setState({ 
      bachelors,
      score,
      topScore})
  }


  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore}>Let's Do The Damn Thing</Header>
        <Wrapper>
          {this.state.bachelors.map(bachelor => (
            <Bachelor
              removeBachelor={this.removeBachelor}
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
