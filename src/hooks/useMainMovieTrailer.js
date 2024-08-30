import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMainMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMainMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const mainTrailer = useSelector(store => store.movies.mainMovieTrailer);

    useEffect(() => {
        !mainTrailer && getMovieVideos();
    }, [])

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const response = await data.json();

        const trailers = response.results.filter((video) => video.type === "Trailer")
        const trailer = trailers.length ? trailers[0] : response.results[0];
        dispatch(addMainMovieTrailer(trailer));
    }
}

export default useMainMovieTrailer;