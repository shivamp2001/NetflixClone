import React, { useEffect, useState } from 'react'
import HeaderAfterLogin from './HeaderAfterLogin'
import MoviesCard from './MoviesCard'
import "../style/movielist.css"

const TvShows = () => {

    const [tvshowsList, settvshowsList] = useState([])
  
    useEffect(() => {
        getData()
    }, [])
  
   
  
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=3a454a66b1789a6c6dc8b2871b82e6ca`)
        .then(res => res.json())
        .then(data => settvshowsList(data.results))
    }
    // console.log(tvshowsList);
    return (
        <div className="movie__list">
         
          <HeaderAfterLogin/>
  
            {/* <h2 className="list__title"></h2> */}
            <div className="list__cards" style={{marginTop:"115px"}}>
                {
                    tvshowsList.map(movie => (
                        <MoviesCard movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default TvShows
