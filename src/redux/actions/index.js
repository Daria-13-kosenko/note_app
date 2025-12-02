export function addNote(data) {
  return {
    type: 'ADD_NOTE',
    payload: data,
  }
}

export function editNote(id, updateNote) {
  return {
    type: 'EDIT_NOTE',
    payload: {
      id,
      updateNote,
    },
  }
}

export function deleteNote(id) {
  return {
    type: 'DELETE_NOTE',
    payload: id,
  }
}
