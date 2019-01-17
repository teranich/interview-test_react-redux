import * as types from '../constants'

export const addEvent = (name, date, address) => ({ type: types.ADD_EVENT,  name, date, address})
export const selectAllEvents = () => ({type: types.SELECTALL_EVENTS})
export const deSelectAllEvents = () => ({type: types.DESELECTALL_EVENTS})

export const clearEvents = () => ({ type: types.CLEAR_EVENTS })
export const toggleEvent = id => ({ type: types.TOGGLE_EVENT, id })
export const filterText = text => ({type: types.FILTER_TEXT, text})
