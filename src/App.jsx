
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './NavBar/Nav'
import Home from './Home/Home'
import Tv from './TV/Tv'
import MovieDetailsCompleted from './MovieDetailsCompleted/MovieDetailsCompleted'
import Favourites from './Favourites'
import { useState } from 'react'

function App() {
 const[favourites ,setFavourites]=useState([]);
 function addFavouritMovie(movie){
 setFavourites([...favourites ,movie])
 console.log(favourites.length)
 }
 function removeFavouritMovie(movie){
  let newFavourit = favourites.filter((moviedelete)=> movie.id !== moviedelete.id)
 setFavourites(newFavourit)
 
 }

  return (
    <>
     <Nav favourites={favourites}/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='tv' element={<Tv addFavouritMovie={addFavouritMovie} />} />
      <Route path='favourites' element={<Favourites removeFavouritMovie={removeFavouritMovie} favourites={favourites}/>} />
      <Route path='moviedetailscompleted/:id' element={<MovieDetailsCompleted/>} />
     
     </Routes>
    </>
  )
}

export default App
