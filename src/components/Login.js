import React, { useState } from 'react'
import Header from './Header'

export default function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInSignUp = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='w-full h-auto absolute'>
                <img
                    className='opacity-4'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/8a9a30f9-839d-4a8c-8752-f2657a7eb499/DE-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_fbdb936e-26f2-4c3f-b82a-920baf1e85d8_medium.jpg'
                    alt='bg' />
            </div>
            <form
                className='absolute w-3/12 bg-black bg-opacity-75 p-8 my-32 mx-auto right-0 left-0'>
                <h2
                    className='text-white text-3xl  my-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>
                {!isSignInForm &&
                    <input
                        type="text"
                        placeholder='Full Name'
                        name="Name"
                        className='w-full my-4 p-4 bg-black bg-opacity-65 border border-white rounded-md text-white' />
                }
                <input
                    type="email"
                    placeholder='Email'
                    name="Email"
                    className='w-full my-4 p-4 bg-black bg-opacity-65 border border-white rounded-md text-white' />
                <input
                    type="password"
                    placeholder='Password'
                    name="Password"
                    className='w-full my-4 p-4 bg-black bg-opacity-65 border border-white rounded-md text-white' />
                <button
                    type='submit'
                    className='p-4 my-4 w-full bg-red-700 text-white rounded-md' >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                <p className='text-white cursor-pointer' onClick={toggleSignInSignUp}>
                    {isSignInForm ? "Are you new to Netflix?  Sign Up Now" : "Already have an account?  Sign In Now"}
                </p>
            </form>
        </div>
    )
}
