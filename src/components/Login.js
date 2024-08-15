import React, { useRef, useState } from 'react'
import { validateFullName, validateSignIn } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { NETFLIX_BACKGROUND } from '../utils/constants';

export default function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    // Handle sign In or Sign Up Button
    const handleSignInSignUp = () => {
        const hasSignInError = validateSignIn(email.current.value, password.current.value);
       
        setErrorMessage(hasSignInError);
        if (hasSignInError) return;
        
        if (!isSignInForm) {
            const hasFullNameError = validateFullName(fullName.current.value);
            setErrorMessage(hasFullNameError);
            if (hasFullNameError) return;
        }
        
        //Sign In / Sign Up
        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    //const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: fullName.current.value
                    }).then(() => {
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    //const errorCode = error.code;
                    const apiErrorMessage = error.message;
                    console.log(apiErrorMessage);
                    setErrorMessage(apiErrorMessage);

                });
        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    //const user = userCredential.user;
                })
                .catch((error) => {
                    //const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }
    }

    const toggleSignInSignUp = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <div className='w-full h-auto absolute'>
                <img
                    className='opacity-4'
                    src={NETFLIX_BACKGROUND}
                    alt='bg' />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='absolute w-3/12 bg-black bg-opacity-75 p-8 my-32 mx-auto right-0 left-0'>
                <h2
                    className='text-white text-3xl  my-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>
                {!isSignInForm &&
                    <input
                        ref={fullName}
                        type="text"
                        placeholder='Full Name'
                        name="Name"
                        className='w-full my-4 p-4 bg-black bg-opacity-65 border border-white rounded-md text-white' />
                }
                <input
                    ref={email}
                    type="email"
                    placeholder='Email'
                    name="Email"
                    className='w-full my-4 p-4 bg-black bg-opacity-65 border border-white rounded-md text-white' />
                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    name="Password"
                    className='w-full my-4 p-4 bg-black bg-opacity-65 border border-white rounded-md text-white' />

                <p className='text-red-700 m-4 font-bold'>{errorMessage}</p>

                <button
                    onClick={handleSignInSignUp}
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
