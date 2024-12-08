import React from 'react';
import { FaFacebook ,FaInstagram ,FaTwitter ,FaLinkedinIn} from 'react-icons/fa6';

const Footer = () => {
  return (
  <>
  <hr />
  <footer className='py-12'>
    <div className="max-w-screen-2xl container max-auto px-4  md:px-20 ">
       
    <div className='flex flex-col items-center justify-center'>
    
    <div className='flex space-x-4'>
        <FaFacebook size={24}/>
        <FaInstagram size={24}/>
        <FaTwitter size={24} />
        <FaLinkedinIn  size={24}/>

 
    </div>
    <div className='mt-2 border-t border-gray-700 pt-5 flex flex-col items-center'>
    <p className='text-sm'> &copy; 2024 All Right Reserved To Narendra Kumar</p>
    <p>Thank You ❤️</p>
    </div>
   </div>
    </div>
  </footer>
  
  </>
  )
}

export default Footer
