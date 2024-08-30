import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpacomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    useEffect(()=> {
      !upcomingMovies && getUpcomingMovies();
    }, [])
  
    // Feting Now Playing movie API and store it in moviesSlice Store
    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const response = await data.json();
      dispatch(addUpcomingMovies(response.results));
    }
}

export default useUpacomingMovies;