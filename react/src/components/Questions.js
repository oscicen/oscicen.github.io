import React, { Component } from 'react';
import Question from './Question';
import database from '../mockdb';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.handleRespondLater = this.handleRespondLater.bind(this);
    this.handleSendAnswer = this.handleSendAnswer.bind(this);

    this.state = {
      currentQ: 0,
      incorrect: [],
      correct: [],
    }
  }

  handleRespondLater() {
    const answered = this.state.incorrect.concat(this.state.correct);
    let unanswerd = [];

    for (let i = 0; i < database.length; i++) {
      if (answered.indexOf(i) === -1) {
        unanswerd.push(i);
      }
    }

    const current = unanswerd.indexOf(this.state.currentQ);

    if (unanswerd.length > 1) {
      if (current !== unanswerd.length - 1) {
        this.setState({ currentQ: unanswerd[current + 1] });
      } else {
        this.setState({ currentQ: unanswerd[0] });
      }
    }
  }

  handleSendAnswer(a, b, c) {
    if (a || b || c) {
      if (database[this.state.currentQ].answers.a[1] === a && database[this.state.currentQ].answers.b[1] === b && database[this.state.currentQ].answers.c[1] === c && this.state.correct.indexOf(this.state.currentQ) === -1) {
        this.setState({ correct: [...this.state.correct, this.state.currentQ] });
      } else /* if (this.state.incorrect.indexOf(this.state.currentQ) === -1 && this.state.correct.indexOf(this.state.currentQ) === -1) */ {
        this.setState({ incorrect: [...this.state.incorrect, this.state.currentQ] });
      }
      this.handleRespondLater();
    }
  }

  render() {
    const questionId = database[this.state.currentQ];
    const question = questionId.question;
    const optionA = questionId.answers.a[0];
    const optionB = questionId.answers.b[0];
    const optionC = questionId.answers.c[0];

    const showQuestion = (
      <Question
        question={question}
        optionA={optionA}
        optionB={optionB}
        optionC={optionC}
        handleRespondLater={this.handleRespondLater}
        handleSendAnswer={this.handleSendAnswer}
      />);
      
    const showResult = (
      <div className="jumbotron text-center">
        <p>Congrats!</p>
        <p>You got {this.state.correct.length} out of {database.length}.</p>
      </div>
    )

    const grandFinale = this.state.correct.concat(this.state.incorrect).length === database.length ? showResult : showQuestion;

    return (
      <div>
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><span className="badge badge-success">{this.state.correct.length}</span> correct</li>
          <li className="breadcrumb-item"><span className="badge badge-danger">{this.state.incorrect.length}</span> incorrect</li>
          <li className="breadcrumb-item">question <span className="badge badge-primary">{this.state.currentQ + 1}</span> of <span className="badge badge-primary">{database.length}</span></li>
        </ul>
        {grandFinale}
      </div>
    );
  }
}

export default Questions;