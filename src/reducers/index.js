import { combineReducers } from 'redux';

import home from './home_reducer';
import gallery from './gallery_reducer'
import tvseries from './tv_series_reducer'

const rootReducer = combineReducers({
  home,
  gallery,
  tvseries
})

export default rootReducer; 