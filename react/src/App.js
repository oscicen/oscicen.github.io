import React from "react";
import Questions from "./components/Questions";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Questions />
      </div>
    );
  }
}

export default App;
