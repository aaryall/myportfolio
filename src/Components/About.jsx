import React from 'react'
 
const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
          <h1 className='text-3xl font-bold mb-5 '>About</h1>
          <p className='text-justify'>Software Engineer with 2 years of experience as a Backend Developer at Accenture.
                        Proficient in designing and implementing scalable backend solutions using the MERN
                        stack. Skilled in building robust APIs and integrating front-end and back-end systems.
                        Currently seeking opportunities to expand expertise in full stack development.</p>

          <br/>
          <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
          <p className='text-justify mt-1'>GALGOTIA COLLEGE OF ENGINEERING &
    TECHNOLOGY 
    <ul className='list-disc list-inside'>
      <li>Bachelor's of Technology CSE - <span className='ml-6 md:ml-0'>8.01 CGPA</span></li>
      <li>Intermediate - 87.1%</li>
      <li>High school - 10 CGPA</li>
    </ul>
    </p>

    <br/>
    <br/>
    <h1 className='text-green-600 font-semibold text-xl'>Skill & Expertise</h1>
          <p className='text-justify mt-1' >  Proficient in Java and Javascript(ES6) Experienced with React, Node.js, SQL Strong grasp of Docker, MongoDB, Tailwind CSS </p>

    <br/>
    <br/>

          <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
          
          <h1 className='font-semibold mt-5 mb-2'>Software Engineer Analyst </h1>
          <p className='text-justify mt-1'>
            <ul className='list-disc list-inside'>
              
                <li>Created and maintained RESTful APIs, supporting a user base of 100,000+ and
                contributing to a 15% growth in traffic.</li>
                <li>Increased application performance by 20% through the effective implementation of
                caching strategies and database indexing.</li>
                <li>Engaged in weekly coding sprints, consistently meeting deadlines, and contributing
                to a 5% overall increase in team productivity.</li>
            </ul>
          </p>

    <br/>
    <br/>
    <h1 className='text-green-600 font-semibold text-xl'>Achivement and Awards</h1>
          <p className='text-justify mt-1'>I was awarded Accenture’s FY 2023 Pinnacle Award and the Celebrate Excellence Award for outstanding performance. Additionally, I ranked Ace Coder #1 five times at Coding Ninjas, reflecting my strong coding and problem-solving skills.</p>

    <br/>
      </div>
    </div>
  )
}

export default About
