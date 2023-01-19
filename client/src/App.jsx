import { Home, Detail, AddGame, Videogames } from '../src/pages/index'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../src/components/index'

function App() {

  return (
    <Layout>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Videogames />} />
          <Route path='/game/:id' element={<Detail />} />
          <Route path='/addgame' element={<AddGame />} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App
