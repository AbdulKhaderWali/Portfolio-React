import React from 'react'
import { AiFillLinkedin, AiFillMail,  AiFillGithub, AiFillWechat} from 'react-icons/ai'

function SocialMediaIcons() {
  return (
    <>
        <AiFillGithub className='hover:text-black' />
        <AiFillLinkedin className='hover:text-blue-800' />
        <AiFillMail className='hover:text-red-500' />
    </>
  )
}

export default SocialMediaIcons