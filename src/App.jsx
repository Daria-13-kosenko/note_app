import './App.css'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'
import NoteList from './components/noteList'

function App() {
  return (
    <div>
      <Header />
      <Main>
        <NoteList />
      </Main>

      <Footer />
    </div>
  )
}

export default App
