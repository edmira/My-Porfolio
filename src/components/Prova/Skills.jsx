import React from 'react';

import HTML from '../../imazhet/html.png';
import CSS from '../../imazhet/css.png';
import JavaScript from '../../imazhet/javascript.png';
import ReactImg from '../../imazhet/react.png';
import Node from '../../imazhet/node.png';
import GitHub from '../../imazhet/github.png';
import Tailwind from '../../imazhet/tailwind.png';


const Skills = () => {
  return (
        <div name='skills' className='w-full md:h-screen text-[#ffc42f] bg-[#1a1a1a]'> 
          <div className='max-w[1000px] mx-auto p-1 flex flex-col justify-center w-full h-full '>
            <div className='pb-8 ml-3'  >
              <p className='text-4xl font-bold inline border-b-4 text-[#ffc42f] border-[#c31919]'>My Skills</p>
              <p className='pb-6 pt-3 text-[#f8ebff8a]'>These are the technologies I've worked with</p>
            </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 text-center gap-9 px-4 mx-20'>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;