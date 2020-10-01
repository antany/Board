import React from "react";
import Root from "./root/root";
import Layout from "./components/layout/layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <div>
          <Layout />
        </div>
      </BrowserRouter>
    </Root>
  );
};

export default App;
