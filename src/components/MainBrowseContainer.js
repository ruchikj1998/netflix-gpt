import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer';

export default function MainBrowseContainer() {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoContainer original_title={original_title} overview={overview} movieId={id}/>
    </div>
  )
}
