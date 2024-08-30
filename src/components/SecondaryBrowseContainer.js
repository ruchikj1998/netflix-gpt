import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export default function SecondaryBrowseContainer() {

  const movies = useSelector(store => store.movies);
  return (
    <div className='md:-mt-64 h-screen md:h-auto bg-black md:bg-inherit'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>

      <MovieList title="Popular" movies={movies.popularMovies}/>
      
      <MovieList title="Upcoming" movies={movies.upcomingMovies}/>
    </div>
  )
}
