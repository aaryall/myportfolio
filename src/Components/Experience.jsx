// import React from 'react'
// import html from '../../public/html.png';
// import css from '../../public/css.jpg';
// import express from '../../public/express.png';
// import java from '../../public/java.png'
// import mongodb from '../../public/mongodb.jpg'
// import node from '../../public/node.png'
// import reactjs from '../../public/reactjs.png';
// //import javascript from '../../public/javscript.png';
// const Experience = () => {
//   const cardItems = [
//          {id: 1,
//              logo:html,
//              name:"Html"
//          },
//          {id: 2,
//              logo:css,
//              name:"css"
//          },
//          {id: 3,
//              logo:express,
//              name:"express"
//          },
//          {id: 4,
//              logo:java,
//              name:"java"
//          },
//          {id: 5,
//              logo:mongodb,
//              name:"mongodb"
//          },
//          {id: 6,
//             logo:node,
//             name:"node"
//         },
//         {id: 7,
//             logo:reactjs,
//             name:"rectjs"
//         }
//      ]
//    return (
//      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
//          <div className=' mb-5 '>
//              <h1 className='font-bold'>Portfolio</h1>
//              <span >I've more than 2 year of experience in below technologies</span>
//              <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-3'>
//                  {
//                      cardItems.map(({id,logo,name})=>(
//                          <div className=' flex flex-col items-center justify-center border-gray-200 border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
//                              <img src={logo} className='w-[150px] rounded-full'/>
//                              <div>
//                                  <div className=''>{name}</div>
//                              </div>
                            
//                          </div>
//                      ))
//                  }
//              </div>
//          </div>
        
 
       
//      </div>
//    )
// }

// export default Experience

import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import node from "../../public/node.png";
import mongodb from "../../public/mongodb.jpg";

import javascript from "../../public/javascript.png";

import react from "../../public/reactjs.png";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
        id: 4,
        logo: react,
        name: "React",
      },
    
    {
        id: 6,
        logo: mongodb,
        name: "MongoDB",
      },
      {
        id: 7,
        logo: node,
        name: "node",
      }
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-gray-300 border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
