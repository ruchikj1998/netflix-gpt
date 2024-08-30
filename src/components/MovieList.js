import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ title, movies }) {

    return (
        <div className='bg-black text-white'>
            <h1 className='text-2xl p-6 font-bold relative'>{title}</h1>
            <div className='flex overflow-x-scroll px-6 relative no-scrollbar'>

                <div className='flex'>
                    {movies && movies.map(movie => movie.backdrop_path ? <MovieCard key={movie.id} poster_path={movie.backdrop_path} /> : '' )}

                </div>
            </div>
        </div>

    )
}
