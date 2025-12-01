import { createStore } from 'redux'
import noteReducer from './redusers'

const store = createStore(noteReducer)
export default store
