import React from 'react'
import { connect } from 'react-redux'
import NoteItem from '../noteItem'
import NoteForm from '../noteForm'
import styles from './styles.module.css'

function NoteList({ notes }) {
  return (
    <div className={styles.noteList}>
      <NoteForm />
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes,
})

export default connect(mapStateToProps)(NoteList)
