import { useState } from 'react'
import { addNote } from '../../redux/actions'
import { connect } from 'react-redux'
import styles from './styles.module.css'

function NoteForm({ addNote }) {
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
    if (!noteData.title.trim() && !noteData.text.trim()) return

    addNote({
      id: Math.random(),
      ...noteData,
    })

    setNoteData({ title: '', text: '' })
  }

  return (
    <form className={styles.noteForm} onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={noteData.title}
        onChange={handleFormData}
        className={styles.input}
      />
      <textarea
        name="text"
        placeholder="Text"
        value={noteData.text}
        onChange={handleFormData}
        className={styles.inputText}
      />
      <button type="submit" className={styles.btnForm}>
        Add Note
      </button>
    </form>
  )
}

export default connect(null, { addNote })(NoteForm)
