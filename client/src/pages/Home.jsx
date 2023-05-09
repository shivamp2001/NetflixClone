import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/home.css"
import axios from 'axios'
import { API_KEY } from './Constant'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from './MovieList'
import HeaderAfterLogin from './HeaderAfterLogin'

const Home = () => {

  const[movies,setMovies]=useState([])

   const fetchMovies=async()=>{
    const response=await axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`)
    .catch((err)=>console.log(err))
    const Data= await response.data.results
    // console.log(Data);
    return Data
   }

   useEffect(()=>{
    fetchMovies().then((data)=>setMovies(data))
   },[])
//    console.log(movies);
  return (
   
    <>
    <div className="poster">
        <HeaderAfterLogin/>
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            { movies &&
                movies.map(movie => (
                    <Link style={{textDecoration:"none",color:"white"}} to={`/moviedetail/${movie.id}`} >
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='hi' />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage__rating">
                                    {movie ? movie.vote_average :""}
                                    <i className="fas fa-star" style={{fontSize:"25px"}}/>{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                    </Link>
                ))
            }
        </Carousel> 
        <MovieList />
    </div>
</>
    
  )
}

export default Home
