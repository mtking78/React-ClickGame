import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Card from "./components/Card/Card";
import cards from "./components/Card/cards.json";
import Footer from "./components/Footer/Footer";
import './App.css';

class App extends Component {

    // Setting the initial states of the App component
    state = {
      // this includes the cards.json array,
      cards,
      // an array to hold each clicked card
      clickedArr: [],
      score: 0,
      topScore: 0
    };

    // handleClick increments this.state.score by 1 and sets the clicked value to `true`
    handleClick = (Id) => {
      // let cardId = Id.target
      // let cardId = this.state.cards.id
      // console.log(cardId);


      this.setState({ score: this.state.score + 1 });
      console.log("score: " + this.state.score);
    };

    render() {
      return (
        <div className="App">
          <Navbar />
          <Container>
            {/* {this.state.cards.map(card => ( */}
            {cards.map(card => (
              <Card
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
                handleClick={this.handleClick}
              />
            ))}
          </Container>
          <Footer />
        </div>
      );
    }
}

export default App;
