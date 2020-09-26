import React, { Component } from "react";

import styles from './userauth.module.css';

class UserAuth extends Component {
  state = {
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Sign In</h1>
        <form method="post">
          <div className={styles["input-filed"]}>
            <input type="text" required/>
            <label>Username</label>
          </div>
          <div className={styles["input-filed"]}>
            <input type="password" required/>
            <label>Password</label>
          </div>
           <a href="/ui/register">Register</a>
          <input type="submit" className={styles["btn-login"]} value="Login"/>
          
        </form>
      </div>
    );
  }
}

export default UserAuth;
