import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Card from "./components/Card/Card";
import cards from "./components/Card/cards.json";
import Footer from "./components/Footer/Footer";
import './App.css';

class App extends Component {

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
              />
            ))}
          </Container>
          <Footer />
        </div>
      );
    }
}

export default App;
