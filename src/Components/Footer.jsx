import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
  return (
    <>
        <hr/>
            
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <SiLeetcode size={24}/>
                            <FaLinkedin size={24}/>
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col item center'>
                            <p className='text-sm'>
                                &copy; 2025 Your Company. All rights reserved.
                            </p>
                            <p className='text-sm text-center'>Supportive Partner Aryan Pvt Ltd</p>
                        </div>
                    </div>
                </div>
                
            </footer>
    </>
    
  );
}

export default Footer; 
