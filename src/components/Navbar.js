import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import {BsFillMoonStarsFill, BsLaptopFill, BsSunFill} from 'react-icons/bs';
import {HiInformationCircle, HiMail} from 'react-icons/hi'
function Navbar({setDarkMode, darkMode}) {
  return (
    <nav className='py-10 mb-12 flex justify-between items-center'>
      <h1 className='text-2xl font-mr font-dafoe dark:text-white'>Abdul Khader</h1>
      <ul className='hidden md:flex items-center dark:text-white'>
        <li className='px-2 lg:px-5'>Home</li>
        <li className='px-2 lg:px-5'>About</li>
        <li className='px-2 lg:px-5'>Projects</li>
        <li className='px-2 lg:px-5'>Contact</li>
      </ul>
      <ul className='flex items-center'>
        <li>
          {darkMode? 
          <BsSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-white' />
          :
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
        }
        </li>
        <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded-md ml-3 md:ml-6 lg:ml-10'>Resume</li>
      </ul>

      <ul className='w-full fixed bottom-0 left-0 flex items-center justify-around dark:text-white md:hidden'>
        <li className='flex flex-col items-center'><AiFillHome/> Home</li>
        <li className='flex flex-col items-center'><HiInformationCircle /> About</li>
        <li className='flex flex-col items-center'><BsLaptopFill /> Projects</li>
        <li className='flex flex-col items-center'><HiMail /> Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar