import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainBrowseContainer from './MainBrowseContainer';
import SecondaryBrowseContainer from './SecondaryBrowseContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpacomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

function Browse() {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  // Custom hook for fetching now playing moviews from API.
  useNowPlayingMovies();
  usePopularMovies();
  useUpacomingMovies();

  return (
    <div className='w-full'>

      {
        showGptSearch ? (<GPTSearch />) : (<>
          {/* Main Container (Video container, Video Title, Buttons)*/}
          <MainBrowseContainer />

          {/* Movie list containers (Title for movie lists, movie cards) */}
          <SecondaryBrowseContainer />
        </>)
      }
    </div>
  )
}

export default Browse
