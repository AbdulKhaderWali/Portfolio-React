import React from 'react'
import SocialMediaIcons from '../shortComponents/SocialMediaIcons'
import laptop from '../assets/images/laptop.png'

function Main() {
  return (
    <div className='flex justify-evenly items-center'>
      <div>
        <img src={laptop} alt='image not found' />
      </div>
      <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Abdul Khader Wali</h2>
          <h3 className='text-2xl py-2 dark:text-teal-50'>Front-end Web Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-teal-100'>
              Iam a Frontend Web Developer specializing in react.
              This is my portfolio, check it out and you can contact me.
          </p>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
            <SocialMediaIcons />
          </div>
      </div>
    </div>
  )
}

export default Main