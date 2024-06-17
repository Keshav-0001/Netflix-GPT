import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {

  const [Signin, SetSignin] = useState(true);

  const ToggleSignin = () => {

    SetSignin(!Signin);

  }


  return (
    <div className=' bg-gradient-to-t from-black' >
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='images' />
      </div>

      <form className='absolute p-10 bg-black w-[30%] my-32 mx-auto left-0 right-0 text-white rounded bg-opacity-85'>
        <h1 className=' font-bold text-[25px]'>{Signin ? "Sign In" : "Sing Up"}</h1>
        {!Signin && <input className='w-full my-4 py-3 px-2 rounded bg-gray-700' type='text' placeholder='Enter name'></input>}
        <input className=" w-full my-4 py-3 px-2 rounded bg-gray-700" type='text' placeholder='Enter email' />

        <input className='w-full my-4 py-3 px-2 rounded bg-gray-700' type='password' placeholder='Enter password' />
        <button className='w-full my-5 py-2 font-semibold rounded bg-[#E50914]'>Submit</button>
        <p className='py-2 cursor-pointer text-[13px]' onClick={ToggleSignin}> {Signin ? <div>New to Netflix ? Sign Up Now.</div> : <div>Already Registered ? Login Now</div>}</p>
      </form>






    </div>
  );
}

export default Login;
