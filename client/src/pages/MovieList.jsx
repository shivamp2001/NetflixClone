import React, {useEffect, useState} from "react"
import "../style/movielist.css"
import { useParams } from "react-router-dom"
import MoviesCard from './MoviesCard'
import HeaderAfterLogin from "./HeaderAfterLogin"



const MovieList = () => {
  const [movieList, setMovieList] = useState([])
  const {type} = useParams()

  useEffect(() => {
      getData()
  },[])

  useEffect(() => {
      getData()
  },[type])

  const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
  }
// console.log(movieList);
  return (
      <div className="movie__list">
        {
        document.URL==="http://localhost:3000/movies"?

        <HeaderAfterLogin/>:""
        }
          <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
          <div className="list__cards">
              {
                  movieList.map(movie => (
                      <MoviesCard movie={movie} />
                  ))
              }
          </div>
      </div>
  )
}

export default MovieList
