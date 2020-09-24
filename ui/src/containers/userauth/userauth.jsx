import React, { Component } from "react";
import Card from "../cards/card";

class UserAuth extends Component {
  state = {
    cardProperty: {
      header: "Please Login",
      showDisplayName: false,
      inputs: [
          {
            displayName: "Username",
            placeHolder: "Username",
            type: "text",
            required: true,
            value:null
          },
          {
            displayName: "Password",
            placeHolder: "Password",
            type: "password",
            required: true,
            value:null
          }
      ],
      button: [
          {
              displayName: "Login",
              action:""
          },
          {
              displayName: "Register",
              action:""
          }
      ]

    },
  };
  render() {
    return (
      <div>
        <Card {...this.state.cardProperty} />
      </div>
    );
  }
}

export default UserAuth;
