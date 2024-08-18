import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        mainMovieTrailer: null,
        popularMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMainMovieTrailer: (state, action) => {
            state.mainMovieTrailer = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
});

export const {addNowPlayingMovies, addMainMovieTrailer, addPopularMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;