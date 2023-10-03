import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tv = () => {
  let [movie, setMovie] = useState([]);
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

 function nextNum(num){
    setpageNumber(++pageNumber)
  }
  function prevNum(num){
    setpageNumber(--pageNumber)
  }

  return (
    <>
      {movie ? (
        <>
          {" "}
          {
            <div className="row justify-content-center">
              {movie.map((movie, i) => (
                <div className="col-md-2 position-relative  my-2" key={i}>
                  <Link to={`/moviedetailscompleted/${movie.id}`}>
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500` + movie.poster_path
                      }
                      className=" w-100"
                      alt=""
                    />
                    <h6 className="py-2">{movie.original_title}</h6>
                    <h6 className="position-absolute top-0 bg-info p-1 ">
                      {movie.vote_count}
                    </h6>
                  </Link>
                </div>
              ))}
            </div>
          }
          <div className="d-flex py-5 w-100 justify-content-center">
            <button className="btn btn-danger px-4"onClick={()=>prevNum(pageNumber)}disabled={pageNumber<=1?true:false}>prev</button>
            <p className="number "> {pageNumber}</p>
            <button className="btn btn-danger px-4" onClick={()=>nextNum(pageNumber)}disabled={pageNumber<=100?false:true}>next</button>
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
