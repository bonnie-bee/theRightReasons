import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bachelor from "./components/Bachelor";
import Wrapper from "./components/Wrapper";
import bachelors from "./bachelors.json"

class App extends Component {
  state = {
    bachelors
  };

  removeBachelor = id => {
    const bachelors = this.state.bachelors.filter(bachelor => bachelor.id !== id);

    this.setState({ bachelors })
  }
  render() {
    return (
      <Wrapper>
        <Header>Let's Do The Damn Thing</Header>
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
    );
  }
}
export default App;
