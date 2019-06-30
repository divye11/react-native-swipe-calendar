import { responsiveWidth } from 'react-native-responsive-dimensions';

const styles = {
  container: {
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3
  },
  calendarStrip: {
    width: responsiveWidth(80)
  }
};

export default styles;
