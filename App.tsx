import React, { Component } from "react";
import AppContainer from "./src/Routes";
import { Provider } from "react-redux";
import store from "./src/ducks";

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
