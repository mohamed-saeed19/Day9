import React from 'react'

const Favourites = ({favourites,removeFavouritMovie}) => {
  return (
    <div className='container'>
        <div className="row">
            {favourites.map((movie,i)=> <div className="col-md-2" key={i}>
                <div className="div">
                <div className="movieFavourit  position-relative  my-2">
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500` + movie.poster_path
                      }
                      className=" w-100"
                      alt=""
                    />
                    
                    <h6 className="py-2 text-white">{movie.original_title}</h6>
                    <div className="position-absolute ms-4 top-0  bg-transparent p-1 " >
                    <h6 className="addFavourit py-3 px-2 " onClick={()=>removeFavouritMovie(movie)}>REMOVE  <i class="fa-solid fa-trash ms-2" style={{color: "#f01414"}}></i></h6>   
                    </div>
                </div>
            </div>
        </div>) }
    </div>
    </div>
  )
}

export default Favourites