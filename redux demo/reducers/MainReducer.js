import { combineReducers } from 'redux';
//importing reducers
import CalendarReducer from './CalendarReducer';


export default combineReducers({
  calendar: CalendarReducer,
});
