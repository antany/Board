import React from 'react';
import Root from "../../root/root";
import Footer from "../../containers/footer/footer";
import Header from "../header/header";
import UserAuth from "../../containers/userauth/userauth";
import RegisterForm from "../../containers/register/register";
import { Switch, Route } from "react-router-dom";

const Layout = () => {
  return (<Root>
    <Switch>
      <Route exact path="/ui/auth">
        <UserAuth />
      </Route>
      <Route exact path="/ui/auth/register">
        <RegisterForm />
      </Route>
      <Route path="/">
        <Header />
        <Footer></Footer>
      </Route>
    </Switch>
  </Root>  );
}
 
export default Layout;

