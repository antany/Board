import React, { Component } from "react";
import Root from "../../root/root";
import Footer from "../footer/footer";
import Header from "../../components/header/header";
import Card from "../cards/card";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Root>
        <Header />
        <Card />
        <Footer></Footer>
      </Root>
    );
  }
}

export default Layout;
