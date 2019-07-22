NOTE: Currently I am building this library. Feel free to install the demo app from from examples folder and check the component for yourself. 

# react-native-swipe-calendar
Horizontal swiping calendar component for your react native app.

## Installation steps
Install from the NPM respository using yarn or npm

Installing using npm
```bash
npm install react-native-swipe-calendar
```
Installing using Yarn
```bash
yarn add react-native-swipe-calendar
```

## Inspiration
The following library is an inspiration from the library [react-natve-horizontal-calendar](https://github.com/rationalappdev/react-native-horizontal-calendar-tutorial). 

## Motivation
The existing library was missing a few components like integration with redux and an external calendar component to change month, date and year.

## Usage
```bash
import CalendarStrip from 'react-native-swipe-calendar';

class Demo extends Component {

  state = {
    currentDate: new moment(),
    currentDateIndex: null
  };

  onSelectDate = (date: Moment) => {
    Alert.alert('date Selected is', date);
  };
  
  render() {
    return (
      <View>
        <CalendarStrip
        currentDate={currentDate}
        showDaysAfterCurrent={30}
        onSelectDate={this.onSelectDate}
        width={responsiveWidth(90)}
        />
      </View>
    )
   }
}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
