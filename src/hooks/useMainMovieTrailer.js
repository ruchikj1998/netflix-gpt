import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMainMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMainMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieVideos(movieId);
    }, [])

    const getMovieVideos = async (id) => {
        console.log(id)
        const data = await fetch('https://api.themoviedb.org/3/movie/533535/videos?language=en-US', API_OPTIONS);
        const response = await data.json();

        const trailers = response.results.filter((video) => video.type === "Trailer")
        const trailer = trailers.length ? trailers[0] : response.results[0];
        console.log(trailer);
        dispatch(addMainMovieTrailer(trailer));
    }
}

export default useMainMovieTrailer;