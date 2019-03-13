import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HandleAnswers extends Component {

  render() {
    return (
      <div className="answers-commands">
        <button className="btn btn-secondary" 
          onClick={() => { this.props.handleAnswerReset(); this.props.handleRespondLater()}}
        >Respond later</button>
        <button className="btn btn-secondary" 
          onClick={this.props.handleAnswerReset}
        >Delete answer</button>
        <button className="btn btn-secondary" 
          onClick={() => { this.props.handleSendAnswer(this.props.a, this.props.b, this.props.c); this.props.handleAnswerReset()}}
        >Send answer</button>
      </div>
    );
  }
}

HandleAnswers.propTypes = {
  a: PropTypes.bool.isRequired,
  b: PropTypes.bool.isRequired,
  c: PropTypes.bool.isRequired,
  handleAnswerReset: PropTypes.func.isRequired,
  handleRespondLater: PropTypes.func.isRequired,
  handleSendAnswer: PropTypes.func.isRequired
}


export default HandleAnswers;