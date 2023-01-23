import { Home, Detail, AddGame, Videogames } from '../src/pages/index'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from '../src/components/index'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/games' element={<Videogames />} />
            <Route exact path='/game/:id' element={<Detail />} />
            <Route exact path='/addgame' element={<AddGame />} />
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  )
}

export default App
