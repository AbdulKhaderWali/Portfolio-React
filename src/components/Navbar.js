import React from 'react'
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs';
function Navbar({setDarkMode, darkMode}) {
  return (
    <nav className='py-10 mb-12 flex justify-between items-center'>
      <h1 className='text-2xl font-mr font-dafoe dark:text-white'>Abdul Khader</h1>
      <img src='' />
      <ul className='flex items-center'>
        <li>
          {darkMode? 
          <BsSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-white' />
          :
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
        }
        </li>
        <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</li>
      </ul>
    </nav>
  )
}

export default Navbar