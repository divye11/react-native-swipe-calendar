import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = {
  container: {
    height: responsiveHeight(9),
    width: responsiveWidth(11.5),
    backgroundColor: '#3F81EF',
    borderRadius: 9,
    marginRight: responsiveWidth(3.5),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  inactiveContainer: {
    height: responsiveHeight(9),
    width: responsiveWidth(11.5),
    backgroundColor: 'white',
    borderRadius: 9,
    marginRight: responsiveWidth(3.5),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeFont: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: 'white',
  },
  inactiveFont: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: 'black',
  }
};

export default styles;
