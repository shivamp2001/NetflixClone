import React, { useEffect, useState } from 'react'
import { API_KEY } from './Constant'
import HeaderAfterLogin from './HeaderAfterLogin'
import MoviesCard from './MoviesCard'
import "../style/movielist.css"

const LatestMovies = () => {
    const [movieLatest, setMovieLatest] = useState([])

    useEffect(() => {
        getLatestMovies()
    }, [])

    const getLatestMovies = () => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setMovieLatest(data.results))
    }
console.log(movieLatest);
  return (
    <div className="movie__list">
        {/* {
        document.URL==="http://localhost:3000/movies"?

    } */}
        <HeaderAfterLogin/>
          {/* <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2> */}
          <div className="list__cards letest">
              {
                  movieLatest.map(movie => (
                      <MoviesCard movie={movie} />
                  ))
              }
          </div>
      </div>
  )
}

export default LatestMovies
