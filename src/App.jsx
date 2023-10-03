
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './NavBar/Nav'
import Home from './Home/Home'
import Tv from './TV/Tv'
import MovieDetailsCompleted from './MovieDetailsCompleted/MovieDetailsCompleted'

function App() {
 

  return (
    <>
     <Nav />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='tv' element={<Tv/>} />
      <Route path='moviedetailscompleted/:id' element={<MovieDetailsCompleted/>} />
     
     </Routes>
    </>
  )
}

export default App
