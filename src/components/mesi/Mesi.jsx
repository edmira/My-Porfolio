import React from 'react'
import './MesiStyle.css'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import { Link } from 'react-scroll/modules';

const Mesi = () => {
  return (
    <div name='home' className='mesi'>
        <div className="container">
            <div className="contentt">
                <p>Hello there, my name is:</p>
            </div>
            <h1>Edmira Mrishaj</h1>
            <div className='pershkrimi'>
                <p>I am a creative designer that can quickly adapt to a variety of situations with ease. I am a reliable, customer-focused team player that is excited to collaborate, but also has the initative and drive to work independently. I am a trusted colleague and efficient communicator. I love design. I am very creative and only seek positions that allow me to be so.</p>
            </div>
            <Link to="about" smooth={true} duration={500}><button className='text-[#ffc42f] border-2 border-[#ffc42f] px-4 py-3 my-6 w-max flex items-center hover:bg-[#c31919] hover:border-[#c31919]'>Check my work <BsFillArrowDownCircleFill className='ml-2'/></button></Link>
        </div>
    </div>
  )
}

export default Mesi