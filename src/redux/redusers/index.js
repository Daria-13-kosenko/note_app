const initialState = {
  notes: [],
}
const noteReducer = (state = initialState, action) => {
  if (action.type === 'ADD_NOTE') {
    state.notes = [...state.notes, action.payload]
  }
  if (action.type === 'EDIT_NOTE') {
    state.notes = [...state.notes, action.payload]
  }
  if (action.type === 'DELETE_NOTE') {
    state.notes = [...state.notes, action.payload]
  }
  return state
}
export default noteReducer
