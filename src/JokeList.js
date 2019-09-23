import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke';

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numJokes: 10,
      jokes: []
    }
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get('https://icanhazdadjoke.com/search?limit=10', {headers: {Accept: "application/json"}});
    let jokes = response.data.results;
    this.setState(st => ({
      jokes: jokes.map(joke => ({...joke, votes: 0}))
    }));
  }

  upVote(id) {
    this.setState(st => {
      let jokes = st.jokes.map(joke => {
        if (joke.id === id) {
          return {...joke, votes: joke.votes + 1}
        }
        return joke;
      });
      return {jokes};
    })
  }

  downVote(id) {
    this.setState(st => {
      let jokes = st.jokes.map(joke => {
        if (joke.id === id) {
          return {...joke, votes: joke.votes - 1}
        }
        return joke;
      });
      return {jokes};
    })
  }

  render() {
    return (
      <div className="joke-container">
        {this.state.jokes.map(joke => <Joke joke={joke.joke} key={joke.id} votes={joke.votes} upVote={this.upVote} downVote={this.downVote} id={joke.id}/>)}
      </div>
    )
  }
}

export default JokeList;