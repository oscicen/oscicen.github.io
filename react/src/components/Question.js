import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnswerResponse from './AnswerResponse';
import HandleAnswers from './HandleAnswers';

class Question extends Component {
  constructor(props) {
    super(props);   
    this.handleAnswerReset = this.handleAnswerReset.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);

    this.state = {
      a: false,
      b: false,
      c: false
    };
  }

  handleAnswerClick(event) {
    this.setState({
      [event.target.id]: true
    });
  }

  handleAnswerReset() {
    this.setState({
      a: false,
      b: false,
      c: false
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>{this.props.question}</h2>
        <div className="answers">
          <p className={this.state.a ? 'alert alert-warning' : 'alert alert-dark'}><strong>A. </strong>{this.props.optionA}</p>
          <p className={this.state.b ? 'alert alert-warning' : 'alert alert-dark'}><strong>B. </strong>{this.props.optionB}</p>
          <p className={this.state.c ? 'alert alert-warning' : 'alert alert-dark'}><strong>C. </strong>{this.props.optionC}</p>
          <AnswerResponse 
            a={this.state.a} 
            b={this.state.b} 
            c={this.state.c} 
            handleAnswerClick={this.handleAnswerClick} 
          />
          <HandleAnswers 
            a={this.state.a}
            b={this.state.b}
            c={this.state.c} 
            handleAnswerReset={this.handleAnswerReset}
            handleRespondLater={this.props.handleRespondLater}
            handleSendAnswer={this.props.handleSendAnswer}
          />
        </div>
      </div>
      );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  handleRespondLater: PropTypes.func.isRequired,
  handleSendAnswer: PropTypes.func.isRequired
}

export default Question;
