import React from 'react'
import { MOVIE_IMAGE_URL } from '../utils/constants'

export default function MovieCard({poster_path}) {
    return (
        <div className='w-44 md:w-56 pr-4'>
            <img
                src={MOVIE_IMAGE_URL + poster_path}
                alt="Movie poster"
            />
        </div>
    )
}
