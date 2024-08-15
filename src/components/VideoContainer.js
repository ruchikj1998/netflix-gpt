import React from 'react'
import { useSelector } from 'react-redux';
import useMainMovieTrailer from '../hooks/useMainMovieTrailer';

export default function VideoContainer({ original_title, overview, movieId }) {

    //Custom hook to fetch movie trailer for main container
    useMainMovieTrailer(movieId);

    const mainTrailer = useSelector(store => store.movies?.mainMovieTrailer);

    return (
        <div className=''>
            <div className='relative aspect-video '>
                <iframe
                    className=' h-full w-full'
                    width="100%"
                    src={"https://www.youtube.com/embed/" + mainTrailer?.key + "?autoplay=1&mute=1&showinfo=0&controls=0&autohide=1"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            </div>
            <div className='absolute top-[70%] mx-16'>
                <h1 className='text-5xl'>{original_title}</h1>
                <p>{overview}</p>
                <div className='mt-4'>
                    <button className='px-6 py-2  m-2 rounded-sm bg-white text-black border border-black text-lg font-bold'>&#9654; Play</button>
                    <button className='px-6 py-2  m-2 rounded-sm bg-gray-500 text-white border border-black text-lg font-bold'>More Info</button>
                </div>
            </div>

        </div>
    )
}
