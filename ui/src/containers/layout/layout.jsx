import React, { Component } from "react";
import Root from "../../root/root";
import Footer from "../footer/footer";
import Header from "../../components/header/header";
import Card from "../cards/card";
import UserAuth from "../userauth/userauth";
import { Switch, Route } from "react-router-dom";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Root>
        <Switch>
          <Route exact path="/ui/auth">
            <UserAuth />
          </Route>
          <Route path="/">
            <Header />
            <Card />
            <Footer></Footer>
          </Route>
        </Switch>
      </Root>
    );
  }
}

export default Layout;
