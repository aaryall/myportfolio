import React from 'react'
import chatBotCoffee from '../../public/chatBotCoffee.png';
import ecommerce from '../../public/ecommerce.png'
import wordToPDF from '../../public/wordToPDF.png'
import expenseTracker from '../../public/expenseTracker.png'
import portfolio from '../../public/portfolio.jpg';

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
//name="Portfolio"
const Portfolio = () => {
    const cardItems = [
        {id: 1,
            logo:wordToPDF,
            name:"Word-to-PDF Converter",
            desc : "Software to convert word docx file to PDF format using Nodejs, React, Tailwindcss, Express.",
            srcCode: "https://github.com/aaryall/mern-pdf-converter",
            videoLink : "https://uploadnow.io/files/L7M3hQk",
            techStack: ["React","Tailwind CSS","Node","Express"]
        },
        {id: 2,
            logo:chatBotCoffee,
            name:"Chat-bot",
            desc : "Built a React-based chatbot integrated with Gemini 1.5 Flash, featuring real-time messaging, smooth UI transitions, and a toggleable chat interface. Enhanced with a custom coffee shop dataset for tailored responses.",
            srcCode:"https://github.com/aaryall/node-chat-app/tree/master",
            videoLink:"https://www.linkedin.com/posts/aryanportfolio_react-chatbot-ai-activity-7305814806467358720-KJcm?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl6sY4BeYNqDLfhJ0mWw78JLZcR6Rq75Zg",
            techStack: ["React","Tailwind CSS"]
        },
        {id: 3,
            logo:portfolio,
            name:"My portfolio",
            desc : "Created a responsive portfolio website using React, Tailwind CSS and various other react libraries. Showcased all projects with smooth navigation and integrated a contact form for users to send messages directly.",
            srcCode:"https://github.com/aaryall/myportfolio",
            videoLink:"",
            techStack: ["React","Tailwind CSS","Javascript"]
        },
        {id: 4,
            logo:expenseTracker,
            name:"Expense Tracker",
            desc : "Built a simple expense tracker in React with features like expense form, info display, transaction list—designed to strengthen core React concepts.",
            techStack: ["React","Tailwind CSS"]
        },
        {id: 5,
            logo:ecommerce,
            name:"E-commerce APIs",
            desc : "Designed and built the backend for an e-commerce platform using Node.js, Express, and MongoDB with Mongoose for real-time data handling. Implemented secure product management via JWT-based authorization and CORS policies. Added features like product ratings, filtering, and indexing for optimized performance. APIs were thoroughly tested with Postman and deployed on platforms like Docker.",
            srcCode:"https://github.com/aaryall/e-commerce-apis/tree/master",
            videoLink:"",
            techStack: ["Node","Express","MongoDB","Javascript"]
        }
    ]
  return (
    <div name="Portfolio"  className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div className=' mb-5 '>
            <h1 className='font-bold'>Portfolio</h1>
            <span className='underline font-semibold'>Feature Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                {
                    cardItems.map(({id,logo,name,desc,srcCode,videoLink,techStack})=>(
                        <div className='md:w-auto md:h-auto border-gray-200 border-[2px] rounded shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[300px] h-[200px]  p-3  rounded-3xl '/>
                            <div>
                                <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>{desc}</p>
                            </div>
                            
                            <div className='flex mt-3'>
                            <h1 className='font-semibold mt-1  '>Tech Stack - </h1>
                                {
                                    
                                    techStack.map((tech,index)=>(   
                                        
                                        tech=="React" && <div key={index}  className=' ml-2 text-3xl border-[2px] border-gray-300 rounded-full  '><FaReact/></div> ||
                                        tech=="Tailwind CSS" && <div key={index} className=' ml-2 text-3xl border-[2px] border-gray-300 rounded-full   '><SiTailwindcss/></div> ||
                                        tech=="MongoDB" && <div key={index} className='ml-2 text-3xl border-[2px] border-gray-300 rounded-full  '><SiMongodb/></div> ||
                                        tech=="Node" && <div key={index} className=' ml-2 text-3xl border-[2px] border-gray-300 rounded-full  '><IoLogoNodejs/></div> ||
                                        tech=="Express" && <div key={index} className='ml-2 text-3xl border-[2px] border-gray-300 rounded-full   '><SiExpress/></div> ||
                                        tech=="Javascript" && <div key={index} className='ml-2 text-3xl border-[2px] border-gray-300 rounded-full   '><IoLogoJavascript/></div>

                                    
                                    ))
                                }
                            </div>
                            
                            
                            <div className='px-6 py-4 space-x-4 '>
                                
                             {videoLink?<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer'><a href={videoLink} target='_blank'>Video</a></button> : ""}   
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded cursor-pointer' ><a href={srcCode} target='_blank'>Source code</a></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
       

      
    </div>
  )
}

export default Portfolio
