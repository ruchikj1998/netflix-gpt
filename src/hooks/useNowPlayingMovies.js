import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    useEffect(()=> {
      !nowPlayingMovies && getNowPlayingMovies();
    }, [])
  
    // Feting Now Playing movie API and store it in moviesSlice Store
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const response = await data.json();
      dispatch(addNowPlayingMovies(response.results));
    }
}

export default useNowPlayingMovies;