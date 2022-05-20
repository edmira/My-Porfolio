import React from 'react'
import Work2 from '../../imazhet/work2.png'
import Work1 from '../../imazhet/work1.png'
import Work3 from '../../imazhet/work3.png'
import Work4 from '../../imazhet/work4.png'
import Work5 from '../../imazhet/work5.png'
import Work6 from '../../imazhet/work6.png'



const About = () => {
  return (
    <div name='about' className='w-full md:h-screen text-[#ffc42f] bg-[#1a1a1a]'> 
      <div className='max-w[1000px] mx-auto p-1 flex flex-col justify-center w-full h-full '>
        <div className='pb-8 ml-3'  >
          <p className='text-4xl font-bold inline border-b-4 text-[#ffc42f] border-[#c31919]'>My Work</p>
          <p className='pb-6 pt-3 text-[#f8ebff8a]'>Some magic I have created</p>
        </div>

      <div 
      className='grid sm:grid-cols-2 md:grid-cols-3 gap-9 px-4 mx-20'>
       {/* grid */}

        {/*e para  */}
        
        <div style={{backgroundImage: `url(${Work1}`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
          
          
          
          
          {/* hoveri */}
          <div className='opacity-0 group-hover:opacity-100'>
          <div className='text-center w-72 text-[#ecdfdf]'><p>A website about a Dancing Company, using HTML,CSS and Bootstrap</p></div>
            <div className='pt-4 text-center'>
              <a href="https://github.com/edmira/Edmira-s-Dance-Aacademy.git">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffc941] text-[#c70d0d] font-bold text-lg'>See the code</button>
              </a>
            </div>
          </div>
        </div>
        {/*e dyta  */}
        
        <div style={{backgroundImage: `url(${Work2}`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
          
          
          
          {/* hoveri */}
          <div className='opacity-0 group-hover:opacity-100'>
          <div className='text-center w-72 text-[#ecdfdf]'><p>A Rolling Dice Game that it's played between two players, using HTML,CSS and JavaScript</p></div>
            <div className='pt-4 text-center'>
              <a href="https://github.com/edmira/Dice-Roll.git">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffc941] text-[#c70d0d] font-bold text-lg'>See the code</button>
              </a>
            </div>
          </div>
        </div>
                {/*e treta  */}
        
                <div style={{backgroundImage: `url(${Work3}`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
          
          
          
          {/* hoveri */}
          <div className='opacity-0 group-hover:opacity-100'>
          <div className='text-center w-72 text-[#ecdfdf]'><p>A website about helping E-commerce businesses, using HTML,CSS and Bootstrap</p></div>
            <div className='pt-4 text-center'>
              <a href="https://github.com/edmira/e-commerce.git">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffc941] text-[#c70d0d] font-bold text-lg'>See the code</button>
              </a>
            </div>
          </div>
        </div>
                {/*e katerta  */}
        
                <div style={{backgroundImage: `url(${Work4}`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
          
          
          
          {/* hoveri */}
          <div className='opacity-0 group-hover:opacity-100'>
          <div className='text-center w-72 text-[#ecdfdf]'><p>A LogIn website, using HTML,CSS and Bootstrap</p></div>
            <div className='pt-4 text-center'>
              <a href="https://github.com/edmira/Edmira-s-Dance-Aacademy.git">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffc941] text-[#c70d0d] font-bold text-lg'>See the code</button>
              </a>
            </div>
          </div>
        </div>
                {/*e pesta  */}
        
                <div style={{backgroundImage: `url(${Work5}`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
          
          
          
          {/* hoveri */}
          <div className='opacity-0 group-hover:opacity-100'>
          <div className='text-center w-72 text-[#ecdfdf]'><p>A website about an online English course, using React</p></div>
            <div className='pt-4 text-center'>
              <a href="https://github.com/edmira/WeEngl-react.git">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffc941] text-[#c70d0d] font-bold text-lg'>See the code</button>
              </a>
            </div>
          </div>
        </div>
                {/*e gjashta  */}
        
                <div style={{backgroundImage: `url(${Work6}`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
          
          
          
          {/* hoveri */}
          <div className='opacity-0 group-hover:opacity-100'>
            <div className='text-center w-72 text-[#ecdfdf]'><p>A website about an online English course, using HTML,CSS and Bootstrap</p></div>
            <div className='pt-4 text-center'>
              <a href="https://github.com/edmira/WeEngl-Bootstrap.git">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffc941] text-[#c70d0d] font-bold text-lg'>See the code</button>
              </a>
            </div>
          </div>
        </div>


      </div>
      </div>
    </div>
  )
}

export default About