import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearchedTMDBMovies } from '../utils/gptSclice';

const useGPTSearchMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
      getGPTSearchMovies();
    }, [])
  
    // Feting Now Playing movie API and store it in moviesSlice Store
    const getGPTSearchMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const response = await data.json();
      //dispatch(addSearchedTMDBMovies(response.results));
      //console.log(response);
    }
}

export default useGPTSearchMovies;