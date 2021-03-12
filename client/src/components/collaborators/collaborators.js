import React, { Component } from "react";
import "./collaborators.css";

class Collaborators extends Component {
  constructor() {
    super();
    this.state = {
      collaborators: [],
    };
  }

  componentDidMount() {
    fetch("/api/collaborators")
      .then((res) => res.json())
      .then((collaborators) =>
        this.setState({ collaborators }, () =>
          console.log("Collaborators fetched..", collaborators)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Collaborators</h2>
        <ul>
          {this.state.collaborators.map((collaborator) => (
            <li key={collaborator.id}>
              {collaborator.firstName} {collaborator.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Collaborators;
