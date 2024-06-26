import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { useRef } from 'react';
import { checkValidata } from '../Utils/Validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/Firebase';


const Login = () => {

  const [Signin, SetSignin] = useState(true);

  const ToggleSignin = () => {

    SetSignin(!Signin);

  }


  const [errorMessage, seterrorMessage] = useState(null);


  const email = useRef(null);
  
  const password = useRef(null);
  
  const name = useRef(null);
 

  const handleButtonClick = () => {

    //validate data here
    const message = checkValidata(name.current.value, email.current.value, password.current.value);
    console.log(message);
    seterrorMessage(message);
    console.log(name.current.value);
    console.log(email.current.value);
     console.log(password.current.value);

    if (message) return;

    // signup  and signIn form

    if (!Signin) {

      // signup logic
      createUserWithEmailAndPassword(
        auth,
        name.current.value,
        email.current.value,
        password.current.value
      )

        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });

    }
    else {

      // Signin logic


    }



  }

  return (
    <div className=' bg-gradient-to-t from-black' >
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='images' />
      </div>

      <form onSubmit={(e) => e.preventDefault()}
        className='absolute p-10 bg-black w-[30%] my-24 mx-auto left-0 right-0 text-white rounded bg-opacity-85'>
        <h1 className=' font-bold text-[25px]'>{Signin ? "Sign In" : "Sign Up"}</h1>

        {!Signin && <input ref={name} className='w-full my-4 py-3 px-2 rounded bg-gray-700' type='text' placeholder='Enter name'></input>}
        <input ref={email}
          className=" w-full my-4 py-3 px-2 rounded bg-gray-700" type='text' placeholder='Enter email' />

        <input ref={password}
          className='w-full my-4 py-3 px-2 rounded bg-gray-700' type='password' placeholder='Enter password' />

        <div className='text-[16px] text-red-600'>{errorMessage}</div>

        <button className='w-full my-5 py-2 font-semibold rounded bg-[#E50914]' onClick={handleButtonClick}>{Signin ? "Sign In" : "Sign Up"}</button>
        <div className='py-2 cursor-pointer text-[13px]' onClick={ToggleSignin}> {Signin ? <p>New to Netflix ? Sign Up Now.</p> : <p>Already Registered ? Login Now</p>}</div>
      </form>






    </div>
  );
}

export default Login;
