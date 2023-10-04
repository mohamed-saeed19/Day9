import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tv = ({ addFavouritMovie }) => {
  let [movie, setMovie] = useState([]);
  let [bg, setBg] = useState(false);
  let [pageNumber, setpageNumber] = useState(1);

  async function getMovie(num) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}`
    );

    setMovie(data.results);
  }

  useEffect(() => {
    getMovie(pageNumber);
  }, [pageNumber]);

  function nextNum(num) {
    setpageNumber(++pageNumber);
  }
  function prevNum(num) {
    setpageNumber(--pageNumber);
  }
  function bgColorWarnning() {
    setBg(!bg);
  }

  return (
    <>
      {movie ? (
        <>
          {" "}
          {
            <div className="row justify-content-center">
              {movie.map((movie, i) => (
                <div
                  className="movieFavourit col-md-2 position-relative  my-2"
                  key={i}
                >
                  <Link to={`/moviedetailscompleted/${movie.id}`}>
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500` + movie.poster_path
                      }
                      className=" w-100"
                      alt=""
                    />

                    <h6 className="py-2 text-white">{movie.original_title}</h6>
                  </Link>
                  <div
                    className="position-absolute   bg-transparent p-1 "
                    style={{ top: "80%", width: "91%" }}
                    onClick={bgColorWarnning}
                  >
                    <h6
                      className="addFavourit fs-5 p-2 "
                      onClick={() => addFavouritMovie(movie)}
                    >
                      Add To Favourites{" "}
                      <i className="fa-solid fa-heart px-2 fs-5" style={{color: "#ff0000"}}></i>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          }
          <div className="d-flex py-5 w-100 justify-content-center">
            <button
              className="btn btn-info px-4"
              onClick={() => prevNum(pageNumber)}
              disabled={pageNumber <= 1 ? true : false}
            >
              prev
            </button>
            <p className="number "> {pageNumber}</p>
            <button
              className="btn btn-info px-4"
              onClick={() => nextNum(pageNumber)}
              disabled={pageNumber <= 100 ? false : true}
            >
              next
            </button>
          </div>
        </>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <i className="spiner-movie fas fa-spinner fa-spin"></i>
        </div>
      )}
    </>
  );
};

export default Tv;
