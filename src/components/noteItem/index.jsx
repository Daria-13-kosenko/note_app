import React from 'react'
import { connect } from 'react-redux'
import { deleteNote, editNote } from '../../redux/actions'
import styles from './styles.module.css'

const NoteItem = ({ editNote, deleteNote, setNoteData }) => {
  return (
    <div className={styles.noteItem}>
      <h2>{editNote.title}</h2>
      <p>{editNote.text}</p>
      <button onClick={() => setNoteData(editNote.id)}></button>
      <button onClick={() => deleteNote(editNote.id)}>Delete</button>
    </div>
  )
}

const mapDispatchToProps = {
  deleteNote,
}
export default connect(null, mapDispatchToProps)(NoteItem)
