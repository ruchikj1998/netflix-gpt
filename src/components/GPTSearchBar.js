import React, { useRef } from 'react'
import { API_OPTIONS, NETFLIX_BACKGROUND } from '../utils/constants'
import lang from '../utils/lang'
import { useDispatch, useSelector } from 'react-redux'
import openAIClient from '../utils/openAI';
import { addMovieResults, addSearchedTMDBMovies } from '../utils/gptSclice';
import useGPTSearchMovies from '../hooks/useGPTSearchMovies';

export default function GPTSearchBar() {


    const dispatch = useDispatch();
    const currentLang = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const searchGPTMoviesTMDB = async (movie) => {
        console.log(movie);

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
            movie
            + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const response = await data.json();
        //dispatch(addSearchedTMDBMovies(response.results));
        //console.log(response);
        return response.results;
    }

    const handleGPtSearch = async () => {
        // Make api call to get movie results

        const baseQuery = "Act like Movie Recomendation system and suggest some movie for the query" + searchText.current.value + ". Only give me names of 5 movies.";
        try {
            // Code to fire API to ask AI for movie suggestion 
            /*
            const chatCompletion = await openAIClient.chat.completions.create({
                messages: [{ role: 'user', content: baseQuery }],
                model: 'gpt-3.5-turbo',
            });

            if (!chatCompletion.choices)
                return "Error in GPT API";
    
            console.log(chatCompletion.choices?.[0]?.message?.content);

            const resultMovies = chatCompletion.choices?.[0]?.message?.content.split(",");

            */
            const resultMovieNames = ['Bahubali', 'Minions', 'Kill', 'Pink Panther', 'Home Alone 1'];

            dispatch(addMovieResults(resultMovieNames));
            const tmdbResultsPromises = resultMovieNames.map(movie => searchGPTMoviesTMDB(movie));

            const actualResults = await Promise.all(tmdbResultsPromises);

            dispatch(addSearchedTMDBMovies(actualResults));
        }
        catch {
            return "Error in GPT API";
        }
    }

    return (
        <div className=''>
            <div className='w-full h-auto absolute -z-10'>
                <img
                    className='opacity-4'
                    src={NETFLIX_BACKGROUND}
                    alt='bg' />
            </div>
            <form
                className='pt-[10%] w-1/2 m-auto text-center grid grid-cols-12'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type='text'
                    className='col-span-10 py-2 px-2 mr-2 mb-2 rounded-md'
                    placeholder={lang[currentLang].searchInputPlaceholder} />
                <button
                    className='col-span-2 py-2 mb-2  bg-black border rounded-md border-white text-white '
                    onClick={handleGPtSearch}
                >
                    {lang[currentLang].searchButton}
                </button>
            </form>
            <p
                className='text-white text-center w-[75%] m-auto bg-black bg-opacity-50 rounded-md p-4 text-xl'>
                Currently the GPT AI results are blocked beacuse of max use of api.
                You can still search and will get MOCK data for result "Most loved movies in India". The result is Bahubali, Minions, Kill, Pink Panther & Home Alone
            </p>
        </div>
    )
}
