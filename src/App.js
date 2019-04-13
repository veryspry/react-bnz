import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import NotFound from "views/not-found";
import DefaultRoute from "./default-route";

import GlobalStyles from "./styles/global";

import theme from "./theme";

const GetStarted = props => <div>Party started!</div>;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          {/* Global Style reset */}
          <GlobalStyles />
          <BrowserRouter>
            <Switch>
              <DefaultRoute exact path="/" component={GetStarted} />
              <DefaultRoute path="/" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
