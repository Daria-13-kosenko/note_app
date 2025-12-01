import { useState } from 'react'
import { addNote } from '../../redux/actions'
import { connect } from 'react-redux'
import styles from './styles.module.css'

function NoteForm({ dispatch }) {
  const [noteData, setNoteData] = useState({
    title: '',
    text: '',
  })

  function handleFormData(event) {
    const { name, value } = event.target
    setNoteData({ ...noteData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(
      addNote({
        id: Math.random(),
        ...noteData,
      })
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.noteForm}>
      <input
        type="text"
        placeholder="title"
        value={noteData.title}
        name="title"
        onChange={(event) => handleFormData(event)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="text"
        value={noteData.text}
        name="text"
        onChange={(event) => handleFormData(event)}
        className={styles.inputText}
      />
      <button type="submit" className={styles.btnForm}>
        Add Note
      </button>
    </form>
  )
}

const mapStateToProps = (state, ownPrors) => ({
  dispatch: state.notes.find((note) => note.id === ownPrors),
})
const mapDispatchToProps = {
  addNote,
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
