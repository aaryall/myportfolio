import React from 'react'
import express from '../../public/express.png';
import java from '../../public/java.png'
import mongodb from '../../public/mongodb.jpg'
import node from '../../public/node.png'
import reactjs from '../../public/reactjs.png';
//name="Portfolio"
const Portfolio = () => {
    const cardItems = [
        {id: 1,
            logo:mongodb,
            name:"MongoDB"
        },
        {id: 2,
            logo:express,
            name:"Express"
        },
        {id: 3,
            logo:reactjs,
            name:"Reactjs"
        },
        {id: 4,
            logo:node,
            name:"Nodejs"
        },
        {id: 5,
            logo:java,
            name:"Java"
        }
    ]
  return (
    <div name="Portfolio"  className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div className=' mb-5 '>
            <h1 className='font-bold'>Portfolio</h1>
            <span className='underline font-semibold'>Feature Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div className='md:w-[300px] md:h-[300px] border-gray-200 border-[2px] rounded shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[120px] h-[120px] border-gray-200 p-1 rounded-full border-[2px]'/>
                            <div>
                                <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>The tool is easy to use. All you need to do is choose the number of words </p>
                            </div>
                            <div className='px-6 py-4 space-x-4 '>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer'>Video</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded cursor-pointer' >sorce code</button>
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
