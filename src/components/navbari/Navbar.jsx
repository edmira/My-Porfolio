import React, {useState} from 'react';
import Logo from '../../imazhet/logo.png';
import {GiBarbarian} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll/modules';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#191A19] text-[#ffdc84] text-2xl '> 
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '60px'}}/>
      </div>
      
        <ul className='hidden md:flex'>
          <li> <Link to="home" smooth={true} duration={500}>
          Home
        </Link></li>
          <li><Link to="about" smooth={true} duration={500}>
          My Projects
        </Link></li>
          <li><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        </ul>


    {/* menuja anash */}
    <div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <GiBarbarian /> : <FaTimes />}
    </div>


    {/* ne cel */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1a1a1a] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          My Projects
        </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        </ul>


    </div>
  )
}

export default Navbar