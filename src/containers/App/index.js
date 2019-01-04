import React, { Component } from "react";
import { Global } from "@emotion/core";
import { AppContainer, AppHeader, List } from "./CSS";
import { globalStyles } from "../../globalStyles";

/**
 *
 *
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Global styles={globalStyles} />
        <AppHeader>react starter 2019</AppHeader>
        <List>
          <li>react</li>
          <li>emotion</li>
          <li>rebass</li>
          <li>dotenv</li>
          <li>eslint</li>
          <li>stylelint</li>
          <li>prettier</li>
          <li>husky</li>
          <li>formik</li>
          <li>react-testing-library</li>
          <li>jest</li>
        </List>
      </AppContainer>
    );
  }
}
