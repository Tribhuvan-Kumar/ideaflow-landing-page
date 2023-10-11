import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';


const NavBar = () => {
  return (
    <>
    <div className='bg-black py-4 fixed w-full z-10'>
    <nav className='flex justify-between items-center mx-20'>
        <div>
            <p className='text-4xl font-black text-white'>Ideaflow</p>
        </div>
        <ul className='flex text-white dropdown-menu-btn-n2'>
            <li className='hover:text-blue-400 hover:underline'><Link to={'/'}>Home</Link></li>
            <li className='ms-5 hover:text-blue-400 hover:underline'><a href="https://www.ideaflow.io/careers">We're Hiring! JS, iOS +</a></li>
            <li className='ms-5 hover:text-blue-400 hover:underline'><a href="mailto:pleasecontact@ideaflow.io">Contact</a></li>
        </ul>
        <div className='text-white cursor-pointer hidden dropdown-menu-btn'>
          Menu
          <div className='absolute border rounded-lg w-56 right-20 h-28 hidden dropdown-menu-btn-n1'>
            <ul className='flex flex-col gap-2'>
              <li className='mt-2 ps-9 w-fit hover:underline hover:text-blue-400'>Home</li>
              <li className='ps-9 w-fit hover:underline hover:text-blue-400'>We're Hiring! Js, ios +</li>
              <li className='ps-9 w-fit hover:underline hover:text-blue-400'>Contact</li>
            </ul>
          </div>
        </div>
    </nav>
    </div>
    </>
  )
}

export default NavBar