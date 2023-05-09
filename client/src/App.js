import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import MovieList from "./pages/MovieList";
// import MoviesCard from "./pages/MoviesCard";
import MovieDetails from "./pages/MovieDetails";
import HeaderAfterLogin from "./pages/HeaderAfterLogin";
import LatestMovies from "./pages/LatestMovies";
import {Toaster} from "react-hot-toast"
import TvShows from "./pages/TvShows";

function App() {
  return (
    <React.Fragment>
    <Toaster toastOptions={{
      style:{background:"red",color:"white",width:"200px",height:"30px"}
    }}/>
     
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/player" element={<Player/>}/>
          <Route exact path="/moviedetail/:id" element={<MovieDetails/>}/>
          <Route exact path="/movie/:type" element={<MovieList/>}/>
          <Route exact path="/movies" element={<MovieList/>}/>
          <Route exact path="/latest" element={<LatestMovies/>}/>


          <Route exact path="/tvshows" element={<TvShows/>}/>

        </Routes>
      
    </React.Fragment>
  );
}

export default App;
