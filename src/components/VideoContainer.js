import React from 'react'
import { useSelector } from 'react-redux';
import useMainMovieTrailer from '../hooks/useMainMovieTrailer';

export default function VideoContainer({ original_title, overview, movieId }) {

    //Custom hook to fetch movie trailer for main container
    useMainMovieTrailer(movieId);

    const mainTrailer = useSelector(store => store.movies?.mainMovieTrailer);

    return (
        <>
            <div className='absolute w-[100%] aspect-video pt-[25%] px-24 bg-gradient-to-r from-black text-white'>
                <h1 className='text-5xl text-white'>{original_title}</h1>
                <p className=' w-5/12 mt-4 text-white'>{overview}</p>
                <div className='mt-4'>
                    <button
                        className='px-6 py-2  m-2 rounded-sm bg-white text-black border border-black text-lg font-bold hover:opacity-75'>
                        &#9654; Play
                    </button>
                    <button
                        className='px-6 py-2  m-2 rounded-sm bg-gray-500 text-white border border-black text-lg font-bold hover:opacity-75'>
                        ❔More Info
                    </button>
                </div>
            </div>
            <div className='w-full '>
                <iframe
                    className='aspect-video'
                    width="100%"
                    src={"https://www.youtube.com/embed/" + mainTrailer?.key + "?autoplay=1&mute=1&showinfo=0&controls=0&autohide=1"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            </div>


        </>
    )
}
