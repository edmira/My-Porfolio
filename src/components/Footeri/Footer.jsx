
import React from 'react';
import { Link } from 'react-scroll/modules';
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#1a1a1a] text-[#ffc42f] py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>COPYRIGHT@EDMIRA</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <a href="https://www.facebook.com/edmira.mrishaj"><FaFacebook className='icon' /></a>
            <a href="mailto:mrishajedmira@gmail.com"><FaGoogle className='icon' /></a>
            <a href="https://www.linkedin.com/in/edmira-mrishaj-54b373236"><FaLinkedin className='icon' /></a>
            <a href="https://github.com/edmira"><FaGithub className='icon' /></a>
            <a href="https://www.instagram.com/edmiramrishaj/"><FaInstagram className='icon' /></a>
          </div>
          <div className='mt-5'>
          <ul className='text-right flex justify-center'>
            <li><Link to="home" smooth={true} duration={500}>
          Home
        </Link></li>
            <li><Link to="about" smooth={true} duration={500}>
          My Projects
        </Link></li>
            <li><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
          </ul>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;