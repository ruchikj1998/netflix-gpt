import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    useEffect(()=> {
      !popularMovies && getPopularMovies();
    }, [])
  
    // Feting Now Playing movie API and store it in moviesSlice Store
    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const response = await data.json();
      dispatch(addPopularMovies(response.results));
    }
}

export default usePopularMovies;