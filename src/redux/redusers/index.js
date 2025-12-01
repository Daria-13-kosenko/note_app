const initialState = {
  notes: [],
}
const noteReducer = (state = initialState, action) => {
  if (action.type === 'ADD_NOTE') {
    state.notes = [...state.notes, action.payload]
  }
  if (action.type === 'EDIT_NOTE') {
    state.map((note) =>
      note.id === action.payload.id
        ? { ...note, ...action.payload.updateNote }
        : note
    )
  }
  if (action.type === 'DELETE_NOTE') {
    state.filter((note) => note.id != action.payload)
  }
  return state
}
export default noteReducer
