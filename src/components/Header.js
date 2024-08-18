import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { LOGO, USER_PHOTO } from '../utils/constants';

function Header() {

  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute z-10 flex justify-between w-full  bg-gradient-to-b from-black'>
      <img
        className='w-44 mx-8'
        src={LOGO}
        alt='Logo' />

      <div>
        {user &&
          <ul className='m-4 p-4 flex font-bold text-white'>
            <li className=' mx-2'>{user.displayName}</li>
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
