export function addNote(data) {
  return {
    type: 'ADD_NOTE',
    payload: data,
  }
}
export function editNote(id, updatenote) {
  return {
    type: 'EDIT_NOTE',
    payload: id,
    updatenote,
  }
}
export function deleteNote(id) {
  return {
    type: 'DELETE_NOTE',
    payload: id,
  }
}
