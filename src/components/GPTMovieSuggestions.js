import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

export default function GPTMovieSuggestions() {

  const movies = useSelector(store => store.gpt.tmdbResults);
  const moviesNames = useSelector(store => store.gpt.gptResult);
  console.log(moviesNames);
  return (
    <div className='mt-64'>
      {movies && movies.map((list, index) => <MovieList key={index} title={moviesNames[index]} movies={list}/>)}
      
    </div>
  )
}
