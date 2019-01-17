import {
  combineReducers
} from 'redux'
import events from './events'


import {
  FILTER_TEXT
} from '../constants'

const filtersReducerDefaultState = {
  text: ''
};


const filters = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case FILTER_TEXT:
      return {
        ...state,
        text: action.text
      };
    default:
      return state
  }
}


const rootReducer = combineReducers({
  events,
  filters
})

export default rootReducer