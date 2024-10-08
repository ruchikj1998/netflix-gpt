import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_OPTIONS, LOGO, USER_PHOTO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSclice';
import { changeLang } from '../utils/configSlice';

function Header() {

  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const gptSearch = useSelector(store=> store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGPTSearchClick = () => {
    //Toggle GPT search component
    dispatch(toggleGptSearchView());
  }

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className='absolute z-10 flex justify-between w-full  bg-black md:bg-gradient-to-b from-black'>
      <img
        className='mx-2 w-16 md:w-44 md:mx-8'
        src={LOGO}
        alt='Logo' />

      <div>
        {user &&
          <ul className='md:m-4 p-4 flex font-bold text-white'>
            { gptSearch && <li className=' mx-2'>
              <select
                className='bg-black text-white text-xs md:text-base px-2 md:px-4 py-1 md:py-2 rounded-md border border-white'
                onChange={handleLangChange}
              >
                {LANG_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </li>}
            <li className=' mx-2'>
              <button
                className='px-2 py-1 text-[12px]  md:px-4 md:py-2 md:text-base rounded-md border border-white bg-black text-white'
                onClick={handleGPTSearchClick}
              >
                {gptSearch ? "Browse" : "GPT Search"}
              </button>
            </li>
            <li className=' text-center text-sm md:text-base mx-2 m-auto'>{user.displayName}</li>
            <li
              className=' mx-2 cursor-pointer group'
              onClick={handleSignOut}>
              <img
                className=''
                src={USER_PHOTO}
                alt='User' />
              <div
                className='hidden absolute right-0 bg-black bg-opacity-85 border border-white m-2 mt-0 p-4 group-hover:block '>
                Logout
              </div>
            </li>
          </ul>
        }
      </div>
    </div>
  )
}

export default Header
