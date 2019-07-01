/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CalendarStrip from './CalendarStrip/CalendarStrip';


type Props = {};

// Filter events by date
const filterEvents = (date: Moment): ?Array<FakeTransactionsType> =>
FakeTransactions.filter(event => event.date.isSame(date, 'day'));

export default class App extends Component<Props> {

  onSelectDate = (date: Moment) => {
    this.setState({ transaction: filterEvents(date) });
  };

  render() {
    return (
      <View style={styles.container}>
        <CalendarStrip
        currentDate={currentDate}
        showDaysAfterCurrent={30}
        onSelectDate={this.onSelectDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
