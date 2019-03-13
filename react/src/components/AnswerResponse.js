import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnswerResponse extends Component {

  render() {
    return (
      <div className="answers-response">
        <button id="a" className={this.props.a ? 'btn btn-warning' : 'btn btn-secondary'} onClick={this.props.handleAnswerClick}>A</button>
        <button id="b" className={this.props.b ? 'btn btn-warning' : 'btn btn-secondary'} onClick={this.props.handleAnswerClick}>B</button>
        <button id="c" className={this.props.c ? 'btn btn-warning' : 'btn btn-secondary'} onClick={this.props.handleAnswerClick}>C</button>
      </div>
    );
  }
}

AnswerResponse.propTypes = {
  a: PropTypes.bool.isRequired,
  b: PropTypes.bool.isRequired,
  c: PropTypes.bool.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
}

export default AnswerResponse;