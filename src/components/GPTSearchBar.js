import React from 'react'
import { NETFLIX_BACKGROUND } from '../utils/constants'
import lang from '../utils/lang'
import { useSelector} from 'react-redux'

export default function GPTSearchBar() {

    const currentLang = useSelector(store => store.config.lang);
    return (
        <div className=''>
            <div className='w-full h-auto absolute -z-10'>
                <img
                    className='opacity-4'
                    src={NETFLIX_BACKGROUND}
                    alt='bg' />
            </div>
            <form className='pt-[10%] w-1/2 m-auto text-center grid grid-cols-12'>
                <input
                    type='text'
                    className='col-span-10 py-2 px-2 mr-2 mb-2 rounded-md'
                    placeholder={lang[currentLang].searchInputPlaceholder} />
                <button
                    className='col-span-2 py-2 mb-2  bg-black border rounded-md border-white text-white '>
                    {lang[currentLang].searchButton}
                </button>
            </form>
        </div>
    )
}
