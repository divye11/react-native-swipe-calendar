/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './Store';
import MainComponent from './CalendarStrip/MainComponent';

type Props = {};

export default class App extends Component<Props> {


  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
