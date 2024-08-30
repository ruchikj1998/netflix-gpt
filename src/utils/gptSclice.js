import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptResult: null,
        tmdbResults: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMovieResults: (state, action) => { 
            state.gptResult = action.payload
        },
        addSearchedTMDBMovies: (state, action) => {
            state.tmdbResults = action.payload
        }
    },
});

export const {toggleGptSearchView, addMovieResults, addSearchedTMDBMovies} = gptSlice.actions;

export default gptSlice.reducer;