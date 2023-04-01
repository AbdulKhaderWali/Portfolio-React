import React from 'react'
import { AiFillLinkedin, AiFillMail,  AiFillGithub, AiFillWechat} from 'react-icons/ai'

function SocialMediaIcons() {
  return (
    <>
        <AiFillGithub className='hover:text-black cursor-pointer' />
        <AiFillLinkedin className='hover:text-blue-800 cursor-pointer' />
        <AiFillMail className='hover:text-red-500 cursor-pointer' />
    </>
  )
}

export default SocialMediaIcons