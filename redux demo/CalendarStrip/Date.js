import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Moment from 'moment';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Days from './Constants';
//importing styles
import styles from './styles/DateStyle';

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.getDay(),
      date: this.getDate()
    }
  }

  getDay = () => {
    let MomentDate = Moment(this.props.date);
    let dayforDate = Days.filter(day => day.index === MomentDate.day());
    let daay = Object.assign({}, ...dayforDate.map(o => ({ day: o.day })));
    return daay.day;
  }

  getDate = () => {
    let MomentDate = Moment(this.props.date);
    return MomentDate.format('DD');
  }

  getContainerStyle = () => {
    if (this.props.active) {
      return styles.container;
    }
    return styles.inactiveContainer;
  }

  getFontStyle = () => {
    if (this.props.active) {
      return styles.activeFont;
    }
    return styles.inactiveFont;
  }

  onPress = () => {
    let { date, index } = this.props;
    this.props.selectDayFromStrip(date, index);
  }

  onLayout = (event: { nativeEvent: { layout: { x: number, y: number, width: number, height: number } } }) => {
    const { nativeEvent: { layout: { width } } } = event;
    const { onRender } = this.props;
    onRender(responsiveWidth(15));
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress} onLayout={this.onLayout}>
        <View style={this.getContainerStyle()}>
          <Text style={[this.getFontStyle(), { marginBottom: 5 }]}>{this.state.day}</Text>
          <Text style={this.getFontStyle()}>{this.state.date}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Date;
