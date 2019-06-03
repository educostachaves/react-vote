import { combineReducers } from 'redux';
import votes from './votes';

const rootReducer = combineReducers({
  votes,
});

export default rootReducer;
