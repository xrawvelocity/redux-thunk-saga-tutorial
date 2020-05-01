/* eslint-disable react/prop-types */
import React, {Component} from "react";
import "./App.css";

class App extends Component {
  renderCharacters () {
    console.log("props", this.props);
    return Object.keys(this.props.characters).map((key) => {
      const each = this.props.characters[key];
      return (
        <div key={key}>
          <h4>Name: {each.employee_name}</h4>
          <h4>Salary: ${each.employee_salary}</h4>
          <br />
        </div>
      );
    });
  }

  render () {
    return this.renderCharacters();
  }
}

export default App;
