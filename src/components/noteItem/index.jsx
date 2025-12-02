import React from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../../redux/actions'
import styles from './styles.module.css'

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div className={styles.noteItem}>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  )
}

export default connect(null, { deleteNote })(NoteItem)
