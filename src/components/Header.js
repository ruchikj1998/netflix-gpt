import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

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
        className='w-44'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
                src='https://occ-0-1555-1556.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
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
