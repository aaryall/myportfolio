import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped,Typed } from "react-typed";
import mypic from "../../public/mypic.png"
const Home = () => {
  return (
    <>
        <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pt-16'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mt-12 md:mt-24  space-y-2 order-2 md:order-1'>
                    <span className='text-xl'>Welcome In my feed</span>
                    <div className=' flex space-x-1 text-2xl md:text-4xl'>
                    <h1>Hello I'm a </h1>
                    {/* <span className='text-red-700 font-bold'>Developer</span> */}
                    <ReactTyped
          strings={["Developer", "Programmar" , "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true} />
                    </div>
                    <br/>
                    <p className='text-sm md:text-md text-justify'>
                    Hi, I'm a Backend Developer with more than 2 years of experience building scalable web applications using the MERN stack.
                    I specialize in creating robust APIs and seamless backend systems that power modern web apps.
                    I'm currently expanding my skillset into full stack development.
                    </p>
                    <br/>
                {/*Social Media icons */}
                    <div className='flex flex-col  items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                        <div className='space-y-2'>
                            <h1 className='font-bold'>Available on</h1>
                            <ul className='flex space-x-5'>
                            <li className='text-2xl md:text-3xl hover:scale-110 duration-110 cursor-pointer'>
                                    <a  target="_blank" href='https://www.linkedin.com/in/aryanportfolio'>
                                    <FaLinkedin/>
                                    </a>
                            </li>
                            
                            <li className='text-2xl md:text-3xl hover:scale-110 duration-110 cursor-pointer'>
                                <a target='_blank' href='https://github.com/aaryall'><FaGithubSquare /></a>
                            </li>     
                            <li className='text-2xl md:text-3xl hover:scale-110 duration-110 cursor-pointer'>
                                <a target='_blank' href='https://leetcode.com/u/Aryan_672/'><SiLeetcode/></a></li>    
                            </ul>
                            
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold'>Currently working on</h1>
                            <ul className='flex space-x-5'>
                            <li className='text-2xl md:text-3xl hover:scale-110 duration-110 rounded-full border-[2px] border-gray-300  cursor-pointer'><SiMongodb/></li>
                            <li className='text-2xl md:text-3xl hover:scale-110 duration-110 rounded-full border-[2px] border-gray-300  cursor-pointer'><SiExpress /></li>     
                            <li className='text-2xl md:text-3xl hover:scale-110 duration-110 rounded-full border-[2px] border-gray-300  cursor-pointer'><FaReact/></li>  
                            <li className='text-2xl md:text-3xl hover:scale-110 duration-110 rounded-full border-[2px] border-gray-300  cursor-pointer'><IoLogoNodejs/></li>  
                            </ul>
                            
                        </div>
                    </div>
                    
                </div>
                {/*jfif*/}
                <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                    <img src={mypic} className='rounded-full w-auto h-auto' alt=''/>
                </div>
            </div>

            
        </div>
        <hr className='mx-auto w-auto'/>
    </>
  )
}

export default Home
