'use client';

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeroForm({ user }) {
  // handle errors 
  const [error, setError] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (
      'localStorage' in window
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername');
      redirect('/account?desiredUsername=' + username);
    }
  }, []);

  async function handleSubmit(ev) {
    ev.preventDefault();    // otra manera, para no usar tantos useState
    const form = ev.target;
    const input = form.querySelector('input');
    const username = input.value;

    if (username.length > 0) {
      if (user) {
        router.push('/account?desiredUsername=' + username);
      } else {
        window.localStorage.setItem('desiredUsername', username);
        router.push('/login')
      }
    } else if(username.length === 0){
      setError('User name is missing');
      return;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='inline-flex flex-col md:flex-row md:items-center'>
        <div>
        <span className='bg-white py-4 pl-4'>link.to/</span>
        <input
          type='text'
          className='py-4 '
          placeholder='username' />
        </div>
       
        <button
          type='submit'
          className='bg-blue-500 text-white py-4 px-6'>
          Join for free
        </button>
      </form>
      <br/>
      {error && (
        <div className="inline-flex bg-red-200 border border-red-500 p-2 m-2 text-center">
          {error}
        </div>
      )}
    </div>
  )
}
