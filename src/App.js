import './App.css';
import { Component, useState } from 'react';
import { Button } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      punchline: ""
    };
  }
  getJoke = () => {
    this.setState({
      joke: "Loading.......",
      punchline: "Please, Wait!!!"
    });
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        this.setState({
          joke: data.setup,
          punchline: data.punchline
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          joke: "Something went wrong.....",
          punchline: "Try again later!!!"
        });
      })
  }
  componentDidMount() {
    this.getJoke();
  }
  render() {
    return (
      <div className="App">
        <section className="App-container">
          <h1>{this.state.joke}</h1>
          <h2>{this.state.punchline}</h2>
          <Button className="App-btn" variant="contained" color="primary" onClick={this.getJoke}>
            Get Joke
          </Button>
        </section>
      </div>
    );
  }
}

export default App;
