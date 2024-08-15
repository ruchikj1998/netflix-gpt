import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainBrowseContainer from './MainBrowseContainer';
import SecondaryBrowseContainer from './SecondaryBrowseContainer';

function Browse() {

  // Custom hook for fetching now playing moviews from API.
  useNowPlayingMovies();

  return (
    <div className='w-full'>
      {/* Main Container (Video container, Video Title, Buttons)*/}

      <MainBrowseContainer/>

      {/* Movie list containers (Title for movie lists, movie cards) */}
      <SecondaryBrowseContainer/>
    </div>
  )
}

export default Browse
