import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import {Link} from 'react-scroll';
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navItems = [
       { id:1,
        text:"Home"},
        { id:2,
            text:"About"},
        { id:3,
            text:"Portfolio"},
        { id:4,
            text:"Experience"},
        { id:5,
            text:"Contact"}
    ]
  return (
    <div className=' max-w-screen-2xl container mx-auto  px-4 md:px-20  h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
          <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full' alt=""/>
                    <h1 className='font-semibold text-xl cursor-pointer'>Aryan
                        <p className='text-sm'>Software Engineer</p>
                    </h1>
                    
                </div>
                {/*Desktop Navbar*/}
                <div >
                    <ul className='hidden md:flex space-x-8 cursor-pointer'>
                   { navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 cursor-pointer' key ={id}>
                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass = "active">{text}</Link>
                    </li>
                   ))}
                    </ul>
                    <div className='md:hidden' onClick={()=>setMenu(!menu)}>{menu?<RxCross2 size={24}/>:<LuMenu size={24}/>}</div>
                    
                </div>

          </div>

         {/**Mobile navbar */}
          <div className='bg-white'>
          {menu && (
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                { navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key ={id}>                       
                     <Link onClick={()=> setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass = "active">{text}</Link></li>
                   ))}
            </ul>
          )}
          </div>
        </div>
  )
}

export default Navbar
