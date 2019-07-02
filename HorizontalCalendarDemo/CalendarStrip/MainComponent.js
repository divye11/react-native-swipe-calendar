import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import faker from 'faker';
import moment from 'moment';
import type Moment from 'moment';
import { connect } from 'react-redux';

import CalendarStrip from './CalendarStrip';

import { SetActiveIndex } from '../actions/CalendarActions';
import styles from './styles/MainComponentStyles';

export type FakeTransactionsType = {
  date: Moment,
  place: string,
  amount: string,
  time: string,
  mode: string
};

// Generate fake event data
const FakeTransactions: Array<FakeTransactionsType> = (() => {
  const startDay = moment().subtract(5, 'days').startOf('day');
  return [...new Array(64)].map(_ => ({
    date: startDay.add(4, 'hours').clone(),
    place: faker.company.companyName(),
    amount: faker.commerce.price(),
    time: faker.date.future(),
    mode: faker.company.companyName()
  }));
})();

// Filter events by date
const filterEvents = (date: Moment): ?Array<FakeTransactionsType> =>
  FakeTransactions.filter(event => event.date.isSame(date, 'day'));

class MainComponent extends Component {
  state = {
    transaction: filterEvents(moment()),
    calendarVisible: false,
    isDateTimePickerVisible: false,
    currentDate: new moment(),
    currentDateIndex: null
  };

  onSelectDate = (date: Moment) => {
    this.setState({ transaction: filterEvents(date) });
    Alert.alert('date Selected is', date);
  };

  render() {
    const { transaction, currentDate } = this.state;
    return (
      <View style={styles.container}>
        <CalendarStrip
        currentDate={currentDate}
        showDaysAfterCurrent={30}
        onSelectDate={this.onSelectDate}
        width={responsiveWidth(90)}
        />
      </View>
    );
  }
}


export default connect(null, { SetActiveIndex })(MainComponent);
