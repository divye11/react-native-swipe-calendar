import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//importing actions
import { SetActiveIndex } from '../../actions/CalendarActions';

//importing components
import Date from './Date';

//importing styles
import styles from './styles/styles';

const moment = extendMoment(Moment);
class CalendarStrip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: this.getDates(),
      currentDateIndex: this.props.currentDateIndex ? this.props.currentDateIndex : 2
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.currentDate !== null || this.props.currentDate !== nextProps.currentDate) {
      return true;
    } else if (this.props.currentDateIndex !== nextProps.currentDateIndex) {
      return true;
    }
    return false;
  }


  onSelectDay = (date, index) => {
    this.props.SetActiveIndex(index);
    this.props.onSelectDate(Moment(date));
  }

  getDates = () => {
    const { showDaysBeforeCurrent, showDaysAfterCurrent, currentDate } = this.props;
    let totalDays = showDaysAfterCurrent + showDaysBeforeCurrent + 1;
    const startDay = currentDate.clone().subtract(showDaysBeforeCurrent, 'days').format('YYYY-MM-DD');
    const endDay = currentDate.clone().add(showDaysAfterCurrent, 'days').format('YYYY-MM-DD');
    const range = moment.range(Moment(startDay), Moment(endDay));
    const arrayInterval = Array.from(range.by('day'));
    let dates = [];
    arrayInterval.map(d => dates.push(d.format('YYYY-MM-DD')));
    return dates;
  }

  onRender = (width) => {
    console.log(width);
  }

  _renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <Date
        date={item}
        index={index}
        active={index === this.props.currentDateIndex}
        selectDayFromStrip={this.onSelectDay}
        onRender={this.onRender}
        />
      </View>
    );
  }

  _keyExtractor = (item) => item.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        keyExtractor={this._keyExtractor}
        style={styles.calendarStrip}
        data={this.getDates()}
        renderItem={this._renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
        scrollEventThrottle={100}
        />
      </View>
    );
  }
}

CalendarStrip.propTypes = {
  currentDate: PropTypes.instanceOf(Moment),
  showDaysBeforeCurrent: PropTypes.number,
  showDaysAfterCurrent: PropTypes.number,
  currentDateIndex: PropTypes.number
};

CalendarStrip.defaultProps = {
  currentDate: Moment(),
  showDaysAfterCurrent: 3,
  showDaysBeforeCurrent: 2,
  currentDateIndex: 2
};

const mapStateToProps = (state) => {
  const { currentDateIndex } = state.calendar;
  return { currentDateIndex };
};

export default connect(mapStateToProps, { SetActiveIndex })(CalendarStrip);
