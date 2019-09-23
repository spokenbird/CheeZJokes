import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote() {
    // debugger;
    this.props.upVote(this.props.id);
  }

  handleDownVote() {
    this.props.downVote(this.props.id);
  }

  render () {
    return (
      <div className="joke row">
        <div className="col-sm-1 vote">
          <i onClick={ this.handleUpVote } className="fas fa-arrow-up"></i>
            <span>{this.props.votes}</span>
          <i onClick={ this.handleDownVote } className="fas fa-arrow-down"></i>
        </div>
        <div className="col-sm-11">
          <p>{this.props.joke}</p>
        </div>
      </div>
    )
  }
}

export default Joke;