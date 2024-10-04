import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <>
      <Header text="My Gallery" />
      <main>
        <SearchBar />
        <section>
          <Card />
          <Card />
        </section>
      </main>
    </>
  )
}

export default App
