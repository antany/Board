import React, { Component } from "react";
import styles from "./footer.module.css";

class Footer extends Component {
  componentDidMount() {
    this.nameInput.focus();
  }

  enterPressed = (event) => {
    if (event.keyCode === 13) {
      this.setState({ command: "" });
    }
  };

  updateCommand = (event) => {
    this.setState({ command: event.target.value });
  };

  state = {
    command: "",
  };
  render() {
    return (
      <footer className={styles["command-footer"]}>
        <div className="container-fluid">
          <div className="row">
            <input
              type="text"
              ref={(input) => {
                this.nameInput = input;
              }}
              value={this.state.command}
              onChange={this.updateCommand}
              onKeyUp={this.enterPressed}
              placeholder="Enter command here..."
              className={styles["command-footer"]}
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
