import React, { useState } from 'react'
import { connect } from 'react-redux'
import NoteItem from '../noteItem'
import NoteForm from '../noteForm'
import styles from './styles.module.css'

function NoteList({ noteDatas }) {
  const [editNote, setEditNote] = useState(null)
  return <div className={styles.noteList}>
    <NoteForm editNote={editNote} setEditNote={setEditNote}></NoteForm>
    {noteDatas.map)(noteData => {
      <NoteItem key={noteDatas.id} noteData={noteData} setNoteData={setEditNote}/>
    })}
  </div>
}

const mapStateToProps = (state)=>({
  dataNotes: state.dataNotes,
})
export default connect(mapStateToProps)(NoteList)
