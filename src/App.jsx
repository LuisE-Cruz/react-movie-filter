import './App.css'
import films from './data/films'
import MainContent from './Components/MainContent'
import MainHeader from './Components/MainHeader'

function App() {

  return (
    <>
      <MainHeader />
      <MainContent films={films} />
    </>
  )
}

export default App
